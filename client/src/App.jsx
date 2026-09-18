import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import VerifyPage from "./pages/VerifyPage";
import SuccessPage from "./pages/SuccessPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const [page, setPage] = useState("landing");

  const nav = (nextPage) => {
    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}>
      {page === "landing" && <LandingPage nav={nav} />}
      {page === "login" && <LoginPage nav={nav} />}
      {page === "register" && <RegisterPage nav={nav} />}
      {page === "forgot" && <ForgotPasswordPage nav={nav} />}
      {page === "reset" && <ResetPasswordPage nav={nav} />}
      {page === "verify" && <VerifyPage nav={nav} />}
      {page === "success" && <SuccessPage nav={nav} />}
      {page === "dashboard" && <DashboardPage nav={nav} />}
    </div>
  );
}
