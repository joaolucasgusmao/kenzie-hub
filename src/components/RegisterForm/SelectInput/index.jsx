import { Option } from "./Option";

export const SelectInput = ({ label, labelClass, id, name }) => {
  return (
    <>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select id={id} name={name}>
        <Option value="primeiroModulo" textName="Primeiro Módulo" />
        <Option value="segundoModulo" textName="Segundo Módulo" />
        <Option value="terceiroModulo" textName="Terceiro Módulo" />
      </select>
    </>
  );
};
