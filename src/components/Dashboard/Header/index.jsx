import Logo from "../../../assets/Logo.svg";
import styles from "./style.module.scss";

export const Header = ({ logout }) => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />

      <button onClick={() => logout()} className="btn exit">
        Sair
      </button>
    </header>
  );
};