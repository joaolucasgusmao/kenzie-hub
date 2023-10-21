import { useContext } from "react";
import Logo from "../../../assets/Logo.svg";
import styles from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";

export const Header = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />

      <button onClick={() => userLogout()} className="btn exit">
        Sair
      </button>
    </header>
  );
};
