const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");


// REGISTER


router.post("/register", async (req, res) => {
  try {

    const { fname, lname, phone, dob, email, password } = req.body;

    const existing = await User.findOne({ email });

    if(existing)
      return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fname,
      lname,
      phone,
      dob,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ msg: "Registered successfully" });

  } catch(err) {
    res.status(500).json(err);
  }
});


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user)
      return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch)
      return res.status(400).json({ msg: "Invalid password" });

    res.json({
      msg: "Login success",
      user
    });

  } catch(err) {
    res.status(500).json(err);
  }

});

module.exports = router;
