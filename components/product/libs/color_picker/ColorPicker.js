import React from "react";

export const ColorPicker = () => {
  return (
    <div className="w-full flex justify-center mb-6 sm:block">
      <button className="w-[60px] h-[60px] bg-green-800 mx-2 sm:mr-4 rounded-[50%] focus:rounded-md hover:rounded-md transition-all duration-300 ease-linear" />
      <button className="w-[60px] h-[60px] bg-yellow-600 mx-2 sm:mr-4 rounded-[50%] focus:rounded-md hover:rounded-md transition-all duration-300 ease-linear" />
      <button className="w-[60px] h-[60px] bg-gray-800 mx-2 sm:mr-4 rounded-[50%] focus:rounded-md hover:rounded-md transition-all duration-300 ease-linear" />
    </div>
  );
};
