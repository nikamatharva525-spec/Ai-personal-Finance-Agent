import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import DashboardCards from "../components/DashboardCards/DashboardCards";
import ExpenseChart from "../components/ExpenseChart/ExpenseChart";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";

import { getExpenses } from "../api/expenseApi";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const totalExpense = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const totalIncome = 80000;
  const totalSavings = totalIncome - totalExpense;
  const totalBalance = totalIncome;

  return (
    <div className="flex min-h-screen bg-slate-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <Navbar />

        <div className="p-6 space-y-6">
  {/* Dashboard Cards */}
  <DashboardCards
    totalBalance={totalBalance}
    totalIncome={totalIncome}
    totalExpense={totalExpense}
    totalSavings={totalSavings}
  />

  {/* Expense Chart */}
  <ExpenseChart expenses={expenses} />

  {/* Recent Transactions */}
  <RecentTransactions expenses={expenses} />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;