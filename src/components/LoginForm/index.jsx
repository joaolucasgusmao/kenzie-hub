import { Input } from "./Input";

export const LoginForm = () => {
  return (
    <div>
      <img src="" alt="Logo" />
      <form>
        <h2>Login</h2>
        <div>
          <Input label="E-mail" id="email" type="email" name="email" />
        </div>
        <div>
          <Input label="Senha" id="password" type="password" name="password" />
        </div>
        <button>Entrar</button>
        <div>
          <p>Ainda não possui uma conta?</p>
          <button>Cadastre-se</button>
        </div>
      </form>
    </div>
  );
};