import Expense from "../models/Expense.js";

export const getDashboardData = async (req, res) => {
  try {
    const expenses = await Expense.find();

    let totalExpense = 0;

    expenses.forEach((expense) => {
      totalExpense += expense.amount;
    });

    // Example values
    const totalIncome = 80000;

    const totalSavings = totalIncome - totalExpense;

    const totalBalance = totalSavings;

    res.status(200).json({
      totalBalance,
      totalIncome,
      totalExpense,
      totalSavings,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};