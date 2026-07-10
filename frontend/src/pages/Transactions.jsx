import React from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import AddTransaction from "../components/Transactions/AddTransaction";
import TransactionTable from "../components/Transactions/TransactionTable";

const Transactions = () => {
  return (
    <div className="flex min-h-screen bg-slate-900">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">

        {/* Navbar */}
        <Navbar />

        <div className="p-6 space-y-6">

          <h1 className="text-3xl font-bold text-white">
            Transactions
          </h1>

          {/* Add Transaction Form */}
          <AddTransaction />

          {/* Transaction Table */}
          <TransactionTable />

        </div>
      </div>

    </div>
  );
};

export default Transactions;