import React, { useState } from "react";

const AddTransaction = () => {
  const [transaction, setTransaction] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    paymentMethod: "",
    notes: "",
  });

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(transaction);

    alert("Transaction Added Successfully!");

    setTransaction({
      title: "",
      amount: "",
      category: "",
      date: "",
      paymentMethod: "",
      notes: "",
    });
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Add New Transaction
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Transaction Title"
          value={transaction.title}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-700 text-white"
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={transaction.amount}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-700 text-white"
          required
        />

        <select
          name="category"
          value={transaction.category}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-700 text-white"
          required
        >
          <option value="">Select Category</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Salary</option>
          <option>Medical</option>
          <option>Entertainment</option>
        </select>

        <input
          type="date"
          name="date"
          value={transaction.date}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-700 text-white"
          required
        />

        <select
          name="paymentMethod"
          value={transaction.paymentMethod}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-700 text-white"
          required
        >
          <option value="">Payment Method</option>
          <option>Cash</option>
          <option>UPI</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>Net Banking</option>
        </select>

        <textarea
          name="notes"
          placeholder="Notes"
          value={transaction.notes}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-700 text-white"
          rows="3"
        />

        <button
          type="submit"
          className="col-span-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;