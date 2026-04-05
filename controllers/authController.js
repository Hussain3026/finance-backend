const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  // 🔥 FIX HERE
console.log("Entered password:", password);
console.log("Stored password:", user.password);

const isMatch = await bcrypt.compare(password, user.password);

console.log("Match result:", isMatch);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "secretkey",
    { expiresIn: "1d" }
  );
  res.json({ token });
};
