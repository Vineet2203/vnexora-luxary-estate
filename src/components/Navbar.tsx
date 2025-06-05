'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-xl backdrop-blur-xl bg-white/10 border-b border-white/10"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        WebkitBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Decorative gloss layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/40 blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-3">
            <Image
              src="/Images/logo.png"
              alt="Vnexora Logo"
              width={50}
              height={50}
              className="object-contain bg-transparent"
            />
            <span
              className="font-bold text-2xl text-[#F5E9D3]"
              style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
            >
              VNEXORA
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium text-[#F5E9D3]">
          <Link href="/" className="hover:text-pink-300 transition duration-300">Home</Link>
          <Link href="#about" className="hover:text-pink-300 transition duration-300">About</Link>
          <Link href="#services" className="hover:text-pink-300 transition duration-300">Services</Link>
          <Link href="#gallery" className="hover:text-pink-300 transition duration-300">Gallery</Link>
          <Link href="#contact" className="hover:text-pink-300 transition duration-300">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6 text-[#F5E9D3]" /> : <Menu className="h-6 w-6 text-[#F5E9D3]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md shadow-md px-4 pb-4 text-[#F5E9D3] z-10">
          <ul className="space-y-2 pt-2">
            <li><a href="#about" className="hover:text-pink-300">About</a></li>
            <li><a href="#services" className="hover:text-pink-300">Services</a></li>
            <li><a href="#clients" className="hover:text-pink-300">Clients</a></li>
            <li><a href="#gallery" className="hover:text-pink-300">Our Spaces</a></li>
            <li><a href="#contact" className="hover:text-pink-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
