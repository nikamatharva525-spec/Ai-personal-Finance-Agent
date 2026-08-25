import React from "react";

const ExpenseSummary = () => {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <h3 className="text-xl font-bold text-white mb-5">
        📊 Expense Summary
      </h3>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span className="text-gray-300">Shopping</span>
          <span className="text-white">₹8,000</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Food</span>
          <span className="text-white">₹5,000</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Travel</span>
          <span className="text-white">₹2,500</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Bills</span>
          <span className="text-white">₹7,000</span>
        </div>

      </div>

    </div>
  );
};

export default ExpenseSummary;