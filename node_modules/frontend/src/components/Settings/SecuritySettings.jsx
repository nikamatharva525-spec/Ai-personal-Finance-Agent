import React, { useState } from "react";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSave,
  FaSignOutAlt,
} from "react-icons/fa";

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSave = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("✅ Password Changed Successfully!");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully!");

    window.location.href = "/login";
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <FaLock className="text-red-400 text-3xl" />
        <h2 className="text-2xl font-bold text-white">
          Security Settings
        </h2>
      </div>

      {/* Current Password */}
      <div className="mb-5">
        <label className="text-gray-300 block mb-2">
          Current Password
        </label>

        <div className="relative">
          <input
            type={showCurrent ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
            className="w-full bg-slate-700 text-white p-4 rounded-xl pr-12 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showCurrent ? (
              <FaEyeSlash size={20} />
            ) : (
              <FaEye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="mb-5">
        <label className="text-gray-300 block mb-2">
          New Password
        </label>

        <div className="relative">
          <input
            type={showNew ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full bg-slate-700 text-white p-4 rounded-xl pr-12 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showNew ? (
              <FaEyeSlash size={20} />
            ) : (
              <FaEye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="mb-6">
        <label className="text-gray-300 block mb-2">
          Confirm Password
        </label>

        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full bg-slate-700 text-white p-4 rounded-xl pr-12 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showConfirm ? (
              <FaEyeSlash size={20} />
            ) : (
              <FaEye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4">

        <button
          onClick={handleSave}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
        >
          <FaSave />
          Change Password
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
};

export default SecuritySettings;