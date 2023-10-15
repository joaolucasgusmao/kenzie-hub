import Logo from "../../../assets/Logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
  const logout = () => {
    localStorage.removeItem("@token");
    window.location.href = "/";
  };

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
      <button onClick={logout} className="btn exit">
        Sair
      </button>
    </header>
  );
};
