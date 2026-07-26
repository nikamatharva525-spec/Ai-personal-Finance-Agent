import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import DashboardCards from "../components/DashboardCards/DashboardCards";
import ExpenseChart from "../components/ExpenseChart/ExpenseChart";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";

import { getExpenses } from "../api/expenseApi";
import { getIncome } from "../api/incomeApi";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Refresh dashboard whenever user returns to this page
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

      if (expenseRes.data.success) {
        setExpenses(expenseRes.data.expenses || []);
      } else {
        setExpenses([]);
      }

      if (incomeRes.data.success) {
        setIncomes(incomeRes.data.incomes || []);
      } else {
        setIncomes([]);
      }
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Calculations
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

  // Combine transactions
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950">
        <motion.h2
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-3xl font-bold text-violet-400"
        >
          Loading Dashboard...
        </motion.h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex"
    >
      <Sidebar />

      <div className="flex-1 lg:ml-64">
        <Navbar />

        <div className="p-8">

          <div className="flex flex-col md:flex-row justify-between items-center mb-8">

            <div>
              <h1 className="text-5xl font-bold text-white">
                Dashboard
              </h1>

              <p className="text-slate-300 mt-2 text-lg">
                Welcome back! Here's your financial overview.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fetchDashboardData}
              className="mt-6 md:mt-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-blue-600 text-white px-8 py-3 rounded-xl shadow-xl"
            >
              Refresh Dashboard
            </motion.button>

          </div>

          <DashboardCards
            totalBalance={totalBalance}
            totalIncome={totalIncome}
            totalExpense={totalExpense}
            totalSavings={totalSavings}
          />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-5">
                Expense Overview
              </h2>

              <ExpenseChart expenses={expenses} />
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-5">
                Recent Transactions
              </h2>

              <RecentTransactions
                expenses={expenses}
                incomes={incomes}
                transactions={transactions}
              />
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;