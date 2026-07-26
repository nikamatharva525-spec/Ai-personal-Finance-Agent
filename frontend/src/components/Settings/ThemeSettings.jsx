import React, { useEffect, useState } from "react";
import {
  FaMoon,
  FaSun,
  FaDesktop,
  FaSave,
} from "react-icons/fa";

const ThemeSettings = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");

      if (
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [theme]);

  const handleSave = () => {
    alert("Theme Saved Successfully!");
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-8 transition-all">

      <div className="flex items-center gap-3 mb-6">
        <FaMoon className="text-yellow-400 text-3xl" />

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Theme Settings
        </h2>
      </div>

      <div className="space-y-4">

        <label className="flex justify-between items-center bg-gray-100 dark:bg-slate-700 p-4 rounded-xl cursor-pointer">

          <div className="flex gap-3 items-center">
            <FaMoon className="text-purple-500" />

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Dark Theme
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                Recommended
              </p>
            </div>
          </div>

          <input
            type="radio"
            name="theme"
            checked={theme === "dark"}
            onChange={() => setTheme("dark")}
          />
        </label>

        <label className="flex justify-between items-center bg-gray-100 dark:bg-slate-700 p-4 rounded-xl cursor-pointer">

          <div className="flex gap-3 items-center">
            <FaSun className="text-yellow-500" />

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Light Theme
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                Bright appearance
              </p>
            </div>
          </div>

          <input
            type="radio"
            name="theme"
            checked={theme === "light"}
            onChange={() => setTheme("light")}
          />
        </label>

        <label className="flex justify-between items-center bg-gray-100 dark:bg-slate-700 p-4 rounded-xl cursor-pointer">

          <div className="flex gap-3 items-center">
            <FaDesktop className="text-blue-500" />

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                System Theme
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                Follow system
              </p>
            </div>
          </div>

          <input
            type="radio"
            name="theme"
            checked={theme === "system"}
            onChange={() => setTheme("system")}
          />
        </label>

      </div>

      <div className="mt-6 p-4 rounded-xl bg-gray-100 dark:bg-slate-700">
        <h3 className="font-semibold text-slate-900 dark:text-white">
          Current Theme
        </h3>

        <p className="text-green-500 mt-2 capitalize">
          {theme}
        </p>
      </div>

      <button
        onClick={handleSave}
        className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold"
      >
        <FaSave className="inline mr-2" />
        Save Theme
      </button>

    </div>
  );
};

export default ThemeSettings;