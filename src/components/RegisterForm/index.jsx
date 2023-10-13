import { Input } from "./Input";
import { SelectInput } from "./SelectInput";

export const RegisterForm = () => {
  return (
    <div>
      <div>
        <img src="" alt="Logo" />
        <button>Voltar</button>
      </div>
      <form>
        <div>
          <p>Crie sua conta</p>
          <span>Rapido e grátis, vamos nessa</span>
        </div>
        <div>
          <Input
            label="Nome"
            id="name"
            placeholder="Digite aqui seu nome"
            type="text"
            name="name"
          />
        </div>
        <div>
          <Input
            label="Email"
            id="email"
            placeholder="Digite aqui seu email"
            type="email"
            name="email"
          />
        </div>
        <div>
          <Input
            label="Senha"
            id="password"
            placeholder="Digite aqui sua senha"
            type="password"
            name="password"
          />
        </div>
        <div>
          <Input
            label="Confirmar Senha"
            id="confirmPassword"
            placeholder="Digite novamente sua senha"
            type="password"
            name="confirmPassword"
          />
        </div>
        <div>
          <Input
            label="Bio"
            id="bio"
            placeholder="Fale sobre você"
            type="text"
            name="bio"
          />
        </div>
        <div>
          <Input
            label="Contato"
            id="contact"
            placeholder="Opção de contato"
            type="text"
            name="contact"
          />
        </div>
        <div>
          <SelectInput label="Selecionar módulo" id="moduleOptions" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
