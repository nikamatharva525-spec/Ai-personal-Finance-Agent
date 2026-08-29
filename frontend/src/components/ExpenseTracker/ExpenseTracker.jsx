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

  // =========================
  // ADD EXPENSE
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !expenseName.trim() ||
      !amount ||
      !category ||
      !date
    ) {
      alert("Please fill all fields");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    try {
      setLoading(true);

      const expenseData = {
        name: expenseName.trim(),
        amount: Number(amount),
        category,
        date,
      };

      const response = await addExpense(expenseData);

      console.log("Expense Saved:", response.data);

      alert("Expense Added Successfully!");

      // Reset form
      setExpenseName("");
      setAmount("");
      setCategory("");
      setDate("");

      // Refresh expense list
      if (refreshExpenses) {
        await refreshExpenses();
      }
    } catch (error) {
      console.error(
        "Add Expense Error:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to add expense"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        w-full
        min-w-0
        rounded-2xl
        sm:rounded-3xl
        border
        border-gray-200
        bg-white
        p-4
        sm:p-6
        md:p-8
        shadow-xl
      "
    >
      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <h2
        className="
          mb-6
          sm:mb-8
          flex
          items-center
          gap-3
          text-2xl
          sm:text-3xl
          font-bold
          text-gray-800
        "
      >
        <FaMoneyBillWave className="flex-shrink-0 text-blue-600" />

        <span>
          Add New Expense
        </span>
      </h2>

      {/* ========================= */}
      {/* FORM */}
      {/* ========================= */}

      <form
        onSubmit={handleSubmit}
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
          sm:gap-6
        "
      >
        {/* ========================= */}
        {/* EXPENSE NAME */}
        {/* ========================= */}

        <div className="min-w-0">

          <label
            className="
              mb-2
              block
              text-sm
              sm:text-base
              font-semibold
              text-gray-700
            "
          >
            Expense Name
          </label>

          <input
            type="text"
            value={expenseName}
            onChange={(e) =>
              setExpenseName(e.target.value)
            }
            placeholder="Netflix Subscription"
            className="
              w-full
              rounded-xl
              sm:rounded-2xl
              border
              border-gray-300
              bg-gray-50
              px-4
              sm:px-5
              py-3
              sm:py-4
              text-sm
              sm:text-base
              text-gray-800
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500
            "
            required
          />

        </div>

        {/* ========================= */}
        {/* AMOUNT */}
        {/* ========================= */}

        <div className="min-w-0">

          <label
            className="
              mb-2
              block
              text-sm
              sm:text-base
              font-semibold
              text-gray-700
            "
          >
            Amount (₹)
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            placeholder="500"
            min="1"
            step="0.01"
            className="
              w-full
              rounded-xl
              sm:rounded-2xl
              border
              border-gray-300
              bg-gray-50
              px-4
              sm:px-5
              py-3
              sm:py-4
              text-sm
              sm:text-base
              text-gray-800
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500
            "
            required
          />

        </div>

        {/* ========================= */}
        {/* CATEGORY */}
        {/* ========================= */}

        <div className="min-w-0">

          <label
            className="
              mb-2
              flex
              items-center
              gap-2
              text-sm
              sm:text-base
              font-semibold
              text-gray-700
            "
          >
            <FaTag className="text-blue-500" />
            Category
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="
              w-full
              rounded-xl
              sm:rounded-2xl
              border
              border-gray-300
              bg-gray-50
              px-4
              sm:px-5
              py-3
              sm:py-4
              text-sm
              sm:text-base
              text-gray-800
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500
            "
            required
          >
            <option value="">
              Select Category
            </option>

            <option value="Food">
              Food
            </option>

            <option value="Travel">
              Travel
            </option>

            <option value="Shopping">
              Shopping
            </option>

            <option value="Bills">
              Bills
            </option>

            <option value="Entertainment">
              Entertainment
            </option>

            <option value="Education">
              Education
            </option>

            <option value="Healthcare">
              Healthcare
            </option>

            <option value="Others">
              Others
            </option>
          </select>

        </div>

        {/* ========================= */}
        {/* DATE */}
        {/* ========================= */}

        <div className="min-w-0">

          <label
            className="
              mb-2
              flex
              items-center
              gap-2
              text-sm
              sm:text-base
              font-semibold
              text-gray-700
            "
          >
            <FaCalendarAlt className="text-blue-500" />
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
            className="
              w-full
              rounded-xl
              sm:rounded-2xl
              border
              border-gray-300
              bg-gray-50
              px-4
              sm:px-5
              py-3
              sm:py-4
              text-sm
              sm:text-base
              text-gray-800
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500
            "
            required
          />

        </div>

        {/* ========================= */}
        {/* SUBMIT BUTTON */}
        {/* ========================= */}

        <div className="md:col-span-2">

          <button
            type="submit"
            disabled={loading}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              sm:rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              py-3
              sm:py-4
              text-base
              sm:text-lg
              font-bold
              text-white
              transition-all
              duration-300
              hover:scale-[1.01]
              hover:from-blue-700
              hover:to-indigo-700
              active:scale-[0.99]
              disabled:cursor-not-allowed
              disabled:opacity-50
              disabled:hover:scale-100
            "
          >
            <FaPlusCircle />

            {loading
              ? "Adding..."
              : "Add Expense"}
          </button>

        </div>
      </form>
    </div>
  );
};

export default ExpenseTracker;