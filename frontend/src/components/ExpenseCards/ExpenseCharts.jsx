import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const categoryData = [
  { name: "Food", value: 3200 },
  { name: "Travel", value: 1800 },
  { name: "Shopping", value: 2500 },
  { name: "Bills", value: 1200 },
];

const monthlyData = [
  { month: "Jan", expense: 4000 },
  { month: "Feb", expense: 5200 },
  { month: "Mar", expense: 6100 },
  { month: "Apr", expense: 4800 },
  { month: "May", expense: 6900 },
];

const COLORS = [
  "#ef4444",
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
];

const ExpenseCharts = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white rounded-2xl shadow-md p-5">
        <h2 className="text-xl font-bold mb-4">
          Expense Categories
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-5">
        <h2 className="text-xl font-bold mb-4">
          Monthly Expenses
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="expense" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseCharts;