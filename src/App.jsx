import "./styles/index.scss";
import { MainRoutes } from "./routes/MainRoutes";
import { LoadingScreen } from "./components/LoadingScreen";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

const App = () => {
  const { loading } = useContext(UserContext);

  return <>{loading ? <LoadingScreen /> : <MainRoutes />}</>;
};

export default App;