import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const TopCategoriesChart = () => {
  const data = [
    { category: "Food", amount: 12000 },
    { category: "Travel", amount: 8500 },
    { category: "Shopping", amount: 6700 },
    { category: "Bills", amount: 5000 },
    { category: "Medical", amount: 3000 },
  ];

  const colors = [
    "#6366F1",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Top Spending Categories
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />

          <YAxis
            dataKey="category"
            type="category"
          />

          <Tooltip />

          <Bar
            dataKey="amount"
            radius={[0, 8, 8, 0]}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopCategoriesChart;