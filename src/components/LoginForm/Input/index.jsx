import { forwardRef } from "react";

export const Input = forwardRef(
  ({ label, labelClass, id, src, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <input {...rest} id={id} ref={ref} />
      </>
    );
  }
);
