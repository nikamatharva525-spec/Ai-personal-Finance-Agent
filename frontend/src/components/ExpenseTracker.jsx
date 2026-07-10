import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../api/expenseApi";

const ExpenseTracker = () => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const [expenses, setExpenses] = useState([]);

  const [editingId, setEditingId] = useState(null);

  // Fetch Expenses
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  // Add / Update Expense
  const handleSubmit = async () => {
    if (!expenseName || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const expenseData = {
      name: expenseName,
      amount: Number(amount),
      category,
      date,
    };

    try {
      if (editingId) {
        await updateExpense(editingId, expenseData);
      } else {
        await addExpense(expenseData);
      }

      fetchExpenses();

      setExpenseName("");
      setAmount("");
      setCategory("Food");
      setDate("");
      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  };

  // Edit Expense
  const handleEditExpense = (expense) => {
    setExpenseName(expense.name);
    setAmount(expense.amount);
    setCategory(expense.category);
    setDate(
      expense.date
        ? expense.date.substring(0, 10)
        : ""
    );
    setEditingId(expense._id);
  };

  // Delete Expense
  const handleDeleteExpense = async (id) => {
    try {
      await deleteExpense(id);
      fetchExpenses();
    } catch (error) {
      console.error(error);
    }
  };

  // Total Expense
  const totalExpense = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Expense Tracker
      </h2>

      {/* Form */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) =>
            setExpenseName(e.target.value)
          }
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          className="border rounded-lg p-3"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="border rounded-lg p-3"
        >
          <option>Food</option>
          <option>Shopping</option>
          <option>Travel</option>
          <option>Bills</option>
          <option>Education</option>
          <option>General</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          className="border rounded-lg p-3"
        />

      </div>

      {/* Button */}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg mt-5 w-full"
      >
        {editingId
          ? "Update Expense"
          : "Add Expense"}
      </button>

      {/* Total */}

      <div className="mt-6">

        <h3 className="text-xl font-bold">
          Total Expense : ₹{totalExpense}
        </h3>

      </div>

      {/* Expense List */}

      <div className="mt-6 space-y-3">

        {expenses.length === 0 ? (
          <p className="text-center text-gray-500">
            No expenses found.
          </p>
        ) : (
          expenses.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-gray-100 rounded-xl p-4"
            >
              <div>

                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.category}
                </p>

                <p className="text-sm text-gray-400">
                  {item.date
                    ? new Date(item.date).toLocaleDateString()
                    : "No Date"}
                </p>

              </div>

              <div className="flex items-center gap-4">

                <h2 className="font-bold text-red-600">
                  ₹{item.amount}
                </h2>

                <button
                  onClick={() =>
                    handleEditExpense(item)
                  }
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() =>
                    handleDeleteExpense(item._id)
                  }
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>

              </div>
            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default ExpenseTracker;