import { Input } from "./Input";
import { SelectInput } from "./SelectInput";
import Logo from "../../assets/Logo.svg"

export const RegisterForm = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo" />
        <button className="btn back">Voltar</button>
      </div>
      <form>
        <div>
          <h2 className="title">Crie sua conta</h2>
          <span className="smText register">Rapido e grátis, vamos nessa</span>
        </div>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
          <SelectInput label="Selecionar módulo" id="moduleOptions" />
        </div>
        <button className="btn registerDisabled" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};
