import { LoadingIcon } from "./libs";

export const LoadingButton = ({ isLoading, text }) => {
  return (
    <button className="w-full px-2 py-1.5 bg-primary rounded-sm mt-10 uppercase hover:scale-95 active:scale-100 transition-all">
      {isLoading ? <LoadingIcon /> : text}
    </button>
  );
};
