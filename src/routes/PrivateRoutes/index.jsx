import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const { userInfos } = useContext(UserContext);

  return userInfos ? <Outlet /> : <Navigate to="/" />;
};