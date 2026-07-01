import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import DashboardCards from "./components/DashboardCards/DashboardCards";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Cards */}
        <div className="mt-6">
          <DashboardCards
            totalBalance={120000}
            totalIncome={80000}
            totalExpense={35000}
            totalSavings={85000}
          />
        </div>
      </div>
    </div>
  );
};

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={
          token ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Login */}
      <Route
        path="/login"
        element={
          token ? <Navigate to="/dashboard" replace /> : <Login />
        }
      />

      {/* Register */}
      <Route
        path="/register"
        element={
          token ? <Navigate to="/dashboard" replace /> : <Register />
        }
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          token ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />

      {/* Unknown Routes */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;