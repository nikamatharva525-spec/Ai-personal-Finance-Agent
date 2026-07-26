import React from "react";
import AISettings from "../components/Settings/AISettings";
import CurrencySettings from "../components/Settings/CurrencySettings";
import NotificationSettings from "../components/Settings/NotificationSettings";
import ProfileSettings from "../components/Settings/ProfileSettings";
import SecuritySettings from "../components/Settings/SecuritySettings";
import ThemeSettings from "../components/Settings/ThemeSettings";

const Settings = () => {
  return (
    <div className="p-6 bg-slate-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <ProfileSettings />
      <ThemeSettings />
      <NotificationSettings />
      <CurrencySettings />
      <SecuritySettings />
      <AISettings />
    </div>
  );
};

export default Settings;