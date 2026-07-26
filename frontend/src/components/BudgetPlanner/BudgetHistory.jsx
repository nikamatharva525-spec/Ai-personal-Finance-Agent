import React from "react";
import {
  FaCalendarAlt,
  FaWallet,
  FaMoneyBillWave,
} from "react-icons/fa";

const BudgetHistory = ({ history = [] }) => {

  const totalBudget = history.reduce(
    (sum, item) => sum + item.budget,
    0
  );

  const totalExpenses = history.reduce(
    (sum, item) => sum + item.expense,
    0
  );

  return (
    <div className="bg-slate-800 rounded-2xl shadow-xl p-6 mt-6 border border-slate-700">

      <div className="flex items-center gap-3 mb-6">
        <FaCalendarAlt className="text-3xl text-blue-400" />

        <h2 className="text-2xl font-bold text-white">
          Budget History
        </h2>
      </div>

      {history.length === 0 ? (
        <div className="text-center text-gray-400 py-10">
          <h3 className="text-xl font-semibold">
            No Budget History Yet
          </h3>

          <p className="mt-2">
            Add your income, expenses and save your budget.
          </p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>

                <tr className="border-b border-slate-600 text-gray-300">

                  <th className="py-3">Month</th>

                  <th className="py-3">Budget</th>

                  <th className="py-3">Expenses</th>

                  <th className="py-3">Savings</th>

                  <th className="py-3">Status</th>

                </tr>

              </thead>

              <tbody>

                {history.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b border-slate-700 hover:bg-slate-700 transition"
                  >

                    <td className="py-4 text-white">
                      {item.month}
                    </td>

                    <td className="py-4 text-green-400 font-semibold">
                      ₹{item.budget.toLocaleString()}
                    </td>

                    <td className="py-4 text-red-400 font-semibold">
                      ₹{item.expense.toLocaleString()}
                    </td>

                    <td
                      className={`py-4 font-semibold ${
                        item.savings >= 0
                          ? "text-blue-400"
                          : "text-red-500"
                      }`}
                    >
                      ₹{item.savings.toLocaleString()}
                    </td>

                    <td className="py-4">

                      {item.savings >= 0 ? (

                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                          Saved
                        </span>

                      ) : (

                        <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                          Overspent
                        </span>

                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

            <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-3">

              <FaWallet className="text-green-400 text-2xl" />

              <div>

                <p className="text-gray-400 text-sm">
                  Total Budget
                </p>

                <h3 className="text-white text-xl font-bold">
                  ₹{totalBudget.toLocaleString()}
                </h3>

              </div>

            </div>

            <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-3">

              <FaMoneyBillWave className="text-red-400 text-2xl" />

              <div>

                <p className="text-gray-400 text-sm">
                  Total Expenses
                </p>

                <h3 className="text-white text-xl font-bold">
                  ₹{totalExpenses.toLocaleString()}
                </h3>

              </div>

            </div>

          </div>

        </>
      )}

    </div>
  );
};

export default BudgetHistory;