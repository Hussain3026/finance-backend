const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
     console.log("BODY:", req.body); 
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });   // ✅ NO next()
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};