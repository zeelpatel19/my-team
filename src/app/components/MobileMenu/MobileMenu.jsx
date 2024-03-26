import Image from "next/image";
import { motion } from "framer-motion";

import mobileMenuBackground from "@bg/bg-about-hero.svg";

import NavBar from "../NavBar/NavBar";
import Button from "../UI/Button";

export default function MobileMenu({ toggleMenu }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", duration: 1 }}
      className="fixed bottom-0 right-[-5rem] top-0 z-30 w-[80%] bg-secondary-green-medium text-[1.8rem]"
    >
      <div className="ml-[4.8rem] mt-[11.2rem]">
        <NavBar isMobile toggleMenu={toggleMenu} />
        <div className="mt-[5rem]">
          <Button onClick={toggleMenu} href="/contact">
            contact us
          </Button>
        </div>
      </div>
      <Image
        src={mobileMenuBackground}
        alt="circle with grating"
        width="200"
        height="200"
        className="absolute bottom-0 right-[-10rem]"
      />
    </motion.div>
  );
}
