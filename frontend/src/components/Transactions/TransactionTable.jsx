import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { deleteExpense } from "../../api/expenseApi";
import { deleteIncome } from "../../api/incomeApi";

const TransactionTable = ({
  transactions = [],
  refreshTransactions,
  onEdit,
}) => {
  // =========================
  // DELETE TRANSACTION
  // =========================

  const handleDelete = async (item) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmDelete) return;

    try {
      if (item.type === "Expense") {
        await deleteExpense(item._id);
      } else {
        await deleteIncome(item._id);
      }

      alert("Transaction deleted successfully.");

      if (refreshTransactions) {
        await refreshTransactions();
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.error(
        "Delete Transaction Error:",
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
          "Failed to delete transaction."
      );
    }
  };

  // =========================
  // FORMAT DATE
  // =========================

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // =========================
  // FORMAT AMOUNT
  // =========================

  const formatAmount = (amount) => {
    return Number(amount || 0).toLocaleString(
      "en-IN"
    );
  };

  return (
    <div
      className="
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        bg-slate-800
        p-4
        sm:p-5
        shadow-lg
      "
    >
      {/* ========================= */}
      {/* TITLE */}
      {/* ========================= */}

      <h2
        className="
          mb-5
          text-xl
          sm:text-2xl
          font-bold
          text-white
        "
      >
        Transaction History
      </h2>

      {/* ========================= */}
      {/* TABLE WRAPPER */}
      {/* ========================= */}

      <div
        className="
          w-full
          overflow-x-auto
          rounded-xl
        "
      >
        <table
          className="
            w-full
            min-w-[850px]
            border-collapse
            text-white
          "
        >
          {/* ========================= */}
          {/* TABLE HEADER */}
          {/* ========================= */}

          <thead>
            <tr className="bg-slate-700">

              <th className="whitespace-nowrap p-3 text-left text-sm">
                Date
              </th>

              <th className="whitespace-nowrap p-3 text-left text-sm">
                Title
              </th>

              <th className="whitespace-nowrap p-3 text-left text-sm">
                Type
              </th>

              <th className="whitespace-nowrap p-3 text-left text-sm">
                Category
              </th>

              <th className="whitespace-nowrap p-3 text-right text-sm">
                Amount
              </th>

              <th className="whitespace-nowrap p-3 text-left text-sm">
                Payment
              </th>

              <th className="whitespace-nowrap p-3 text-center text-sm">
                Edit
              </th>

              <th className="whitespace-nowrap p-3 text-center text-sm">
                Delete
              </th>

            </tr>
          </thead>

          {/* ========================= */}
          {/* TABLE BODY */}
          {/* ========================= */}

          <tbody>

            {transactions.length === 0 ? (

              <tr>
                <td
                  colSpan="8"
                  className="
                    py-10
                    text-center
                    text-sm
                    text-gray-400
                  "
                >
                  No Transactions Found
                </td>
              </tr>

            ) : (

              transactions.map((item, index) => (

                <tr
                  key={item._id || index}
                  className="
                    border-b
                    border-slate-700
                    transition
                    hover:bg-slate-700
                  "
                >

                  {/* DATE */}

                  <td className="whitespace-nowrap p-3 text-sm">
                    {formatDate(item.date)}
                  </td>

                  {/* TITLE */}

                  <td className="max-w-[180px] p-3 text-sm">
                    <div className="break-words">
                      {item.title || "-"}
                    </div>
                  </td>

                  {/* TYPE */}

                  <td className="p-3">

                    <span
                      className={`
                        inline-flex
                        whitespace-nowrap
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        sm:text-sm
                        font-semibold
                        ${
                          item.type === "Income"
                            ? "bg-green-600 text-white"
                            : "bg-red-600 text-white"
                        }
                      `}
                    >
                      {item.type}
                    </span>

                  </td>

                  {/* CATEGORY */}

                  <td className="max-w-[150px] p-3 text-sm">
                    <div className="break-words">
                      {item.category || "-"}
                    </div>
                  </td>

                  {/* AMOUNT */}

                  <td
                    className={`
                      whitespace-nowrap
                      p-3
                      text-right
                      text-sm
                      font-bold
                      ${
                        item.type === "Income"
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    `}
                  >
                    {item.type === "Income"
                      ? "+"
                      : "-"}
                    ₹{formatAmount(item.amount)}
                  </td>

                  {/* PAYMENT */}

                  <td className="whitespace-nowrap p-3 text-sm">
                    {item.payment || "-"}
                  </td>

                  {/* EDIT */}

                  <td className="p-3 text-center">

                    <button
                      type="button"
                      onClick={() => {
                        console.log(
                          "Edit button clicked:",
                          item
                        );

                        if (onEdit) {
                          onEdit(item);
                        }
                      }}
                      aria-label="Edit transaction"
                      className="
                        inline-flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-blue-500/10
                        text-blue-400
                        transition
                        hover:bg-blue-500/20
                        hover:text-blue-300
                        active:scale-95
                      "
                    >
                      <FaEdit size={16} />
                    </button>

                  </td>

                  {/* DELETE */}

                  <td className="p-3 text-center">

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(item)
                      }
                      aria-label="Delete transaction"
                      className="
                        inline-flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-red-500/10
                        text-red-400
                        transition
                        hover:bg-red-500/20
                        hover:text-red-300
                        active:scale-95
                      "
                    >
                      <FaTrash size={16} />
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>
        </table>
      </div>

      {/* ========================= */}
      {/* MOBILE HINT */}
      {/* ========================= */}

      {transactions.length > 0 && (
        <p className="mt-3 text-center text-xs text-slate-500 sm:hidden">
          Swipe left or right to view all transaction
          details.
        </p>
      )}

    </div>
  );
};

export default TransactionTable;