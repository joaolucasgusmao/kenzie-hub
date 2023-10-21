import { Input } from "../../components/Input";
import { SelectInput } from "../../components/SelectInput";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { formSchemaRegister } from "./RegisterForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../providers/UserContext";
import { FormContext } from "../../providers/FormContext";

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const { userRegister } = useContext(UserContext);

  const {
    moduleOptions,
    setModuleOptions,
    hiddenPassword,
    hiddenConfirmPassword,
    handleHiddenConfirmPassword,
    handleHiddenPassword,
  } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaRegister),
  });

  const submit = (formData) => {
    userRegister(formData, setLoading, reset);
  };

  return (
    <div className="container register">
      <div className={styles.topDiv}>
        <img src={Logo} alt="Logo" />
        <Link to="/">
          <button className="btn back">Voltar</button>
        </Link>
      </div>
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <div className={styles.textsDiv}>
          <h2 className="title">Crie sua conta</h2>
          <span className="smText register">Rapido e grátis, vamos nessa</span>
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Nome"
            labelClass="label"
            id="name"
            className={errors.name ? styles.error : null}
            placeholder="Digite aqui seu nome"
            type="text"
            name="name"
            {...register("name")}
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Email"
            labelClass="label"
            id="email"
            className={errors.email ? styles.error : null}
            placeholder="Digite aqui seu email"
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
            placeholder="Digite aqui sua senha"
            type={hiddenPassword ? "password" : "text"}
            name="password"
            {...register("password")}
          />
          {hiddenPassword ? (
            <AiFillEye
              onClick={handleHiddenPassword}
              className={styles.iconPassword}
            />
          ) : (
            <AiFillEyeInvisible
              onClick={handleHiddenPassword}
              className={styles.iconPassword}
            />
          )}
          {errors.password ? <p>{errors.password.message}</p> : null}
        </div>
        <div className={styles.confirmPasswordInputDiv}>
          <Input
            label="Confirmar Senha"
            labelClass="label"
            id="confirmPassword"
            className={`${styles.confirmPasswordInput} ${
              errors.confirmPassword ? styles.error : null
            }`}
            placeholder="Digite novamente sua senha"
            type={hiddenConfirmPassword ? "password" : "text"}
            name="confirmPassword"
            {...register("confirmPassword")}
          />
          {hiddenConfirmPassword ? (
            <AiFillEye
              onClick={handleHiddenConfirmPassword}
              className={styles.iconConfirmPassword}
            />
          ) : (
            <AiFillEyeInvisible
              onClick={handleHiddenConfirmPassword}
              className={styles.iconConfirmPassword}
            />
          )}
          {errors.confirmPassword ? (
            <p>{errors.confirmPassword.message}</p>
          ) : null}
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Bio"
            labelClass="label"
            id="bio"
            className={errors.bio ? styles.error : null}
            placeholder="Fale sobre você"
            type="text"
            name="bio"
            {...register("bio")}
          />
          {errors.bio ? <p>{errors.bio.message}</p> : null}
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Contato"
            labelClass="label"
            id="contact"
            className={errors.contact ? styles.error : null}
            placeholder="Opção de contato"
            type="text"
            name="contact"
            {...register("contact")}
          />
          {errors.contact ? <p>{errors.contact.message}</p> : null}
        </div>
        <div className={styles.inputsDiv}>
          <SelectInput
            label="Selecionar módulo"
            labelClass="label"
            id="course_module"
            className={errors.course_module ? styles.error : null}
            name="course_module"
            value={moduleOptions}
            setModuleOptions={setModuleOptions}
            {...register("course_module")}
          />
          {errors.course_module ? <p>{errors.course_module.message}</p> : null}
        </div>
        <button
          className="btn registerDisabled"
          type="submit"
          disabled={loading}
        >
          Cadastrar
        </button>
      </form>
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
};