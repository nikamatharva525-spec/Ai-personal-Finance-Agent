import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TransactionTable = () => {
  const transactions = [
    {
      id: 1,
      date: "10 Jul 2026",
      title: "Salary",
      category: "Income",
      amount: 80000,
      payment: "Bank",
    },
    {
      id: 2,
      date: "12 Jul 2026",
      title: "Groceries",
      category: "Food",
      amount: 1500,
      payment: "UPI",
    },
    {
      id: 3,
      date: "13 Jul 2026",
      title: "Petrol",
      category: "Travel",
      amount: 1200,
      payment: "Card",
    },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Transaction History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-white border-collapse">
          <thead>
            <tr className="bg-slate-700">
              <th className="p-3">Date</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-700 hover:bg-slate-700"
              >
                <td className="p-3">{item.date}</td>
                <td className="p-3">{item.title}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">₹{item.amount}</td>
                <td className="p-3">{item.payment}</td>

                <td className="p-3 text-center">
                  <button className="text-blue-400 hover:text-blue-600">
                    <FaEdit />
                  </button>
                </td>

                <td className="p-3 text-center">
                  <button className="text-red-400 hover:text-red-600">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TransactionTable;