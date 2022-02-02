import { motion } from "framer-motion";

export const Navigation = () => {
  return (
    <motion.nav
      key="navigation"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.2, type: "tween" }}
      className="fixed z-10 bottom-0 left-0 bg-background w-screen h-[calc(100vh-60px)]"
    >
      <ul>
        <li>1. x</li>
        <li>2. x</li>
        <li>3. x</li>
        <li>4. x</li>
      </ul>
    </motion.nav>
  );
};
