'use client';

import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    //<nav className="fixed top-0 left-0 w-full z-50 shadow-lg 
    // backdrop-blur-md bg-[rgba(240, 181, 184, 0.9)] 
    // text-white" style={{ background: 'linear-gradient(90deg, rgba(220, 154, 47, 0.85) 0%, rgba(73, 4, 4, 0.98) 100%)', 
    // WebkitBackdropFilter: 'blur(12px)' }}>
    // className="bg-gradient-to-r from-darkBrown to-burntGold text-warmBeige"
    <nav
        className="text-[#F5E9D3] fixed top-0 left-0 w-full z-50 shadow-2xl backdrop-blur-lg bg-white/20"
        style={{
        background: 'linear-gradient(90deg,rgba(59, 31, 13, 1) 0%,rgba(102, 57, 18, 0.8) 50%,rgb(114, 97, 35) 100%);',
        WebkitBackdropFilter: 'blur(20px)',
        backdropFilter: 'blur(20px)',
        borderBottom: '2px solid rgba(255, 255, 255, 0.01)',
        }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
        <div className="flex items-center space-x-3">
            <Image
            src ="/Images/logo.png"
            alt ="Vnexora Logo"
            width={50}
            height={50}
            className="object-contain"
            />
            <span className="font-bold text-bronzeGold text-2xl"
                style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>
                    VNEXORA
            </span>
        </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-warmBeige font-medium">
          <Link href="/" className="hover:text-darkPink transition-colors duration-300">Home</Link>
          <Link href="#about" className="hover:text-bronzeGold transition-colors duration-300">About</Link>
          <Link href="#services" className="hover:text-bronzeGold transition-colors duration-300">Services</Link>
          <Link href="#gallery" className="hover:text-bronzeGold transition-colors duration-300">Gallery</Link>
          <Link href="#contact" className="hover:text-bronzeGold transition-colors duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <li><a href="#about" className="hover:text-[#970747]">About</a></li>
          <li><a href="#services" className="hover:text-darkPink">Services</a></li>
          <li><a href="#clients" className="hover:text-yellow-400">Clients</a></li>
          <li><a href="#gallery" className="hover:text-yellow-400">Our Spaces</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
