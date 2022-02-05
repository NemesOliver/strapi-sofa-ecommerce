const buttons = [
  {
    element: (
      <button className="w-[60px] h-[60px] bg-[#262626] mx-2 sm:mr-4 rounded-[50%] hover:rounded-md transition-all duration-300 ease-linear" />
    ),
  },
  {
    element: (
      <button className="w-[60px] h-[60px] bg-[#B68212] mx-2 sm:mr-4 rounded-[50%] hover:rounded-md transition-all duration-300 ease-linear" />
    ),
  },
  {
    element: (
      <button className="w-[60px] h-[60px] bg-[#567C38] mx-2 sm:mr-4 rounded-[50%] hover:rounded-md transition-all duration-300 ease-linear" />
    ),
  },
];

export const ColorPicker = ({ changeImage }) => {
  return (
    <div className="w-full flex justify-center mb-6 sm:block">
      {buttons.map((button, i) => (
        <div onClick={() => changeImage(i)} key={i}>
          {button.element}
        </div>
      ))}
    </div>
  );
};
