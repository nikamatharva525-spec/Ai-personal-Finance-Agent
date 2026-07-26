import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import Logo from "./Logo";
import RememberMe from "./RememberMe";
import SocialLogin from "./SocialLogin";
import { loginUser } from "../../api/authApi";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful!");

      navigate("/");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">

      <Logo />

      <form onSubmit={handleLogin} className="space-y-5">

        {/* Email */}
        <div>
          <label className="block text-white mb-2">
            Email
          </label>

          <div className="flex items-center bg-slate-700 rounded-xl px-4">
            <FaEnvelope className="text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none p-4 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-white mb-2">
            Password
          </label>

          <div className="flex items-center bg-slate-700 rounded-xl px-4">
            <FaLock className="text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-transparent outline-none p-4 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-400" />
              ) : (
                <FaEye className="text-gray-400" />
              )}
            </button>

          </div>
        </div>

        <RememberMe />

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      <SocialLogin />

      {/* Register */}
      <div className="text-center mt-6">
        <p className="text-gray-400">
          Don't have an account?{" "}

          <button
            type="button"
            onClick={() => alert("Register Clicked")}
            className="text-purple-400 hover:underline font-semibold"
          >
            Register
          </button>

        </p>
      </div>

    </div>
  );
};

export default LoginForm;