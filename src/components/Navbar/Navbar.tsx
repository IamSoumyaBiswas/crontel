"use client"
import React from 'react'
import Logo from './Logo';
import NavMenu from './NavMenu';
import { BiMenuAltRight } from 'react-icons/bi';



const Navbar = () => {
    return (
        <header className='flex overflow-hidden justify-between max-w-screen-xl mx-auto border shadow-lg  navbar px-6 py-4 rounded-lg '>
            <Logo/>
            <nav className='flex'>
            <NavMenu/>
            </nav>
            <BiMenuAltRight className='lg:hidden md:hidden h-8 w-8 '/>
        </header>
    )
}

export default Navbar;
