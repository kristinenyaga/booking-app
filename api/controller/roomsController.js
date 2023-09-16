import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import mongoose from "mongoose";

export const createRoom = async (req, res) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    // Update the rooms array in the Hotel model
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });

    res.status(200).json(savedRoom);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const updateRoom = async (req, res) => {
  const id = req.params.id.trim();

  // Check if the id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid room id" });
  }

  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const deleteRoom = async (req, res) => {
  const id = req.params.id.trim();
  const hotelId = req.params.hotelid.trim();


  // Check if the id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid room id" });
  }

  try {
    await Room.findByIdAndDelete(id);
    await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: id } })
    
    res.status(200).json({ message: "Room has been deleted successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const getRoom = async (req, res) => {
  const id = req.params.id.trim();

  // Check if the id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid room id" });
  }

  try {
    const room = await Room.findById(id);
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
