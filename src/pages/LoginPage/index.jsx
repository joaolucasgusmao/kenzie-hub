import { Input } from "../../components/Input";
import Logo from "../../assets/Logo.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { formSchemaLogin } from "./LoginForm.schema";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../providers/UserContext";
import { FormContext } from "../../providers/FormContext";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(UserContext);
  const { hiddenPassword, handleHiddenPassword } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaLogin),
  });

  const submit = (formData) => {
    userLogin(formData, setLoading);
  };

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
            className={`${styles.emailInput} ${
              errors.email ? styles.error : null
            }`}
            type="email"
            name="email"
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}
        </div>
        <div className={styles.passwordInputDiv}>
          <Input
            label="Senha"
            labelClass="label"
            id="password"
            className={`${styles.passwordInput} ${
              errors.password ? styles.error : null
            }`}
            type={hiddenPassword ? "password" : "text"}
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
          {errors.password ? <p>{errors.password.message}</p> : null}
        </div>
        <button type="submit" className="btn enter" disabled={loading}>
          Entrar
        </button>
        <div className={styles.bottomDiv}>
          <span className="smText">Ainda não possui uma conta?</span>
          <Link to="/register">
            <button className="btn register">Cadastre-se</button>
          </Link>
        </div>
      </form>
      <ToastContainer theme="dark" autoClose={1000} />
    </div>
  );
};