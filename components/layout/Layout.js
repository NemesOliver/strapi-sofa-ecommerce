import { AnimatePresence } from "framer-motion";
import { Header, Navigation, Snackbar } from "../../components";
import { useNavigation } from "./libs";

export const Layout = ({ children }) => {
  const { navOpen, toggleNavigation, closeNavigation } = useNavigation();

  return (
    <>
      <Header
        navOpen={navOpen}
        toggleNavigation={toggleNavigation}
        closeNavigation={closeNavigation}
      />
      <AnimatePresence>
        {navOpen && <Navigation closeNavigation={closeNavigation} />}
      </AnimatePresence>
      {children}
      <Snackbar time={3000} />
    </>
  );
};
