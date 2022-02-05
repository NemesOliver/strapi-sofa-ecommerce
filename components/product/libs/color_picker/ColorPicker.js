import { useMemo } from "react";

export const ColorPicker = ({ changeImage, colors }) => {
  const classNames = useMemo(
    () =>
      colors.map(
        ({ color }) =>
          `w-[60px] h-[60px] bg-[${color}] mx-2 sm:mr-4 rounded-[50%] hover:rounded-md transition-all duration-300 ease-linear`
      ),
    [colors]
  );

  return (
    <div className="w-full flex justify-center mb-6 sm:block">
      {classNames.map((className, i) => (
        <button onClick={() => changeImage(i)} key={i} className={className} />
      ))}
    </div>
  );
};
