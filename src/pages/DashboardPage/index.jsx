import { Header } from "../../components/Dashboard/Header";
import { Main } from "../../components/Dashboard/Main";

export const DashboardPage = ({ userInfos, logout }) => {
  return (
    <>
      <Header logout={logout} />
      <Main userInfos={userInfos} />
    </>
  );
};