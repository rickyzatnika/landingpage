import React from 'react'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='relative flex w-full h-24 bg-red-500 text-white items-center justify-between gap-2 px-4 md:px-12 xl:px-16 2xl:px-20'>
      <h1>Logo</h1>
      <div className='hidden md:flex items-center justify-center gap-8 text-sm'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <MobileMenu/>
    </div>
  )
}

export default Navbar