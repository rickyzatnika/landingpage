"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="block md:hidden ">
      <div
        className="flex flex-col items-center gap-[4.5px] cursor-pointer "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-[#a8ca41] rounded-sm origin-left ${
            isOpen ? "rotate-45 transition-all ease-linear duration-200" : ""
          } `}
        />
        <div
          className={`w-6 h-1 bg-[#a8ca41] rounded-sm ${
            isOpen ? "opacity-0 transition-all ease-linear duration-200" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-[#a8ca41] rounded-sm origin-left ${
            isOpen ? "-rotate-45 transition-all ease-linear duration-200" : ""
          } `}
        />
      </div>

      <div
        className={`${
          isOpen
            ? "fixed z-20 top-[80px] left-0 transition-all duration-200 ease-linear bg-white border-t-2 border-t-[#d2ee7f] w-full h-[35vh] "
            : " top-0 opacity-0 "
        } `}
      >
        {isOpen && (
          <div
            className={`${
              isOpen ? "opacity-100 " : "opacity-0 "
            } transition-all uppercase duration-500 ease-linear flex flex-col font-semibold gap-7 items-start px-4 justify-center text-md  text-white h-full`}
          >
            <Link
              className={`${
                pathname === "/" ? "text-[#a8ca41]" : "text-[#d2ee7f]/80"
              }`}
              onClick={() => setIsOpen(false)}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${
                pathname === "/about" ? "text-[#a8ca41]" : "text-[#d2ee7f]/80"
              }`}
              onClick={() => setIsOpen(false)}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`${
                pathname === "/services"
                  ? "text-[#a8ca41]"
                  : "text-[#d2ee7f]/80"
              }`}
              onClick={() => setIsOpen(false)}
              href="/services"
            >
              Services
            </Link>
            <Link
              className={`${
                pathname === "/contact" ? "text-[#a8ca41]" : "text-[#d2ee7f]/80"
              }`}
              onClick={() => setIsOpen(false)}
              href="/contact"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
