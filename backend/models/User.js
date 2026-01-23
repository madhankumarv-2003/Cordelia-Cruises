import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  phone: String,
  dob: String,
  email: { type: String, unique: true },
  password: String
});

export default mongoose.model("customers", userSchema);
