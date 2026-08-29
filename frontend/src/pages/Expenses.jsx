import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import ExpenseTracker from "../components/ExpenseTracker/ExpenseTracker";
import ExpenseCards from "../components/ExpenseCards/ExpenseCards";
import ExpenseChart from "../components/ExpenseChart/ExpenseChart";
import ExpenseList from "../components/ExpenseList/ExpenseList";

import {
  getExpenses,
  deleteExpense,
} from "../api/expenseApi";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  // =========================
  // FETCH EXPENSES
  // =========================

  const fetchExpenses = async () => {
    try {
      const response = await getExpenses();

      if (Array.isArray(response.data)) {
        setExpenses(response.data);
      } else if (response.data?.expenses) {
        setExpenses(response.data.expenses);
      } else {
        setExpenses([]);
      }
    } catch (error) {
      console.error("Error fetching expenses:", error);
      setExpenses([]);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // =========================
  // DELETE EXPENSE
  // =========================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (!confirmDelete) return;

    try {
      await deleteExpense(id);

      alert("Expense deleted successfully.");

      await fetchExpenses();
    } catch (error) {
      console.error("Delete Expense Error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to delete expense."
      );
    }
  };

  // =========================
  // TOTAL EXPENSE
  // =========================

  const totalExpense = expenses.reduce(
    (total, item) =>
      total + Number(item.amount || 0),
    0
  );

  // =========================
  // CURRENT MONTH EXPENSE
  // =========================

  const currentDate = new Date();

  const monthlyExpense = expenses
    .filter((item) => {
      if (!item.date) return false;

      const expenseDate = new Date(item.date);

      return (
        expenseDate.getMonth() ===
          currentDate.getMonth() &&
        expenseDate.getFullYear() ===
          currentDate.getFullYear()
      );
    })
    .reduce(
      (total, item) =>
        total + Number(item.amount || 0),
      0
    );

  // =========================
  // TOTAL TRANSACTIONS
  // =========================

  const totalTransactions = expenses.length;

  // =========================
  // MAIN UI
  // =========================

  return (
    <div
      className="
        flex
        min-h-screen
        min-w-0
        bg-slate-100
      "
    >
      {/* ========================= */}
      {/* SIDEBAR */}
      {/* ========================= */}

      <Sidebar />

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div
        className="
          flex-1
          min-w-0
          ml-0
          md:ml-64
          pt-16
          md:pt-0
        "
      >
        {/* ========================= */}
        {/* NAVBAR */}
        {/* ========================= */}

        <Navbar />

        {/* ========================= */}
        {/* PAGE CONTENT */}
        {/* ========================= */}

        <div
          className="
            w-full
            min-w-0
            p-4
            sm:p-6
            md:p-8
          "
        >

          {/* ========================= */}
          {/* PAGE HEADER */}
          {/* ========================= */}

          <div className="mb-6 sm:mb-8">

            <h1
              className="
                text-3xl
                sm:text-4xl
                font-bold
                text-slate-800
                break-words
              "
            >
              Expense Dashboard
            </h1>

            <p
              className="
                mt-2
                max-w-3xl
                text-sm
                sm:text-base
                text-slate-500
              "
            >
              Track your spending, monitor your
              budget, and manage your finances.
            </p>

          </div>

          {/* ========================= */}
          {/* SUMMARY CARDS */}
          {/* ========================= */}

          <div className="w-full min-w-0">
            <ExpenseCards
              totalExpense={totalExpense}
              monthlyExpense={monthlyExpense}
              totalTransactions={totalTransactions}
            />
          </div>

          {/* ========================= */}
          {/* ADD EXPENSE */}
          {/* ========================= */}

          <div
            className="
              mt-6
              sm:mt-8
              w-full
              min-w-0
              overflow-hidden
              rounded-2xl
              sm:rounded-3xl
              border
              border-slate-200
              bg-white
              p-4
              sm:p-6
              md:p-8
              shadow-xl
            "
          >
            <ExpenseTracker
              refreshExpenses={fetchExpenses}
            />
          </div>

          {/* ========================= */}
          {/* ANALYTICS */}
          {/* ========================= */}

          <div
            className="
              mt-6
              sm:mt-8
              w-full
              min-w-0
              overflow-hidden
              rounded-2xl
              sm:rounded-3xl
              border
              border-slate-200
              bg-white
              p-4
              sm:p-6
              md:p-8
              shadow-xl
            "
          >
            <div className="w-full min-w-0">
              <ExpenseChart
                expenses={expenses}
              />
            </div>
          </div>

          {/* ========================= */}
          {/* EXPENSE HISTORY */}
          {/* ========================= */}

          <div
            className="
              mt-6
              sm:mt-8
              w-full
              min-w-0
              overflow-hidden
              rounded-2xl
              sm:rounded-3xl
              border
              border-slate-200
              bg-white
              p-4
              sm:p-6
              md:p-8
              shadow-xl
            "
          >
            <div className="w-full min-w-0 overflow-x-auto">
              <ExpenseList
                expenses={expenses}
                onDelete={handleDelete}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Expenses;