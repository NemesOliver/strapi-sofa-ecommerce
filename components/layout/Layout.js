import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header, Navigation } from "../../components";

export const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(true);

  const toggleNavigation = () => setNavOpen(!navOpen);

  return (
    <>
      <Header navOpen={navOpen} toggleNavigation={toggleNavigation} />
      <AnimatePresence>{navOpen && <Navigation />}</AnimatePresence>
      {children}
    </>
  );
};
