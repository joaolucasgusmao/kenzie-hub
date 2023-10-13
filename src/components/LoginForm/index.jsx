import { Input } from "./Input";
import Logo from "../../assets/Logo.svg";

export const LoginForm = () => {
  return (
    <div>
      <img src={Logo} alt="Logo" />
      <form>
        <h2 className="title">Login</h2>
        <div>
          <Input
            label="Email"
            labelClass="label"
            id="email"
            className=""
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
            type="password"
            name="password"
          />
        </div>
        <button className="btn enter">Entrar</button>
        <div>
          <p className="smText">Ainda não possui uma conta?</p>
          <button className="btn register">Cadastre-se</button>
        </div>
      </form>
    </div>
  );
};
