import React from "react";

export const FilledButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary w-full rounded-md py-3 px-14 mb-6 hover:scale-95 active:scale-100 transition-all sm:w-auto lg:absolute bottom-[12px] right-0 "
    >
      {children}
    </button>
  );
};
