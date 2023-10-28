import { useContext } from "react";
import styles from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";
import { TechList } from "../../TechList";
import { CreateTechModal } from "../../CreateTechModal";
import { EditTechModal } from "../../EditTechModal";
import { ModalContext } from "../../../providers/ModalContext";

export const Main = () => {
  const { userInfos } = useContext(UserContext);

  const { addIsHidden, editIsHidden, handleOpenAddModal } =
    useContext(ModalContext);

  return (
    <>
      <main className="container dashboard">
        <div className={styles.topDiv}>
          <div className={styles.infos}>
            <p className="title">Olá, {userInfos?.name}</p>
            <p className="smText dashboard">{userInfos?.course_module}</p>
          </div>
        </div>
        <div className={styles.bottomDiv}>
          <div className={styles.headerDiv}>
            <h3 className="title">Tecnologias</h3>
            <button onClick={handleOpenAddModal} className="btn addTech">
              +
            </button>
          </div>
          <TechList />
        </div>
        {addIsHidden ? null : <CreateTechModal />}
        {editIsHidden ? null : <EditTechModal />}
      </main>
    </>
  );
};
