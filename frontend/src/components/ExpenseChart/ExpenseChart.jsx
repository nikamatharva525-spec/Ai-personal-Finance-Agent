import React from "react";

const ExpenseChart = ({ expenses }) => {
  console.log("Expenses received:", expenses);

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">
        Expense Chart
      </h2>

      <p className="text-gray-400">
        Total Expenses: {expenses.length}
      </p>
    </div>
  );
};

export default ExpenseChart;