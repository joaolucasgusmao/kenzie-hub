import { Route, Routes, useNavigate } from "react-router";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { useState } from "react";

export const MainRoutes = () => {
  const [userInfos, setUserInfos] = useState(null);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("@token");
    setUserInfos(null);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUserInfos={setUserInfos} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={<DashboardPage userInfos={userInfos} logout={logout} />}
      />
    </Routes>
  );
};
