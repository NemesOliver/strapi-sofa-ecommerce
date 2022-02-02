import { useState } from "react";

export const useNavigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavigation = () => setNavOpen(!navOpen);
  const closeNavigation = () => setNavOpen(false);

  return { navOpen, toggleNavigation, closeNavigation };
};
