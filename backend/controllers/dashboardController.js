import Expense from "../models/Expense.js";
import Income from "../models/Income.js";

export const getDashboardData = async (req, res) => {
  try {
    const [expenses, incomes] = await Promise.all([
      Expense.find(),
      Income.find(),
    ]);

    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense += Number(expense.amount || 0);
    });

    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += Number(income.amount || 0);
    });

    const totalBalance = totalIncome - totalExpense;
    const totalSavings = totalBalance;

    res.status(200).json({
      success: true,
      totalBalance,
      totalIncome,
      totalExpense,
      totalSavings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};