import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  getExpenses,
  deleteExpense,
} from "../../api/expenseApi";

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await getExpenses();
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (!confirmDelete) return;

    try {
      await deleteExpense(id);

      setTransactions((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete expense.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          💳 Recent Transactions
        </h2>

        <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          {transactions.length} Transactions
        </span>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <p>Loading transactions...</p>
        </div>
      ) : transactions.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No transactions found.
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-gray-100">

                <th className="p-3 text-left">Expense</th>

                <th className="p-3 text-left">Category</th>

                <th className="p-3 text-left">Amount</th>

                <th className="p-3 text-left">Date</th>

                <th className="p-3 text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {transactions.map((item) => (

                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4 font-semibold">
                    {item.title || item.name}
                  </td>

                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {item.category || "General"}
                    </span>
                  </td>

                  <td className="p-4 font-bold text-red-600">
                    ₹{item.amount}
                  </td>

                  <td className="p-4">
                    {item.date
                      ? new Date(item.date).toLocaleDateString()
                      : "-"}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-4">

                      <button
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(item._id)
                        }
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
};

export default RecentTransactions;