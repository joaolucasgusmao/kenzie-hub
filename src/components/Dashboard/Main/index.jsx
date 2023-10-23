import { useContext } from "react";
import styles from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";

export const Main = () => {
  const { userInfos } = useContext(UserContext);

  return (
    <main className="container dashboard">
      <div className={styles.topDiv}>
        <div className={styles.infos}>
          <p className="title">Olá, {userInfos?.name}</p>
          <p className="smText dashboard">{userInfos?.course_module}</p>
        </div>
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
