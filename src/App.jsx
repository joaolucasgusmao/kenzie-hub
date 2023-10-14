import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage";
import "./styles/index.scss";
import { MainRoutes } from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <MainRoutes />
    </>
  );
};

export default App;
