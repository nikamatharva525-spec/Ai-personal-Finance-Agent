import React from "react";
import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
  FaPiggyBank,
  FaChartPie,
} from "react-icons/fa";

const MonthlySummary = () => {
  const summary = {
    income: 80000,
    expense: 28000,
    savings: 52000,
    highestCategory: "Food",
    transactions: 35,
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-6">
        Monthly Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Income */}
        <div className="bg-slate-700 rounded-lg p-5 flex items-center gap-4">
          <FaArrowDown className="text-green-400 text-3xl" />

          <div>
            <p className="text-gray-400">Total Income</p>
            <h3 className="text-2xl font-bold text-white">
              ₹{summary.income}
            </h3>
          </div>
        </div>

        {/* Expense */}
        <div className="bg-slate-700 rounded-lg p-5 flex items-center gap-4">
          <FaArrowUp className="text-red-400 text-3xl" />

          <div>
            <p className="text-gray-400">Total Expense</p>
            <h3 className="text-2xl font-bold text-white">
              ₹{summary.expense}
            </h3>
          </div>
        </div>

        {/* Savings */}
        <div className="bg-slate-700 rounded-lg p-5 flex items-center gap-4">
          <FaPiggyBank className="text-yellow-400 text-3xl" />

          <div>
            <p className="text-gray-400">Total Savings</p>
            <h3 className="text-2xl font-bold text-white">
              ₹{summary.savings}
            </h3>
          </div>
        </div>

        {/* Highest Expense Category */}
        <div className="bg-slate-700 rounded-lg p-5 flex items-center gap-4">
          <FaChartPie className="text-purple-400 text-3xl" />

          <div>
            <p className="text-gray-400">Highest Expense</p>
            <h3 className="text-2xl font-bold text-white">
              {summary.highestCategory}
            </h3>
          </div>
        </div>

      </div>

      {/* Bottom Section */}

      <div className="mt-6 bg-slate-700 rounded-lg p-5 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <FaWallet className="text-blue-400 text-3xl" />

          <div>
            <p className="text-gray-400">
              Total Transactions
            </p>

            <h3 className="text-2xl font-bold text-white">
              {summary.transactions}
            </h3>
          </div>
        </div>

      </div>

    </div>
  );
};

export default MonthlySummary;