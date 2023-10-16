import styles from "./style.module.scss";

export const Main = ({ userInfos }) => {
  return (
    <main className="container dashboard">
      <div className={styles.topDiv}>
        <p className="title">Olá, {userInfos?.name}</p>
        <p className="smText dashboard">{userInfos?.course_module}</p>
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
