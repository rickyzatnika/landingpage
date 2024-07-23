"use client"

import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

const Navbar = () => {


  const pathname = usePathname();

  return (
    <div className='fixed z-20 flex w-full h-20 bg-red-600 text-white items-center justify-between gap-2 px-4 md:px-12 xl:px-16 2xl:px-20'>
      <Link href="/" className='text-lg'>Logo</Link>
      <div className='hidden md:flex items-center justify-center gap-8 text-sm'>
        <Link className={`${pathname === "/" ? "text-yellow-500 font-semibold" : "text-white"}`} href="/">Home</Link>
        <Link className={`${pathname === "/about" ? "text-yellow-500 font-semibold" : "text-white" }`} href="/about">About</Link>
        <Link className={`${pathname === "/services" ? "text-yellow-500 font-semibold" : "text-white" }`} href="/services">Services</Link>
        <Link className={`${pathname === "/contact" ? "text-yellow-500 font-semibold" : "text-white" }`} href="/contact">Contact</Link>
      </div>
      <MobileMenu/>
    </div>
  )
}

export default Navbar