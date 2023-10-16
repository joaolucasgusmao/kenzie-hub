import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
  const removeLs = () => {
    localStorage.removeItem("@token");
  };

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
      <Link to="/">
        <button onClick={removeLs} className="btn exit">
          Sair
        </button>
      </Link>
    </header>
  );
};