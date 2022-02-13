export const Input = ({ label, type, value, onChange }) => {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        className="border rounded-sm border-primary focus:outline-primary px-2 py-1.5"
        type={type}
        value={value}
        onChange={onChange}
        id={label}
      />
    </>
  );
};
