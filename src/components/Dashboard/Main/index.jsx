import styles from "./style.module.scss";

export const Main = () => {
  return (
    <main className="container dashboard">
      <div className={styles.topDiv}>
        <p className="title">Olá, João Lucas</p>
        <p className="smText dashboard">Primeiro módulo (Introdução ao Frontend)</p>
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
