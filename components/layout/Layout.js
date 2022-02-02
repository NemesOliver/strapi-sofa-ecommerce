import { useState } from "react";
import { Header, Navigation } from "../../components";

export const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(true);

  const toggleNavigation = () => setNavOpen(!navOpen);

  return (
    <>
      <Header navOpen={navOpen} toggleNavigation={toggleNavigation} />
      {navOpen && <Navigation />}
      {children}
    </>
  );
};
