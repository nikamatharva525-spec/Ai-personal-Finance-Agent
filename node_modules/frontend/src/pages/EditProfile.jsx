import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaSave,
  FaArrowLeft,
} from "react-icons/fa";

const EditProfile = () => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    name: storedUser?.name || "",
    email: storedUser?.email || "",
    phone: storedUser?.phone || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        "http://localhost:5000/api/users/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Save updated user locally
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Profile Updated Successfully!");

      navigate("/profile");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to update profile"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="bg-slate-800 w-full max-w-2xl rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-white mb-8">
          Edit Profile
        </h1>

        <div className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <div className="flex items-center bg-slate-700 rounded-xl px-4">
              <FaUser className="text-purple-400" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent p-4 text-white outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <div className="flex items-center bg-slate-700 rounded-xl px-4">
              <FaEnvelope className="text-blue-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent p-4 text-white outline-none"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-300 mb-2">
              Phone
            </label>

            <div className="flex items-center bg-slate-700 rounded-xl px-4">
              <FaPhone className="text-green-400" />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent p-4 text-white outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">

            <button
              onClick={() => navigate("/profile")}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-xl flex items-center justify-center gap-2"
            >
              <FaArrowLeft />
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white py-4 rounded-xl flex items-center justify-center gap-2"
            >
              <FaSave />
              Save Changes
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EditProfile;