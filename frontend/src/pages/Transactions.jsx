import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import AddTransaction from "../components/Transactions/AddTransaction";
import TransactionTable from "../components/Transactions/TransactionTable";

import { getIncome } from "../api/incomeApi";
import { getExpenses } from "../api/expenseApi";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const incomeRes = await getIncome();
      const expenseRes = await getExpenses();

      const incomes = Array.isArray(incomeRes.data)
        ? incomeRes.data
        : incomeRes.data.incomes || [];

      const expenses = Array.isArray(expenseRes.data)
        ? expenseRes.data
        : expenseRes.data.expenses || [];

      // Format Income
      const incomeData = incomes.map((item) => ({
        _id: item._id,
        date: item.date,
        title: item.title,
        category: "Income",
        amount: item.amount,
        payment: item.paymentMethod || "-",
        type: "Income",
      }));

      // Format Expense
      const expenseData = expenses.map((item) => ({
        _id: item._id,
        date: item.date,
        title: item.name,
        category: item.category,
        amount: item.amount,
        payment: item.paymentMethod || "-",
        type: "Expense",
      }));

      // Merge + Sort by Date
      const allTransactions = [...incomeData, ...expenseData].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      setTransactions(allTransactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <Navbar />

        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-white">
            Transactions
          </h1>

          {/* Add Transaction */}
          <AddTransaction onTransactionAdded={fetchTransactions} />

          {/* Transaction Table */}
          <TransactionTable transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Transactions;