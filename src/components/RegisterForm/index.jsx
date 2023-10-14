import { Input } from "./Input";
import { SelectInput } from "./SelectInput";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { formSchemaRegister } from "./RegisterForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";

export const RegisterForm = () => {
  const [moduleOptions, setModuleOptions] = useState("Primeiro Módulo");
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
    console.log(dataWithoutConfirmPassword);
    reset();
    request(dataWithoutConfirmPassword);
  };

  const request = async (formData) => {
    try {
      await api.post("/users", formData);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
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
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Senha"
            labelClass="label"
            id="password"
            placeholder="Digite aqui sua senha"
            type="password"
            name="password"
            {...register("password")}
          />
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Confirmar Senha"
            labelClass="label"
            id="confirmPassword"
            placeholder="Digite novamente sua senha"
            type="password"
            name="confirmPassword"
            {...register("confirmPassword")}
          />
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
        </div>
        <button className="btn registerDisabled" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};