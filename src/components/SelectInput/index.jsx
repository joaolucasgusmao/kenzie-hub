import { forwardRef } from "react";

export const SelectInput = forwardRef(
  (
    {
      label,
      labelClass,
      setModuleOptions,
      setStatusOptions,
      id,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <select
          {...rest}
          id={id}
          onChange={(event) => {
            setStatusOptions && typeof setStatusOptions === "function"
              ? setStatusOptions(event.target.value)
              : null;
            
              setModuleOptions && typeof setModuleOptions === "function"
              ? setModuleOptions(event.target.value)
              : null;
          }}
          ref={ref}
        >
          {children}
        </select>
      </>
    );
  }
);
