import { forwardRef } from "react";
import { Option } from "./Option";

export const SelectInput = forwardRef(
  ({ label, labelClass, setModuleOptions, id, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <select
          {...rest}
          id={id}
          onChange={(event) => setModuleOptions(event.target.value)}
          ref={ref}
        >
          <Option value="" textName="Selecione um módulo" />
          <Option value="Primeiro Módulo" textName="Primeiro Módulo" />
          <Option value="Segundo Módulo" textName="Segundo Módulo" />
          <Option value="Terceiro Módulo" textName="Terceiro Módulo" />
        </select>
      </>
    );
  }
);
