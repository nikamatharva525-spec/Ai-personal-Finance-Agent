import React from "react";
import { Search, X } from "lucide-react";

const ExpenseSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        🔍 Search Expenses
      </h2>

      {/* Search Box */}
      <div className="relative">
        {/* Search Icon */}
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search expenses by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
        />

        {/* Clear Button */}
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Helper Text */}
      <p className="text-sm text-gray-500 mt-3">
        Type an expense name to quickly find matching records.
      </p>
    </div>
  );
};

export default ExpenseSearch;