export const IconButton = ({ children }) => {
  return (
    <button className="flex justify-between items-center w-[90px] text-2xl font-light hover:text-[#82AB2C]  transition-all ">
      {children}
    </button>
  );
};
