import { forwardRef } from "react";
import { Option } from "./Option";

export const SelectInput = forwardRef(
  ({ label, labelClass, value, setModuleOptions, id, name }, ref) => {
    return (
      <>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <select
          id={id}
          value={value}
          onChange={(event) => setModuleOptions(event.target.value)}
          name={name}
          ref={ref}
        >
          <Option value="Primeiro Módulo" textName="Primeiro Módulo" />
          <Option value="Segundo Módulo" textName="Segundo Módulo" />
          <Option value="Terceiro Módulo" textName="Terceiro Módulo" />
        </select>
      </>
    );
  }
);
