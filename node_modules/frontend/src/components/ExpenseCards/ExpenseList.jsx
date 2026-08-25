import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const ExpenseList = ({ expenses = [], onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-2xl font-bold mb-5">
        Recent Expenses
      </h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500 text-center">
          No expenses found.
        </p>
      ) : (
        <div className="space-y-4">
          {expenses.map((expense) => (
            <div
              key={expense._id}
              className="border rounded-xl p-4 flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {expense.name}
                </h3>

                <p className="text-gray-500">
                  {expense.category}
                </p>

                <p className="text-gray-400 text-sm">
                  {expense.date}
                </p>
              </div>

              <div className="text-right">
                <h2 className="text-red-600 font-bold text-xl">
                  ₹{expense.amount}
                </h2>

                <div className="flex gap-3 mt-2 justify-end">
                  <button
                    onClick={() => onEdit(expense)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={20} />
                  </button>

                  <button
                    onClick={() => onDelete(expense._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;