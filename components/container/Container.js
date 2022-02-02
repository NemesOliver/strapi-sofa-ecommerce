export const Container = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-[10px] container:px-0">
      {children}
    </div>
  );
};
