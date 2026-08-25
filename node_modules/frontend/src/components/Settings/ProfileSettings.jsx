import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCamera, FaSave } from "react-icons/fa";

const ProfileSettings = () => {
  const [name, setName] = useState("Atharva Nikam");
  const [email, setEmail] = useState("atharva@example.com");
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">

      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <FaUser className="text-purple-400" />
        Profile Settings
      </h2>

      {/* Profile Picture */}
      <div className="flex flex-col items-center mb-6">

        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-purple-500">

          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-slate-700 flex items-center justify-center text-white text-5xl">
              <FaUser />
            </div>
          )}

        </div>

        <label className="mt-4 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition">
          <FaCamera />
          Upload Photo

          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>

      </div>

      {/* Name */}
      <div className="mb-5">

        <label className="text-gray-300 mb-2 block">
          Full Name
        </label>

        <div className="flex items-center bg-slate-700 rounded-xl px-4">

          <FaUser className="text-gray-400" />

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent outline-none p-3 text-white"
          />

        </div>

      </div>

      {/* Email */}
      <div className="mb-6">

        <label className="text-gray-300 mb-2 block">
          Email Address
        </label>

        <div className="flex items-center bg-slate-700 rounded-xl px-4">

          <FaEnvelope className="text-gray-400" />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent outline-none p-3 text-white"
          />

        </div>

      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition flex items-center justify-center gap-2"
      >
        <FaSave />
        Save Changes
      </button>

    </div>
  );
};

export default ProfileSettings;