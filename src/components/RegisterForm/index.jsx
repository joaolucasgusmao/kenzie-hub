import { Input } from "./Input";
import { SelectInput } from "./SelectInput";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
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

  const notifySucess = () => {
    toast.success("Conta criada com sucesso!");
  };

  const notifyError = () => {
    toast.error("Ops! Algo deu errado");
  };

  const handleHiddenPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const passwordType = hiddenPassword ? "password" : "text";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaRegister),
  });

  const submit = (formData) => {
    const { confirmPassword, ...dataWithoutConfirmPassword } = formData;
    request(dataWithoutConfirmPassword);
    console.log(dataWithoutConfirmPassword);
    reset();
  };

  const request = async (formData) => {
    try {
      await api.post("/users", formData);
      notifySucess();
      setTimeout(() => {
        window.location.href = "/";
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
            className={styles.passwordInput}
            placeholder="Digite aqui sua senha"
            type={passwordType}
            name="password"
            {...register("password")}
          />
          {hiddenPassword ? (
            <AiFillEye onClick={handleHiddenPassword} />
          ) : (
            <AiFillEyeInvisible onClick={handleHiddenPassword} />
          )}
          {errors.password ? <p>{errors.password.message}</p> : null}
        </div>
        <div className={styles.confirmPasswordInputDiv}>
          <Input
            label="Confirmar Senha"
            labelClass="label"
            id="confirmPassword"
            className={styles.confirmPasswordInput}
            placeholder="Digite novamente sua senha"
            type={passwordType}
            name="confirmPassword"
            {...register("confirmPassword")}
          />
          {hiddenPassword ? (
            <AiFillEye onClick={handleHiddenPassword} />
          ) : (
            <AiFillEyeInvisible onClick={handleHiddenPassword} />
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
            name="course_module"
            value={moduleOptions}
            setModuleOptions={setModuleOptions}
            {...register("course_module")}
          />
          {errors.course_module ? <p>{errors.course_module.message}</p> : null}
        </div>
        <button className="btn registerDisabled" type="submit">
          Cadastrar
        </button>
      </form>
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
};
