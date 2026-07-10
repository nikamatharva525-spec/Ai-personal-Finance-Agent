import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const IncomeExpenseChart = () => {
  const data = [
    {
      month: "Jan",
      Income: 80000,
      Expense: 25000,
    },
    {
      month: "Feb",
      Income: 75000,
      Expense: 30000,
    },
    {
      month: "Mar",
      Income: 90000,
      Expense: 35000,
    },
    {
      month: "Apr",
      Income: 85000,
      Expense: 28000,
    },
    {
      month: "May",
      Income: 95000,
      Expense: 40000,
    },
    {
      month: "Jun",
      Income: 100000,
      Expense: 45000,
    },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Monthly Income vs Expense
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="Income"
            fill="#22C55E"
            radius={[5, 5, 0, 0]}
          />

          <Bar
            dataKey="Expense"
            fill="#EF4444"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;