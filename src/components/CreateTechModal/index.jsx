import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";
import { SelectInput } from "../SelectInput";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { Option } from "../SelectInput/Option";
import { FormContext } from "../../providers/FormContext";
import { ModalContext } from "../../providers/ModalContext";

export const CreateTechModal = () => {
  const [loading, setLoading] = useState(false);
  const { statusOptions, setStatusOptions } = useContext(FormContext);

  const { createTech } = useContext(TechContext);

  const { handleCloseAddModal } = useContext(ModalContext);

  const { register, handleSubmit, reset } = useForm();

  const submit = (formData) => {
    createTech(formData, reset, setLoading);
  };

  return (
    <div className={styles.modalOverlay} id="addModalOverlay">
      <div className={styles.modal}>
        <div className={styles.topDiv}>
          <p className="title modal">Cadastrar Tecnologia</p>
          <span onClick={handleCloseAddModal} className="smText close">
            X
          </span>
        </div>
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
          <div className={styles.inputDiv}>
            <Input
              label="Nome"
              labelClass="label"
              id="title"
              className={styles.input}
              name="title"
              type="text"
              {...register("title")}
            />
          </div>
          <div className={styles.inputDiv}>
            <SelectInput
              label="Selecionar status"
              labelClass="label"
              id="status"
              className={styles.input}
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
          <button disabled={loading} className="btn registerDisabled">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </div>
  );
};
