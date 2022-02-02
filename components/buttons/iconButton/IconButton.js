export const IconButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" hover:text-[#82AB2C]  transition-all "
    >
      {children}
    </button>
  );
};
