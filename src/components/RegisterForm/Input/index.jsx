export const Input = ({ label, labelClass, id, ...rest }) => {
  return (
    <>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input id={id} {...rest} />
    </>
  );
};
