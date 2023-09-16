import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  
  price: {
    type: Number,
    required: true,
  },
  roomNumbers: [{number:Number,unavailableDates:{type:[Date]}}],
  title: {
    type: String,
    required: true,
  },
  maxPeople: {
    type: Number,
    required:true
  },
  desc: {
    type: String,
    required: true,
  },  

},
  { timestamps: true }
  
);

const Room = mongoose.model("Room", roomSchema);

export default Room;