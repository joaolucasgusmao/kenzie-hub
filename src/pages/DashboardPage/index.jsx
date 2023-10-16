import { Dashboard } from "../../components/Dashboard";

export const DashboardPage = ({ userInfos, logout }) => {
  return <Dashboard userInfos={userInfos} logout={logout} />;
};
