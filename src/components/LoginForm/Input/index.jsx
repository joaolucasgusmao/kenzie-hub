export const Input = ({ label, id, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input {...rest} id={id} />
      {/* Icone do olho */}
    </>
  );
};