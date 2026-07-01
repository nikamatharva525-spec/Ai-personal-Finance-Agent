import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const ExpenseTracker = () => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!expenseName || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      expenseName,
      amount: Number(amount),
      category,
      date,
    };

    setExpenses([...expenses, newExpense]);

    // Clear form
    setExpenseName("");
    setAmount("");
    setCategory("Food");
    setDate("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
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
          onChange={(e) => setExpenseName(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-lg p-3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option>Food</option>
          <option>Shopping</option>
          <option>Travel</option>
          <option>Bills</option>
          <option>Education</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-lg p-3"
        />

      </div>

      <button
        onClick={addExpense}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg mt-5 w-full"
      >
        Add Expense
      </button>

      <div className="mt-6">
        <h3 className="text-xl font-bold">
          Total Expense : ₹{totalExpense}
        </h3>
      </div>

      {/* Expense List */}
      <div className="mt-6 space-y-3">

        {expenses.length === 0 ? (
          <p className="text-gray-500 text-center">
            No expenses added yet.
          </p>
        ) : (
          expenses.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-xl"
            >
              <div>
                <h3 className="font-semibold">
                  {item.expenseName}
                </h3>

                <p className="text-gray-500">
                  {item.category} • {item.date}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <h2 className="font-bold text-red-600">
                  ₹{item.amount}
                </h2>

                <button
                  onClick={() => deleteExpense(item.id)}
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