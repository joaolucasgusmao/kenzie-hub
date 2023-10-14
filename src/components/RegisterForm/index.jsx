import { Input } from "./Input";
import { SelectInput } from "./SelectInput";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const RegisterForm = () => {
  return (
    <div className="container register">
      <div className={styles.topDiv}>
        <img src={Logo} alt="Logo" />
        <button className="btn back">Voltar</button>
      </div>
      <form className={styles.form}>
        <div className={styles.textsDiv}>
          <h2 className="title">Crie sua conta</h2>
          <span className="smText register">Rapido e grátis, vamos nessa</span>
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Nome"
            labelClass="label"
            id="name"
            className=""
            placeholder="Digite aqui seu nome"
            type="text"
            name="name"
          />
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Email"
            labelClass="label"
            id="email"
            className=""
            placeholder="Digite aqui seu email"
            type="email"
            name="email"
          />
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Senha"
            labelClass="label"
            id="password"
            className=""
            placeholder="Digite aqui sua senha"
            type="password"
            name="password"
          />
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Confirmar Senha"
            labelClass="label"
            id="confirmPassword"
            className=""
            placeholder="Digite novamente sua senha"
            type="password"
            name="confirmPassword"
          />
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Bio"
            labelClass="label"
            id="bio"
            className=""
            placeholder="Fale sobre você"
            type="text"
            name="bio"
          />
        </div>
        <div className={styles.inputsDiv}>
          <Input
            label="Contato"
            labelClass="label"
            id="contact"
            className=""
            placeholder="Opção de contato"
            type="text"
            name="contact"
          />
        </div>
        <div className={styles.inputsDiv}>
          <SelectInput
            label="Selecionar módulo"
            labelClass="label"
            id="moduleOptions"
          />
        </div>
        <button className="btn registerDisabled" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};
