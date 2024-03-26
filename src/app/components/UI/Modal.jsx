import { motion } from "framer-motion";

export default function Modal({ children, toggleMenu }) {
  const handleClickBackground = () => {
    toggleMenu();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        onClick={toggleMenu}
        className="fixed left-0 top-0 z-20 h-full w-full bg-black"
      ></motion.div>
      {children}
    </>
  );
}
