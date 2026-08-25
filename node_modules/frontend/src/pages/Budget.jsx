import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import ExpenseTracker from "../components/ExpenseTracker";

const Expenses = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Expense Management
          </h1>

          <ExpenseTracker />
        </div>
      </div>
    </div>
  );
};

export default Expenses;