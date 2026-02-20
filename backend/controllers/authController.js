import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { fname, lname, phone, dob, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
      fname,
      lname,
      phone,
      dob,
      email,
      password: hashed,
    });

    return res.json({ msg: "Registration successful" });
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const check = await bcrypt.compare(password, user.password);
    if (!check) return res.status(400).json({ msg: "Invalid password" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7m" }
    );

    return res.json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        fname: user.fname,
        lname: user.lname,
        email: user.email
      }
    });
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
};
