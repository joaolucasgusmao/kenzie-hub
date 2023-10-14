import { Input } from "./Input";
import Logo from "../../assets/Logo.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { formSchemaLogin } from "./LoginForm.schema";
import { api } from "../../services/api";

export const LoginForm = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaLogin),
  });

  const handleHiddenPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const submit = (formData) => {
    reset();
    request(formData);
  };

  const request = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      window.location.href = "/dashboard";
      localStorage.setItem("@token", JSON.stringify(data.token));
      localStorage.setItem("@name", JSON.stringify(data.user.name));
      localStorage.setItem(
        "@courseModule",
        JSON.stringify(data.user.course_module)
      );
    } catch (error) {
      console.log(error);
    }
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
        {errors.email ? <p>{errors.email.message}</p> : null}
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