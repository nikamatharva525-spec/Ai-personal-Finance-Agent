import React from "react";
import { Link } from "react-router-dom";

const RememberMe = () => {
  return (
    <div className="flex items-center justify-between mt-4 mb-6">

      {/* Remember Me */}

      <label className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">

        <input
          type="checkbox"
          className="w-4 h-4 accent-purple-600"
        />

        Remember Me

      </label>

      {/* Forgot Password */}

      <Link
        to="/forgot-password"
        className="text-purple-400 text-sm hover:text-purple-300 transition"
      >
        Forgot Password?
      </Link>

    </div>
  );
};

export default RememberMe;