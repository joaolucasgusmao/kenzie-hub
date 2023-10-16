import { Input } from "./Input";
import { SelectInput } from "./SelectInput";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { formSchemaRegister } from "./RegisterForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterForm = () => {
  const [moduleOptions, setModuleOptions] = useState("Selecione um módulo");
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true);

  const notifySucess = () => {
    toast.success("Conta criada com sucesso!");
  };

  const notifyError = () => {
    toast.error("Ops! Algo deu errado");
  };

  const handleHiddenPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const handleHiddenConfirmPassword = () => {
    setHiddenConfirmPassword(!hiddenConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(formSchemaRegister),
  });

  const submit = (formData) => {
    request(formData);
    reset();
  };

  const navigate = useNavigate();

  const request = async (formData) => {
    try {
      await api.post("/users", formData);
      notifySucess();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      notifyError();
    }
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
          disabled={!isValid || !isDirty}
        >
          Cadastrar
        </button>
      </form>
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
};
