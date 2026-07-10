import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaWallet,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center p-10">
      <motion.div
        className="w-full max-w-md"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <FaWallet className="text-4xl text-purple-500" />

          <div>
            <h1 className="text-4xl font-bold text-white">
              FinanceHub
            </h1>

            <p className="text-gray-400 mt-1">
              Login to your account
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-5 text-gray-400" />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-400 transition-all duration-300"
          />
        </div>

        {/* Password */}
        <div className="relative mt-5">
          <FaLock className="absolute left-4 top-5 text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-400 transition-all duration-300"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-5 text-gray-400 hover:text-white transition"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-right mt-4">
          <button className="text-purple-400 hover:text-purple-300 text-sm transition">
            Forgot Password?
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm mt-4">
            {error}
          </p>
        )}

        {/* Login Button */}
        <motion.button
          onClick={handleLogin}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(168,85,247,0.7)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white text-lg font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-700"></div>

          <span className="px-4 text-gray-400 text-sm">
            OR Continue with
          </span>

          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 py-4 rounded-2xl border border-gray-700 text-white hover:bg-white/10 hover:border-purple-500 transition-all duration-300"
          >
            <FaGoogle className="text-red-500 text-xl" />
            Google
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 py-4 rounded-2xl border border-gray-700 text-white hover:bg-white/10 hover:border-purple-500 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            GitHub
          </motion.button>
        </div>

        {/* Register */}
        <div className="text-center mt-8">
          <span className="text-gray-400">
            Don't have an account?
          </span>

          <button
            onClick={() => navigate("/register")}
            className="ml-2 text-purple-400 hover:text-purple-300 font-semibold transition"
          >
            Register
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;