export const Input = ({ label, labelClass, id, ...rest }) => {
  return (
    <>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input {...rest} id={id} />
      {/* Icone do olho */}
    </>
  );
};
