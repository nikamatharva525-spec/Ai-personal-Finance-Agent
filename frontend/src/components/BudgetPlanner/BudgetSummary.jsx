import React from "react";
import {
  FaWallet,
  FaMoneyBillWave,
  FaPiggyBank,
} from "react-icons/fa";

const BudgetSummary = ({
  totalBudget,
  totalExpense,
  totalSavings,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
        <FaWallet className="text-blue-400 text-3xl mb-3" />
        <h3 className="text-gray-400">Monthly Budget</h3>
        <h2 className="text-3xl font-bold text-white">
          ₹{totalBudget.toLocaleString()}
        </h2>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
        <FaMoneyBillWave className="text-red-400 text-3xl mb-3" />
        <h3 className="text-gray-400">Total Expense</h3>
        <h2 className="text-3xl font-bold text-white">
          ₹{totalExpense.toLocaleString()}
        </h2>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
        <FaPiggyBank className="text-green-400 text-3xl mb-3" />
        <h3 className="text-gray-400">Total Savings</h3>
        <h2 className="text-3xl font-bold text-green-400">
          ₹{totalSavings.toLocaleString()}
        </h2>
      </div>

    </div>
  );
};

export default BudgetSummary;