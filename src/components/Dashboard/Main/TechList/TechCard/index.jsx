import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../../../providers/TechContext";
import { ModalContext } from "../../../../../providers/ModalContext";

export const TechCard = ({ title, status, tech }) => {
  const { deleteTech, selectEditingTech } = useContext(TechContext);

  const { handleOpenEditModal } = useContext(ModalContext);

  return (
    <>
      <li className={styles.card}>
        <p className="title">{title}</p>
        <div className={styles.cardDiv}>
          <div className={styles.textDiv}>
            <span className="smText dashboard">{status}</span>
          </div>
          <div className={styles.iconsDiv}>
            <MdOutlineModeEditOutline
              onClick={() => {
                handleOpenEditModal();
                selectEditingTech(tech);
              }}
              className={styles.editIcon}
            />
            <RiDeleteBin6Line
              onClick={() => deleteTech(tech.id)}
              className={styles.deleteIcon}
            />
          </div>
        </div>
      </li>
    </>
  );
};
