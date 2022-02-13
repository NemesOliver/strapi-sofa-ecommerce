import { useEffect, useContext } from "react";
import { SnackbarContext } from "../../context";

export const Snackbar = ({ time }) => {
  const { open, setOpen, message, color } = useContext(SnackbarContext);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, time);
  }, [time, setOpen]);

  return (
    <>
      {open && (
        <div
          style={{
            backgroundColor: color,
          }}
          className="py-2 px-4 min-w-[300px] rounded-sm shadow-sm text-white absolute bottom-1 left-1 flex"
        >
          <span className="flex-1">{message}</span>
          <button
            onClick={() => setOpen(false)}
            className="font-medium text-[14px] pl-4"
          >
            CLOSE
          </button>
        </div>
      )}
    </>
  );
};
