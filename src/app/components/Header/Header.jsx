"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";

import logo from "@assets/logo.svg";
import HamburgerButton from "../UI/HamburgerButton";
import NavBar from "../NavBar/NavBar";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="mx-auto flex items-center justify-between lg:max-w-[111rem]">
        <Link href="/">
          <Image
            src={logo}
            width="160"
            height="40"
            alt="myteam logo"
            className="w-[12.8rem]"
          />
        </Link>
        <div className="ml-[4.8rem] hidden w-full items-center justify-between text-[1.8rem] sm:flex">
          <NavBar fontSize={1.8} />
          <Button href="/contact">contact us</Button>
        </div>
        <div
          className={clsx(
            "z-40 flex h-[2.3rem] w-[2.3rem] items-center sm:hidden",
            mobileMenuOpen ? "fixed right-[2.4rem]" : "relative",
          )}
          onClick={handleToggleMenu}
        >
          <HamburgerButton
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Modal toggleMenu={handleToggleMenu}>
            <MobileMenu toggleMenu={handleToggleMenu} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
