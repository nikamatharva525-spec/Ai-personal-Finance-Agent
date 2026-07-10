import React from "react";
import Background from "../components/Login/Background";
import GlassCard from "../components/Login/GlassCard";
import Illustration from "../components/Login/Illustration";
import LoginForm from "../components/Login/LoginForm";
import FloatingIcons from "../components/Login/FloatingIcons";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

const Login = () => {
  return (
    <Background>

  <FloatingIcons />

  <div className="flex justify-center items-center min-h-screen">

    <GlassCard>

      <Illustration />

      <LoginForm />

    </GlassCard>

  </div>

</Background>
  );
};

export default Login;