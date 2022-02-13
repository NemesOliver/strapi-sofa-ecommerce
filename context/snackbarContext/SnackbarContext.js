import { createContext, useState } from "react";

export const SnackbarContext = createContext({});

export const SnackbarContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("success");

  const triggerSnackbar = (msg, severity) => {
    setOpen(true);
    setMessage(msg);
    setColor(severity);
  };

  return (
    <SnackbarContext.Provider
      value={{ triggerSnackbar, open, setOpen, color, message }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
