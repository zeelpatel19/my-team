import clsx from "clsx";

import Link from "next/link";

const mobileMenuStylese = "flex flex-col gap-[2.4rem]";

export default function NavBar({ isMobile, toggleMenu }) {
  return (
    <nav className={clsx("flex gap-[2.4rem]", isMobile && mobileMenuStylese)}>
      <Link onClick={toggleMenu} href="/">
        home
      </Link>
      <Link onClick={toggleMenu} href="about">
        about
      </Link>
    </nav>
  );
}
