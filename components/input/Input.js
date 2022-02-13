export const Input = ({ label, type, value, onChange, error }) => {
  return (
    <>
      {label && (
        <label className={error ? "text-red-700" : ""} htmlFor={label}>
          {label}
        </label>
      )}
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
