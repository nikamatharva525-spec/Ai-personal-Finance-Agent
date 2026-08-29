import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const ExpenseList = ({
  expenses = [],
  onDelete,
  onEdit,
}) => {
  return (
    <div className="w-full min-w-0 rounded-2xl bg-white p-4 sm:p-5 shadow-md">

      {/* ========================= */}
      {/* TITLE */}
      {/* ========================= */}

      <h2 className="mb-5 text-xl sm:text-2xl font-bold text-gray-800">
        Recent Expenses
      </h2>

      {/* ========================= */}
      {/* EMPTY STATE */}
      {/* ========================= */}

      {expenses.length === 0 ? (
        <div className="rounded-xl bg-gray-50 p-6 text-center">
          <p className="text-gray-500">
            No expenses found.
          </p>
        </div>
      ) : (

        /* ========================= */
        /* EXPENSE LIST */
        /* ========================= */

        <div className="space-y-3 sm:space-y-4">

          {expenses.map((expense, index) => (
            <div
              key={expense._id || index}
              className="
                w-full
                min-w-0
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                p-4
                sm:p-5
                transition-all
                duration-300
                hover:shadow-md
              "
            >

              {/* ========================= */}
              {/* EXPENSE CONTENT */}
              {/* ========================= */}

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                {/* LEFT SIDE */}

                <div className="min-w-0 flex-1">

                  <h3
                    className="
                      break-words
                      text-base
                      sm:text-lg
                      font-semibold
                      text-gray-800
                    "
                  >
                    {expense.name || "Unnamed Expense"}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500 break-words">
                    {expense.category || "Other"}
                  </p>

                  <p className="mt-1 text-xs sm:text-sm text-gray-400">
                    {expense.date
                      ? new Date(
                          expense.date
                        ).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "-"}
                  </p>

                </div>

                {/* RIGHT SIDE */}

                <div
                  className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-4
                    sm:flex-col
                    sm:items-end
                    sm:justify-center
                  "
                >

                  {/* AMOUNT */}

                  <h2
                    className="
                      break-all
                      text-lg
                      sm:text-xl
                      font-bold
                      text-red-600
                    "
                  >
                    ₹
                    {Number(
                      expense.amount || 0
                    ).toLocaleString("en-IN")}
                  </h2>

                  {/* ACTION BUTTONS */}

                  <div className="flex items-center gap-3">

                    {/* EDIT */}

                    {onEdit && (
                      <button
                        type="button"
                        onClick={() =>
                          onEdit(expense)
                        }
                        aria-label="Edit expense"
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-lg
                          bg-blue-50
                          text-blue-600
                          transition
                          hover:bg-blue-100
                          hover:text-blue-800
                          active:scale-95
                        "
                      >
                        <Pencil size={18} />
                      </button>
                    )}

                    {/* DELETE */}

                    <button
                      type="button"
                      onClick={() =>
                        onDelete(expense._id)
                      }
                      aria-label="Delete expense"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        bg-red-50
                        text-red-600
                        transition
                        hover:bg-red-100
                        hover:text-red-800
                        active:scale-95
                      "
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

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