import React, { useState } from "react";
import {
  FaMoneyBillWave,
  FaTag,
  FaCalendarAlt,
  FaPlusCircle,
} from "react-icons/fa";

import { addExpense } from "../../api/expenseApi";

const ExpenseTracker = ({ refreshExpenses }) => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!expenseName || !amount || !category || !date) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const expenseData = {
        name: expenseName,
        amount: Number(amount),
        category,
        date,
      };

      const response = await addExpense(expenseData);

      console.log("Expense Saved:", response.data);

      alert("Expense Added Successfully!");

      setExpenseName("");
      setAmount("");
      setCategory("");
      setDate("");

      if (refreshExpenses) {
        refreshExpenses();
      }
    } catch (error) {
      console.error("Add Expense Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to add expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-8">
        <FaMoneyBillWave className="text-blue-600" />
        Add New Expense
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Expense Name
          </label>

          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            placeholder="Netflix Subscription"
            className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Amount (₹)
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="500"
            className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaTag className="text-blue-500" />
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg flex justify-center items-center gap-3 hover:scale-[1.02] transition duration-300 disabled:opacity-50"
          >
            <FaPlusCircle />
            {loading ? "Adding..." : "Add Expense"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseTracker;