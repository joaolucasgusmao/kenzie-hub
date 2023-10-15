import styles from "./style.module.scss";

export const Main = () => {
  const name = JSON.parse(localStorage.getItem("@name"));
  const courseModule = JSON.parse(localStorage.getItem("@courseModule"));

  return (
    <main className="container dashboard">
      <div className={styles.topDiv}>
        <p className="title">Olá, {name}</p>
        <p className="smText dashboard">{courseModule}</p>
      </div>
      <div className={styles.bottomDiv}>
        <p className="title">Que pena! Estamos em desenvolvimento :(</p>
        <p className="title text">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </main>
  );
};