import { Header } from "../../components/Dashboard/Header";
import { Main } from "../../components/Dashboard/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <Main />
      <ToastContainer theme="dark" autoClose={1000} />
    </>
  );
};
