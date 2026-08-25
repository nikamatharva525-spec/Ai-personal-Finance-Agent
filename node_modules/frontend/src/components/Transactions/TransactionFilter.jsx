import React from "react";

const TransactionFilter = ({
  category,
  setCategory,
  payment,
  setPayment,
  date,
  setDate,
}) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Filter Transactions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Category Filter */}
        <div>
          <label className="block text-gray-300 mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
          >
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Salary">Salary</option>
            <option value="Medical">Medical</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        {/* Payment Filter */}
        <div>
          <label className="block text-gray-300 mb-2">
            Payment Method
          </label>

          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
          >
            <option value="">All Payments</option>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>

        {/* Date Filter */}
        <div>
          <label className="block text-gray-300 mb-2">
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
          />
        </div>

      </div>
    </div>
  );
};

export default TransactionFilter;