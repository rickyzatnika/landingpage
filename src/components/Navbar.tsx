"use client";

import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed z-20 flex w-full shadow-sm h-20 bg-white items-center justify-between gap-2 px-4 md:px-12 xl:px-16 2xl:px-20">
      <Link href="/" className="text-lg">
        Logo
      </Link>
      <div className="hidden md:flex items-center justify-center gap-8 text-sm">
        <Link
          className={`${
            pathname === "/"
              ? "text-[#a8ca41]  font-semibold"
              : "text-gray-400/60 hover:text-[#a8ca41]"
          }  `}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${
            pathname === "/about"
              ? "text-[#a8ca41] font-semibold"
              : "text-gray-400/60 hover:text-[#a8ca41]"
          }`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`${
            pathname === "/services"
              ? "text-[#a8ca41] font-semibold"
              : "text-gray-400/60 hover:text-[#a8ca41]"
          }`}
          href="/services"
        >
          Services
        </Link>
        <Link
          className={`${
            pathname === "/contact"
              ? "text-[#a8ca41] font-semibold"
              : "text-gray-400/60 hover:text-[#a8ca41]"
          }`}
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
