import React, { useEffect, useState } from "react";

import {
  addIncome,
  updateIncome,
} from "../../api/incomeApi";

import {
  addExpense,
  updateExpense,
} from "../../api/expenseApi";

const AddTransaction = ({
  onTransactionAdded,
  editingTransaction,
  setEditingTransaction,
}) => {
  // =========================
  // FORM STATE
  // =========================

  const [transaction, setTransaction] = useState({
    title: "",
    amount: "",
    category: "",
    type: "",
    date: "",
    paymentMethod: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  // =========================
  // LOAD EDITING TRANSACTION
  // =========================

  useEffect(() => {
    if (editingTransaction) {
      setTransaction({
        title: editingTransaction.title || "",
        amount: editingTransaction.amount || "",
        category: editingTransaction.category || "",
        type: editingTransaction.type || "",
        date: editingTransaction.date
          ? editingTransaction.date.substring(0, 10)
          : "",
        paymentMethod:
          editingTransaction.payment || "",
        notes: editingTransaction.notes || "",
      });
    }
  }, [editingTransaction]);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTransaction((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // RESET FORM
  // =========================

  const resetForm = () => {
    setTransaction({
      title: "",
      amount: "",
      category: "",
      type: "",
      date: "",
      paymentMethod: "",
      notes: "",
    });
  };

  // =========================
  // SUBMIT FORM
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !transaction.title.trim() ||
      !transaction.amount ||
      !transaction.type ||
      !transaction.category ||
      !transaction.date ||
      !transaction.paymentMethod
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (Number(transaction.amount) <= 0) {
      alert("Amount must be greater than 0.");
      return;
    }

    try {
      setLoading(true);

      // =========================
      // UPDATE TRANSACTION
      // =========================

      if (editingTransaction) {
        if (transaction.type === "Income") {
          await updateIncome(
            editingTransaction._id,
            {
              title: transaction.title.trim(),
              amount: Number(transaction.amount),
              category: transaction.category,
              date: transaction.date,
              paymentMethod:
                transaction.paymentMethod,
              notes: transaction.notes,
            }
          );
        } else {
          await updateExpense(
            editingTransaction._id,
            {
              name: transaction.title.trim(),
              amount: Number(transaction.amount),
              category: transaction.category,
              date: transaction.date,
              paymentMethod:
                transaction.paymentMethod,
              notes: transaction.notes,
            }
          );
        }

        alert("Transaction Updated Successfully!");

        setEditingTransaction(null);
      }

      // =========================
      // ADD NEW TRANSACTION
      // =========================

      else {
        if (transaction.type === "Income") {
          await addIncome({
            title: transaction.title.trim(),
            amount: Number(transaction.amount),
            category: transaction.category,
            date: transaction.date,
            paymentMethod:
              transaction.paymentMethod,
            notes: transaction.notes,
          });
        } else {
          await addExpense({
            name: transaction.title.trim(),
            amount: Number(transaction.amount),
            category: transaction.category,
            date: transaction.date,
            paymentMethod:
              transaction.paymentMethod,
            notes: transaction.notes,
          });
        }

        alert("Transaction Added Successfully!");
      }

      // =========================
      // REFRESH TABLE
      // =========================

      if (onTransactionAdded) {
        await onTransactionAdded();
      }

      // =========================
      // RESET FORM
      // =========================

      resetForm();
    } catch (error) {
      console.error(
        "Transaction Error:",
        error
      );

      if (error.response) {
        console.log(
          "Status:",
          error.response.status
        );

        console.log(
          "Data:",
          error.response.data
        );

        alert(
          `Error ${error.response.status}: ${
            error.response.data?.message ||
            "Operation failed"
          }`
        );
      } else {
        alert(
          error.message ||
            "Something went wrong."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // CANCEL EDIT
  // =========================

  const handleCancel = () => {
    setEditingTransaction(null);
    resetForm();
  };

  // =========================
  // UI
  // =========================

  return (
    <div
      className="
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        sm:rounded-3xl
        bg-slate-800
        p-4
        sm:p-6
        shadow-xl
      "
    >
      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <h2
        className="
          mb-5
          sm:mb-6
          text-xl
          sm:text-2xl
          font-bold
          text-white
        "
      >
        {editingTransaction
          ? "Update Transaction"
          : "Add New Transaction"}
      </h2>

      {/* ========================= */}
      {/* FORM */}
      {/* ========================= */}

      <form
        onSubmit={handleSubmit}
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
        "
      >
        {/* ========================= */}
        {/* TITLE */}
        {/* ========================= */}

        <div className="min-w-0">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Transaction Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Transaction Title"
            value={transaction.title}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-slate-700
              px-4
              py-3
              text-white
              placeholder:text-slate-400
              outline-none
              transition
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/40
            "
            required
          />
        </div>

        {/* ========================= */}
        {/* AMOUNT */}
        {/* ========================= */}

        <div className="min-w-0">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Amount
          </label>

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={transaction.amount}
            onChange={handleChange}
            min="1"
            step="0.01"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-slate-700
              px-4
              py-3
              text-white
              placeholder:text-slate-400
              outline-none
              transition
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/40
            "
            required
          />
        </div>

        {/* ========================= */}
        {/* TYPE */}
        {/* ========================= */}

        <div className="min-w-0">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Transaction Type
          </label>

          <select
            name="type"
            value={transaction.type}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-slate-700
              px-4
              py-3
              text-white
              outline-none
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/40
            "
            required
          >
            <option value="">
              Select Transaction Type
            </option>

            <option value="Income">
              Income
            </option>

            <option value="Expense">
              Expense
            </option>
          </select>
        </div>

        {/* ========================= */}
        {/* CATEGORY */}
        {/* ========================= */}

        <div className="min-w-0">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Category
          </label>

          <select
            name="category"
            value={transaction.category}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-slate-700
              px-4
              py-3
              text-white
              outline-none
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/40
            "
            required
          >
            <option value="">
              Select Category
            </option>

            {transaction.type === "Income" ? (
              <>
                <option value="Salary">
                  Salary
                </option>

                <option value="Freelancing">
                  Freelancing
                </option>

                <option value="Business">
                  Business
                </option>

                <option value="Investment">
                  Investment
                </option>

                <option value="Other Income">
                  Other Income
                </option>
              </>
            ) : (
              <>
                <option value="Food">
                  Food
                </option>

                <option value="Travel">
                  Travel
                </option>

                <option value="Shopping">
                  Shopping
                </option>

                <option value="Bills">
                  Bills
                </option>

                <option value="Medical">
                  Medical
                </option>

                <option value="Entertainment">
                  Entertainment
                </option>

                <option value="Education">
                  Education
                </option>

                <option value="Other">
                  Other
                </option>
              </>
            )}
          </select>
        </div>

        {/* ========================= */}
        {/* DATE */}
        {/* ========================= */}

        <div className="min-w-0">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Date
          </label>

          <input
            type="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-slate-700
              px-4
              py-3
              text-white
              outline-none
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/40
            "
            required
          />
        </div>

        {/* ========================= */}
        {/* PAYMENT METHOD */}
        {/* ========================= */}

        <div className="min-w-0">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Payment Method
          </label>

          <select
            name="paymentMethod"
            value={transaction.paymentMethod}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-slate-700
              px-4
              py-3
              text-white
              outline-none
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/40
            "
            required
          >
            <option value="">
              Payment Method
            </option>

            <option value="Cash">
              Cash
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="Credit Card">
              Credit Card
            </option>

            <option value="Debit Card">
              Debit Card
            </option>

            <option value="Net Banking">
              Net Banking
            </option>
          </select>
        </div>

        {/* ========================= */}
        {/* NOTES */}
        {/* ========================= */}

        <div className="md:col-span-2 min-w-0">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Notes
          </label>

          <textarea
            name="notes"
            placeholder="Add notes (optional)"
            value={transaction.notes}
            onChange={handleChange}
            rows="3"
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-white/10
              bg-slate-700
              px-4
              py-3
              text-white
              placeholder:text-slate-400
              outline-none
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/40
            "
          />
        </div>

        {/* ========================= */}
        {/* BUTTONS */}
        {/* ========================= */}

        <div
          className="
            md:col-span-2
            mt-2
            flex
            flex-col
            gap-3
            sm:flex-row
          "
        >
          {/* ADD / UPDATE */}

          <button
            type="submit"
            disabled={loading}
            className="
              flex-1
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              via-fuchsia-600
              to-blue-600
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:opacity-90
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading
              ? "Processing..."
              : editingTransaction
              ? "Update Transaction"
              : "Add Transaction"}
          </button>

          {/* CANCEL */}

          {editingTransaction && (
            <button
              type="button"
              onClick={handleCancel}
              disabled={loading}
              className="
                rounded-xl
                bg-red-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-red-700
                active:scale-[0.98]
                disabled:opacity-50
              "
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;