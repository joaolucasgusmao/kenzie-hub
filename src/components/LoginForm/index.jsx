import { Input } from "./Input";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { RegisterPage } from "../../pages/RegisterPage";

export const LoginForm = () => {
  return (
    <div className="container">
      <img src={Logo} alt="Logo" />
      <form className={styles.form}>
        <h2 className="title">Login</h2>
        <div className={styles.inputsDiv}>
          <Input
            label="Email"
            labelClass="label"
            id="email"
            type="email"
            name="email"
          />
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Senha"
            labelClass="label"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <button className="btn enter">Entrar</button>
        <div className={styles.bottomDiv}>
          <p className="smText">Ainda não possui uma conta?</p>
          <Link to="/register">
            <button className="btn register">Cadastre-se</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
