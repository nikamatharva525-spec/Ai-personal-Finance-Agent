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

const COLORS = [
  "#ef4444",
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#8b5cf6",
  "#06b6d4",
];

const ExpenseCharts = ({ expenses = [] }) => {
  // =========================
  // EXPENSE BY CATEGORY
  // =========================

  const categoryMap = {};

  expenses.forEach((expense) => {
    const category = expense.category || "Others";
    const amount = Number(expense.amount || 0);

    categoryMap[category] =
      (categoryMap[category] || 0) + amount;
  });

  const categoryData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  // =========================
  // MONTHLY EXPENSE
  // =========================

  const monthMap = {};

  expenses.forEach((expense) => {
    if (!expense.date) return;

    const month = new Date(expense.date).toLocaleString(
      "default",
      {
        month: "short",
      }
    );

    const amount = Number(expense.amount || 0);

    monthMap[month] =
      (monthMap[month] || 0) + amount;
  });

  const monthlyData = Object.keys(monthMap).map((month) => ({
    month,
    expense: monthMap[month],
  }));

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
        sm:gap-6
        mt-6
        sm:mt-8
        w-full
        min-w-0
      "
    >
      {/* ========================= */}
      {/* PIE CHART */}
      {/* ========================= */}

      <div
        className="
          w-full
          min-w-0
          overflow-hidden
          rounded-2xl
          bg-white
          p-4
          sm:p-5
          shadow-md
        "
      >
        <h2 className="mb-4 text-lg sm:text-xl font-bold text-slate-800">
          Expense Categories
        </h2>

        {categoryData.length === 0 ? (
          <div className="flex h-[260px] sm:h-[300px] items-center justify-center text-slate-500">
            No expense data available
          </div>
        ) : (
          <div className="w-full min-w-0">
            <ResponsiveContainer
              width="100%"
              height={260}
            >
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="65%"
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        COLORS[index % COLORS.length]
                      }
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value) =>
                    `₹${Number(value).toLocaleString(
                      "en-IN"
                    )}`
                  }
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* ========================= */}
      {/* BAR CHART */}
      {/* ========================= */}

      <div
        className="
          w-full
          min-w-0
          overflow-hidden
          rounded-2xl
          bg-white
          p-4
          sm:p-5
          shadow-md
        "
      >
        <h2 className="mb-4 text-lg sm:text-xl font-bold text-slate-800">
          Monthly Expenses
        </h2>

        {monthlyData.length === 0 ? (
          <div className="flex h-[260px] sm:h-[300px] items-center justify-center text-slate-500">
            No monthly expense data available
          </div>
        ) : (
          <div className="w-full min-w-0">
            <ResponsiveContainer
              width="100%"
              height={260}
            >
              <BarChart
                data={monthlyData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12 }}
                />

                <YAxis
                  tick={{ fontSize: 12 }}
                  width={45}
                />

                <Tooltip
                  formatter={(value) =>
                    `₹${Number(value).toLocaleString(
                      "en-IN"
                    )}`
                  }
                />

                <Bar
                  dataKey="expense"
                  fill="#ef4444"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseCharts;