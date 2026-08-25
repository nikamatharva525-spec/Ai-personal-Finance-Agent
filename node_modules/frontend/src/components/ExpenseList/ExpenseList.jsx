import React from "react";

const ExpenseList = ({ expenses = [], onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Expense History
      </h2>

      {expenses.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          No expenses found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Expense</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((expense, index) => (
                <tr
                  key={expense._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-4 text-gray-800">
                    {index + 1}
                  </td>

                  <td className="px-4 py-4 text-gray-800 font-medium">
                    {expense.name}
                  </td>

                  <td className="px-4 py-4 text-gray-700">
                    {expense.category}
                  </td>

                  <td className="px-4 py-4 font-bold text-red-600">
                    ₹{expense.amount}
                  </td>

                  <td className="px-4 py-4 text-gray-700">
                    {new Date(expense.date).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => onDelete(expense._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>
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

export default ExpenseList;