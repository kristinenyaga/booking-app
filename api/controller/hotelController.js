import Hotel from "../models/Hotel.js"
import mongoose from "mongoose"

export const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const createHotel = async (req,res) => {
  const newHotel = new Hotel(req.body)

  try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
    
  } catch (err) {
    res.status(500).json(err)
  }
}

export const updateHotel = async (req, res) => {
  const id = req.params.id.trim();

  // Check if the id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid hotel id" });
  }
// the { new: true } option to the findByIdAndUpdate() method. This option ensures that the updated document is returned in the response.


  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const deleteHotel = async (req, res) => {
  const id = req.params.id.trim();

  // Check if the id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid hotel id" });
  }

  try {
    await Hotel.findByIdAndDelete(id);
    res.status(200).json("hotel has been deleted successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const getHotel = async (req, res) => {
  const id = req.params.id.trim();

  // Check if the id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid hotel id" });
  }

  try {
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

