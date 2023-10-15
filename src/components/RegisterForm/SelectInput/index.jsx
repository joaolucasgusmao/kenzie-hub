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
          <Option
            value="Módulo 1 (Introdução ao Frontend)"
            textName="Módulo 1 (Introdução ao Frontend)"
          />
          <Option
            value="Módulo 2 (Frontend intermediário)"
            textName="Módulo 2 (Frontend intermediário)"
          />
          <Option
            value="Módulo 3 (Frontend avançado)"
            textName="Módulo 3 (Frontend avançado)"
          />
        </select>
      </>
    );
  }
);
