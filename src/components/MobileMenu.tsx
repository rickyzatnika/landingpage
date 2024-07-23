"use client"

import Link from "next/link";
import { useState } from "react"

const MobileMenu = () => {


    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden ">
      <div className="flex flex-col items-center gap-[4.5px] cursor-pointer " onClick={() => setIsOpen(prev=>!prev)}>
          <div className={`w-6 h-1 bg-white rounded-sm origin-left ${isOpen ? "rotate-45 transition-all ease-linear duration-200" : ""} `}/>
          <div className={`w-6 h-1 bg-white rounded-sm ${isOpen ? "opacity-0 transition-all ease-linear duration-200" : ""}`}/>
          <div className={`w-6 h-1 bg-white rounded-sm origin-left ${isOpen ? "-rotate-45 transition-all ease-linear duration-200" : ""} `}/>
      </div>

     
        <div className={`${isOpen ? "fixed z-20 top-[80px] left-0 transition-all duration-300 ease-linear bg-white w-full h-[calc(100vh-80px)] " : "left-[-100%] opacity-0"} `}>
          {isOpen && (
           <div onClick={() => setIsOpen(false)} className="flex flex-col font-semibold gap-12 items-center justify-center text-md  text-red-600 h-full">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
           </div>
          )}
      </div>
   
    
    </div>
  )
}

export default MobileMenu