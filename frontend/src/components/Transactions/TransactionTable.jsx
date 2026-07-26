import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TransactionTable = ({ transactions = [] }) => {
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
              <th className="p-3">Type</th>
              <th className="p-3">Category</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>

          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-8 text-gray-400"
                >
                  No Transactions Found
                </td>
              </tr>
            ) : (
              transactions.map((item, index) => (
                <tr
                  key={item._id || index}
                  className="border-b border-slate-700 hover:bg-slate-700 transition"
                >
                  <td className="p-3">
                    {item.date
                      ? new Date(item.date).toLocaleDateString()
                      : "-"}
                  </td>

                  <td className="p-3">{item.title}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.type === "Income"
                          ? "bg-green-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {item.type}
                    </span>
                  </td>

                  <td className="p-3">{item.category}</td>

                  <td
                    className={`p-3 font-bold ${
                      item.type === "Income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.type === "Income" ? "+" : "-"}₹{item.amount}
                  </td>

                  <td className="p-3">
                    {item.payment || "-"}
                  </td>

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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;