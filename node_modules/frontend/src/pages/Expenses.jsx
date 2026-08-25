import React, { useEffect, useState } from "react";
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

  const fetchExpenses = async () => {
    try {
      const response = await getExpenses();

      if (Array.isArray(response.data)) {
        setExpenses(response.data);
      } else if (response.data.expenses) {
        setExpenses(response.data.expenses);
      } else {
        setExpenses([]);
      }
    } catch (error) {
      console.error(error);
      setExpenses([]);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);
      fetchExpenses();
    } catch (error) {
      console.error(error);
    }
  };

  const totalExpense = expenses.reduce(
    (total, item) => total + Number(item.amount || 0),
    0
  );

  const currentDate = new Date();

  const monthlyExpense = expenses
    .filter((item) => {
      if (!item.date) return false;

      const expenseDate = new Date(item.date);

      return (
        expenseDate.getMonth() === currentDate.getMonth() &&
        expenseDate.getFullYear() === currentDate.getFullYear()
      );
    })
    .reduce((total, item) => total + Number(item.amount || 0), 0);

  const totalTransactions = expenses.length;

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Expense Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Track your spending, monitor your budget, and manage your finances.
        </p>
      </div>

      {/* Summary Cards */}
      <ExpenseCards
        totalExpense={totalExpense}
        monthlyExpense={monthlyExpense}
        totalTransactions={totalTransactions}
      />

      {/* Add Expense */}
      <div className="mt-8 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
        <ExpenseTracker refreshExpenses={fetchExpenses} />
      </div>

      {/* Analytics */}
      <div className="mt-8 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
        <ExpenseChart expenses={expenses} />
      </div>

      {/* Expense History */}
      <div className="mt-8 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
        <ExpenseList
          expenses={expenses}
          onDelete={handleDelete}
        />
      </div>

    </div>
  );
};

export default Expenses;