const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  phone: String,
  dob: String,
  email: {
    type: String,
    unique: true
  },
  password: String
});

module.exports = mongoose.model("User", UserSchema);
