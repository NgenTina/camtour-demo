"use client";

import { useState } from "react";
import WelcomeScreen from "@/components/welcome-screen";
import AuthScreen from "@/components/auth-screen";
import ChatInterface from "@/components/chat-interface";
import LandingPage from "@/components/ui/landing-page";

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState<
    "welcome" | "auth" | "chat"
  >("welcome");

  const handleGetStarted = () => {
    setCurrentScreen("auth");
  };

  const handleAuth = () => {
    setCurrentScreen("chat");
  };

  const handleSkipAuth = () => {
    setCurrentScreen("chat");
  };

  if (currentScreen === "welcome") {
    return <LandingPage />;
  }

  if (currentScreen === "auth") {
    return <AuthScreen onAuth={handleAuth} onSkip={handleSkipAuth} />;
  }

  return (
    <>
      <ChatInterface />
    </>
  );
}
