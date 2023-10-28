import { useContext } from "react";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";
import { Input } from "../Input";
import { SelectInput } from "../SelectInput";
import { Option } from "../SelectInput/Option";
import { FormContext } from "../../providers/FormContext";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../providers/ModalContext";

export const EditTechModal = () => {
  const { updateTech, editingTech } = useContext(TechContext);

  const { statusOptions, setStatusOptions } = useContext(FormContext);

  const { handleCloseEditModal } = useContext(ModalContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const submit = (FormData) => {
    updateTech(FormData);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.topDiv}>
          <p className="title modal">Tecnologia Detalhes</p>
          <span onClick={handleCloseEditModal} className="smText close">
            X
          </span>
        </div>
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
          <div className={styles.inputDiv}>
            <Input
              label="Nome"
              labelClass="label"
              id="addTech"
              className={`${styles.input} ${styles.edit} ${styles.block}`}
              name="title"
              type="text"
              {...register("title")}
            />
          </div>
          <div className={styles.inputDiv}>
            <SelectInput
              label="Status"
              labelClass="label"
              id="editTech"
              className={`${styles.input} ${styles.edit}`}
              name="status"
              value={statusOptions}
              setModuleOptions={null}
              setStatusOptions={setStatusOptions}
              {...register("status")}
            >
              <Option value="" textName="Selecionar status" />
              <Option value="Iniciante" textName="Iniciante" />
              <Option value="Intermediário" textName="Intermediário" />
              <Option value="Avançado" textName="Avançado" />
            </SelectInput>
          </div>
          <button type="submit" className="btn registerDisabled">
            Salvar alterações
          </button>
        </form>
      </div>
    </div>
  );
};
