import React from "react";
import {
  FaCalendarDay,
  FaWallet,
  FaMoneyBillWave,
} from "react-icons/fa";

const DailyLimit = ({
  totalBudget = 30000,
  totalExpense = 18500,
}) => {
  // Remaining Budget
  const remainingBudget = totalBudget - totalExpense;

  // Current Date
  const today = new Date();

  // Total days in current month
  const totalDays = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  // Remaining days (including today)
  const remainingDays = totalDays - today.getDate() + 1;

  // Daily spending limit
  const dailyLimit =
    remainingDays > 0
      ? remainingBudget / remainingDays
      : 0;

  return (
    <div className="bg-slate-800 rounded-3xl shadow-xl p-6 border border-slate-700 mt-8">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <FaCalendarDay className="text-3xl text-blue-400" />

        <h2 className="text-3xl font-bold text-white">
          Daily Spending Limit
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Remaining Budget */}
        <div className="bg-slate-700 rounded-2xl p-5 text-center">
          <FaWallet className="text-green-400 text-3xl mx-auto mb-3" />

          <p className="text-gray-400">
            Remaining Budget
          </p>

          <h3 className="text-white text-2xl font-bold mt-2">
            ₹{remainingBudget.toLocaleString()}
          </h3>
        </div>

        {/* Remaining Days */}
        <div className="bg-slate-700 rounded-2xl p-5 text-center">
          <FaCalendarDay className="text-yellow-400 text-3xl mx-auto mb-3" />

          <p className="text-gray-400">
            Remaining Days
          </p>

          <h3 className="text-white text-2xl font-bold mt-2">
            {remainingDays}
          </h3>
        </div>

        {/* Daily Limit */}
        <div className="bg-slate-700 rounded-2xl p-5 text-center">
          <FaMoneyBillWave className="text-blue-400 text-3xl mx-auto mb-3" />

          <p className="text-gray-400">
            Daily Limit
          </p>

          <h3 className="text-green-400 text-2xl font-bold mt-2">
            ₹{dailyLimit.toFixed(0)}
          </h3>
        </div>

      </div>

      {/* AI Suggestion */}
      <div className="mt-8 bg-slate-700 rounded-2xl p-5 border-l-4 border-green-500">

        <h3 className="text-white font-bold text-lg mb-2">
          💡 Smart Suggestion
        </h3>

        <p className="text-gray-300">
          Spend no more than{" "}
          <span className="text-green-400 font-bold">
            ₹{dailyLimit.toFixed(0)}
          </span>{" "}
          each day to stay within your monthly budget.
        </p>

      </div>

    </div>
  );
};

export default DailyLimit;