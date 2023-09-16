import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import mongoose from "mongoose";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to register user" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: "Password is incorrect" });
    }
    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.cookie("token", token, { httpOnly: true }).status(200).json({
      username: user.username,
      isAdmin: user.isAdmin,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ error: "An error occurred, could not login" });
  }
};

export const getAllUsers= async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
};


export const updateUser = async (req, res) => {
  const id = req.params.id.trim();

  // Check if the id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid UserupdatedUser id" });
  }
  // the { new: true } option to the findByIdAndUpdate() method. This option ensures that the updated document is returned in the response.

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id.trim();

  // Check if the id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid UserupdatedUser id" });
  }

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json("user has been deleted successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id.trim();

  // Check if the id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid User id" });
  }

  try {
    const user = await User.findById(id);
    console.log(user)
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

