import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const SpendingTrend = () => {
  const data = [
    { month: "Jan", expense: 22000 },
    { month: "Feb", expense: 25000 },
    { month: "Mar", expense: 28000 },
    { month: "Apr", expense: 24000 },
    { month: "May", expense: 32000 },
    { month: "Jun", expense: 29000 },
    { month: "Jul", expense: 35000 },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Spending Trend
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#8B5CF6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingTrend;