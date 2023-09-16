import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide a unique username"],
    unique: [true, "Username exists"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default:false
  }
});
// model name -1st arg and its structure is the userSchema as the 2nd arg

export default mongoose.model.Users || mongoose.model('User',userSchema)