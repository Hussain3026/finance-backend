const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      userId: req.user.id   // 👈 add this
    });

    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find({ userId: req.user.id });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(record);
};

exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};