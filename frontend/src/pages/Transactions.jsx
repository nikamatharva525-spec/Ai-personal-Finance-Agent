import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import AddTransaction from "../components/Transactions/AddTransaction";
import TransactionTable from "../components/Transactions/TransactionTable";

import { getIncome } from "../api/incomeApi";
import { getExpenses } from "../api/expenseApi";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  // =========================
  // EDIT TRANSACTION
  // =========================

  const [editingTransaction, setEditingTransaction] =
    useState(null);

  // =========================
  // FETCH TRANSACTIONS
  // =========================

  const fetchTransactions = async () => {
    try {
      const [incomeRes, expenseRes] =
        await Promise.all([
          getIncome(),
          getExpenses(),
        ]);

      const incomes = Array.isArray(incomeRes.data)
        ? incomeRes.data
        : incomeRes.data?.incomes || [];

      const expenses = Array.isArray(expenseRes.data)
        ? expenseRes.data
        : expenseRes.data?.expenses || [];

      // =========================
      // INCOME DATA
      // =========================

      const incomeData = incomes.map((item) => ({
        _id: item._id,
        date: item.date,
        title: item.title || item.source || "Income",
        category: item.category || "Income",
        amount: Number(item.amount || 0),
        payment: item.paymentMethod || "-",
        notes: item.notes || "",
        type: "Income",
      }));

      // =========================
      // EXPENSE DATA
      // =========================

      const expenseData = expenses.map((item) => ({
        _id: item._id,
        date: item.date,
        title: item.name || "Expense",
        category: item.category || "Other",
        amount: Number(item.amount || 0),
        payment: item.paymentMethod || "-",
        notes: item.notes || "",
        type: "Expense",
      }));

      // =========================
      // COMBINE + SORT
      // =========================

      const allTransactions = [
        ...incomeData,
        ...expenseData,
      ].sort(
        (a, b) =>
          new Date(b.date) - new Date(a.date)
      );

      setTransactions(allTransactions);
    } catch (error) {
      console.error(
        "Error fetching transactions:",
        error
      );

      setTransactions([]);
    }
  };

  // =========================
  // INITIAL FETCH
  // =========================

  useEffect(() => {
    fetchTransactions();
  }, []);

  // =========================
  // MAIN UI
  // =========================

  return (
    <div
      className="
        flex
        min-h-screen
        min-w-0
        bg-slate-900
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
            space-y-5
            sm:space-y-6
            p-4
            sm:p-6
            md:p-8
          "
        >
          {/* ========================= */}
          {/* PAGE TITLE */}
          {/* ========================= */}

          <div>
            <h1
              className="
                text-3xl
                sm:text-4xl
                font-bold
                text-white
              "
            >
              Transactions
            </h1>

            <p
              className="
                mt-2
                text-sm
                sm:text-base
                text-slate-400
              "
            >
              Manage your income and expenses in one
              place.
            </p>
          </div>

          {/* ========================= */}
          {/* ADD / UPDATE TRANSACTION */}
          {/* ========================= */}

          <div className="w-full min-w-0">
            <AddTransaction
              editingTransaction={
                editingTransaction
              }
              setEditingTransaction={
                setEditingTransaction
              }
              onTransactionAdded={
                fetchTransactions
              }
            />
          </div>

          {/* ========================= */}
          {/* TRANSACTION TABLE */}
          {/* ========================= */}

          <div
            className="
              w-full
              min-w-0
              overflow-hidden
              rounded-2xl
              sm:rounded-3xl
              border
              border-white/10
              bg-white/5
              shadow-xl
            "
          >
            <div className="w-full min-w-0 overflow-x-auto">
              <TransactionTable
                transactions={transactions}
                refreshTransactions={
                  fetchTransactions
                }
                onEdit={setEditingTransaction}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;