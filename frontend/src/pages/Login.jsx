import React from "react";
import Background from "../components/Login/Background";
import GlassCard from "../components/Login/GlassCard";
import Illustration from "../components/Login/Illustration";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <Background>

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