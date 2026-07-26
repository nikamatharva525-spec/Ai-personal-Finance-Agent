import React, { useState } from "react";
import {
  FaUtensils,
  FaCar,
  FaShoppingBag,
  FaFilm,
  FaBolt,
  FaEdit,
  FaSave,
} from "react-icons/fa";

const CategoryBudget = () => {
  const [editMode, setEditMode] = useState(false);

  const [categories, setCategories] = useState([
    {
      name: "Food",
      budget: 8000,
      spent: 5200,
      icon: <FaUtensils className="text-orange-400 text-2xl" />,
    },
    {
      name: "Transport",
      budget: 3000,
      spent: 1800,
      icon: <FaCar className="text-blue-400 text-2xl" />,
    },
    {
      name: "Shopping",
      budget: 5000,
      spent: 3500,
      icon: <FaShoppingBag className="text-pink-400 text-2xl" />,
    },
    {
      name: "Entertainment",
      budget: 2500,
      spent: 1200,
      icon: <FaFilm className="text-purple-400 text-2xl" />,
    },
    {
      name: "Bills",
      budget: 4000,
      spent: 3200,
      icon: <FaBolt className="text-yellow-400 text-2xl" />,
    },
  ]);

  const handleBudgetChange = (index, value) => {
    const updated = [...categories];
    updated[index].budget = Number(value);
    setCategories(updated);
  };

  const saveBudgets = () => {
    localStorage.setItem(
      "categoryBudgets",
      JSON.stringify(categories)
    );

    alert("Category Budgets Saved Successfully!");

    setEditMode(false);
  };

  return (
    <div className="bg-slate-800 rounded-3xl shadow-xl p-6 border border-slate-700 mt-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-white">
          📂 Category Budget
        </h2>

        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-white flex items-center gap-2"
          >
            <FaEdit />
            Edit Budgets
          </button>
        ) : (
          <button
            onClick={saveBudgets}
            className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl text-white flex items-center gap-2"
          >
            <FaSave />
            Save
          </button>
        )}

      </div>

      <div className="space-y-5">

        {categories.map((category, index) => {

          const progress =
            (category.spent / category.budget) * 100;

          return (
            <div
              key={index}
              className="bg-slate-700 rounded-2xl p-5"
            >

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                  {category.icon}

                  <div>

                    <h3 className="text-white font-bold text-lg">
                      {category.name}
                    </h3>

                    {editMode ? (
                      <input
                        type="number"
                        value={category.budget}
                        onChange={(e) =>
                          handleBudgetChange(
                            index,
                            e.target.value
                          )
                        }
                        className="mt-2 bg-slate-800 text-white p-2 rounded-lg w-40"
                      />
                    ) : (
                      <p className="text-gray-400 text-sm">
                        Budget ₹
                        {category.budget.toLocaleString()}
                      </p>
                    )}

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-red-400 font-semibold">
                    Spent ₹
                    {category.spent.toLocaleString()}
                  </p>

                  <p className="text-green-400 text-sm">
                    Remaining ₹
                    {(category.budget - category.spent).toLocaleString()}
                  </p>

                </div>

              </div>

              {/* Progress */}

              <div className="mt-4">

                <div className="flex justify-between text-sm text-gray-300 mb-2">

                  <span>Usage</span>

                  <span>{progress.toFixed(0)}%</span>

                </div>

                <div className="w-full bg-slate-600 rounded-full h-3">

                  <div
                    className={`h-3 rounded-full ${
                      progress < 80
                        ? "bg-green-500"
                        : progress < 100
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{
                      width: `${Math.min(progress, 100)}%`,
                    }}
                  />

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default CategoryBudget;