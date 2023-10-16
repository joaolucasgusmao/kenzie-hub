import { Header } from "./Header";
import { Main } from "./Main";

export const Dashboard = ({ userInfos, logout }) => {
  return (
    <>
      <Header logout={logout} />
      <Main userInfos={userInfos} />
    </>
  );
};
