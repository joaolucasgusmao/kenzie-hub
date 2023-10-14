import { Input } from "./Input";
import Logo from "../../assets/Logo.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const LoginForm = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const { register, handleSubmit } = useForm();

  const handleHiddenPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const submit = (formData) => {
    console.log(formData);
  };

  const passwordType = hiddenPassword ? "password" : "text";

  return (
    <div className="container">
      <img src={Logo} alt="Logo" />
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <h2 className="title">Login</h2>
        <div className={styles.emailInputDiv}>
          <Input
            label="Email"
            labelClass="label"
            id="email"
            className={styles.emailInput}
            type="email"
            name="email"
            {...register("email")}
          />
        </div>
        <div className={styles.passwordInputDiv}>
          <Input
            label="Senha"
            labelClass="label"
            id="password"
            className={styles.passwordInput}
            type={passwordType}
            name="password"
            {...register("password")}
          />
          {hiddenPassword ? (
            <AiFillEye onClick={handleHiddenPassword} className={styles.icon} />
          ) : (
            <AiFillEyeInvisible
              onClick={handleHiddenPassword}
              className={styles.icon}
            />
          )}
        </div>
        <button type="submit" className="btn enter">
          Entrar
        </button>
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