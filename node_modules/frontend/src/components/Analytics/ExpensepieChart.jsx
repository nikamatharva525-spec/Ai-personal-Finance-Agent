import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ExpensePieChart = () => {
  const data = [
    { name: "Food", value: 12000 },
    { name: "Travel", value: 8000 },
    { name: "Shopping", value: 6000 },
    { name: "Bills", value: 5000 },
    { name: "Medical", value: 3000 },
  ];

  const COLORS = [
    "#6366F1",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Expense by Category
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
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

export default ExpensePieChart;