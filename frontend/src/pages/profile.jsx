import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaEdit,
} from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();

  // Read user data from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Atharva Nikam",
    email: "atharva@example.com",
    phone: "+91 XXXXX XXXXX",
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl shadow-xl p-8">

        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-purple-500 text-9xl" />

          <h1 className="text-4xl font-bold text-white mt-4">
            {user.name}
          </h1>

          <p className="text-gray-400">
            FinanceHub User
          </p>
        </div>

        {/* User Details */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-slate-700 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope className="text-blue-400" />
              <span className="text-gray-300">Email</span>
            </div>

            <p className="text-white">
              {user.email}
            </p>
          </div>

          <div className="bg-slate-700 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <FaPhone className="text-green-400" />
              <span className="text-gray-300">Phone</span>
            </div>

            <p className="text-white">
              {user.phone}
            </p>
          </div>

        </div>

        {/* Edit Profile Button */}
        <button
          onClick={() => navigate("/edit-profile")}
          className="mt-10 w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-2xl text-white font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <FaEdit />
          Edit Profile
        </button>

      </div>
    </div>
  );
};

export default Profile;