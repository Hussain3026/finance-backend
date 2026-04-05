const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  const userId = req.user.id;

  const records = await Record.find({ userId });

  let totalIncome = 0;
  let totalExpense = 0;
  let categoryTotals = {};

  records.forEach(r => {
    if (r.type === "income") totalIncome += r.amount;
    else totalExpense += r.amount;

    categoryTotals[r.category] =
      (categoryTotals[r.category] || 0) + r.amount;
  });

  res.json({
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense,
    categoryTotals,
    recentTransactions: records.slice(-5)
  });
};