import { motion } from "framer-motion";
import { links, useIsPageActive } from "./libs";

export const Navigation = () => {
  const { highlightCurrentPage } = useIsPageActive();

  return (
    <motion.nav
      key="navigation"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.2, type: "tween" }}
      className="fixed z-10 bottom-0 left-0 bg-background w-screen h-[calc(100vh-60px)] grid place-items-center"
    >
      <ul>
        {links.map(({ name, href }, i) => (
          <li
            key={i}
            className={`${highlightCurrentPage(
              href
            )} mb-3 text-[24px] font-medium antialiased cursor-pointer hover:text-primary hover:scale-110 transition-all`}
          >{`${i + 1}. ${name}`}</li>
        ))}
      </ul>
    </motion.nav>
  );
};
