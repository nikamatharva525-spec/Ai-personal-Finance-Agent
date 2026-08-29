import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import DashboardCards from "../components/DashboardCards/DashboardCards";
import ExpenseChart from "../components/ExpenseChart/ExpenseChart";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import VoiceAssistant from "../components/VoiceAssistant";

import { getExpenses } from "../api/expenseApi";
import { getIncome } from "../api/incomeApi";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search State
  const [search, setSearch] = useState("");

  // =========================
  // FETCH DASHBOARD DATA
  // =========================
  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Refresh data when window gets focus
  useEffect(() => {
    const handleFocus = () => {
      fetchDashboardData();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const [expenseRes, incomeRes] = await Promise.all([
        getExpenses(),
        getIncome(),
      ]);

      console.log("Expense API:", expenseRes.data);
      console.log("Income API:", incomeRes.data);

      // =========================
      // EXPENSE DATA
      // =========================
      if (expenseRes.data.success) {
        setExpenses(expenseRes.data.expenses || []);
      } else {
        setExpenses([]);
      }

      // =========================
      // INCOME DATA
      // =========================
      if (incomeRes.data.success) {
        setIncomes(incomeRes.data.incomes || []);
      } else {
        setIncomes([]);
      }
    } catch (error) {
      console.error("Dashboard Error:", error);

      setExpenses([]);
      setIncomes([]);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // CALCULATIONS
  // =========================

  const totalIncome = incomes.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  const totalExpense = expenses.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  const totalBalance = totalIncome - totalExpense;

  const totalSavings = totalBalance;

  // =========================
  // COMBINE TRANSACTIONS
  // =========================

  const transactions = [
    ...expenses.map((item) => ({
      ...item,
      type: "Expense",
    })),

    ...incomes.map((item) => ({
      ...item,
      type: "Income",
    })),
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  // =========================
  // LOADING SCREEN
  // =========================

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 px-4">
        <motion.h2
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="text-center text-2xl sm:text-3xl font-bold text-violet-400"
        >
          Loading Dashboard...
        </motion.h2>
      </div>
    );
  }

  // =========================
  // MAIN DASHBOARD
  // =========================

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        flex
        min-h-screen
        min-w-0
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-slate-800
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
          min-w-0
          flex-1
          ml-0
          md:ml-64
          pt-16
          md:pt-0
        "
      >
        {/* ========================= */}
        {/* NAVBAR */}
        {/* ========================= */}

        <Navbar
          search={search}
          setSearch={setSearch}
        />

        {/* ========================= */}
        {/* PAGE CONTENT */}
        {/* ========================= */}

        <div className="p-4 sm:p-6 md:p-8">

          {/* ========================= */}
          {/* HEADER */}
          {/* ========================= */}

          <div
            className="
              mb-8
              flex
              flex-col
              items-start
              gap-4
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div className="min-w-0">

              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  text-white
                  break-words
                "
              >
                Dashboard
              </h1>

              <p className="mt-2 text-sm sm:text-base md:text-lg text-slate-300">
                Welcome back! Here's your financial overview.
              </p>

            </div>

            {/* Refresh Button */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={fetchDashboardData}
              className="
                w-full
                md:w-auto
                whitespace-nowrap
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-600
                to-blue-600
                px-6
                md:px-8
                py-3
                text-sm
                sm:text-base
                text-white
                shadow-xl
              "
            >
              Refresh Dashboard
            </motion.button>

          </div>

          {/* ========================= */}
          {/* DASHBOARD CARDS */}
          {/* ========================= */}

          <div className="w-full min-w-0">
            <DashboardCards
              totalBalance={totalBalance}
              totalIncome={totalIncome}
              totalExpense={totalExpense}
              totalSavings={totalSavings}
            />
          </div>

          {/* ========================= */}
          {/* CHARTS */}
          {/* ========================= */}

          <div
            className="
              mt-6
              sm:mt-8
              grid
              grid-cols-1
              xl:grid-cols-2
              gap-6
              sm:gap-8
              min-w-0
            "
          >

            {/* Expense Overview */}

            <div
              className="
                min-w-0
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                bg-white/10
                p-4
                sm:p-6
                shadow-2xl
                backdrop-blur-xl
              "
            >

              <h2 className="mb-5 text-xl sm:text-2xl font-bold text-white">
                Expense Overview
              </h2>

              <div className="w-full min-w-0 overflow-x-auto">
                <ExpenseChart expenses={expenses} />
              </div>

            </div>

            {/* Recent Transactions */}

            <div
              className="
                min-w-0
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                bg-white/10
                p-4
                sm:p-6
                shadow-2xl
                backdrop-blur-xl
              "
            >

              <h2 className="mb-5 text-xl sm:text-2xl font-bold text-white">
                Recent Transactions
              </h2>

              <div className="w-full min-w-0 overflow-x-auto">

                <RecentTransactions
                  expenses={expenses}
                  incomes={incomes}
                  transactions={transactions}
                  search={search}
                />

              </div>

            </div>

          </div>

          {/* ========================= */}
          {/* VOICE ASSISTANT */}
          {/* ========================= */}

          <div className="mt-6 sm:mt-10">

            <div
              className="
                min-w-0
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                bg-white/10
                p-4
                sm:p-6
                shadow-2xl
                backdrop-blur-xl
              "
            >

              <h2 className="mb-5 text-xl sm:text-2xl font-bold text-white">
                🎤 AI Finance Voice Assistant
              </h2>

              <div className="w-full min-w-0">
                <VoiceAssistant />
              </div>

            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;