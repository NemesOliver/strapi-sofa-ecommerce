export const IconButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className=" hover:text-primary  transition-all ">
      {children}
    </button>
  );
};
