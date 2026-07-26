import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

const ExpenseChart = ({ expenses }) => {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center rounded-2xl bg-slate-800">
        <p className="text-slate-400 text-lg">
          No expense data available
        </p>
      </div>
    );
  }

  const chartData = expenses.map((expense) => ({
    name: expense.category || "Other",
    value: Number(expense.amount),
  }));

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;