import Logo from "../../../assets/Logo.svg";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <button className="btn exit">Sair</button>
    </header>
  );
};
