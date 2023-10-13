export const Input = ({ label, id, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </>
  );
};
