'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Listen to scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // New style: FULLY TRANSPARENT at top, GLASSY GRADIENT on scroll
  const navbarStyle = {
    background: isScrolled
      ? 'linear-gradient(90deg, rgba(106, 74, 38, 0.9) 0%,rgba(205, 140, 59, 0.63) 25%, rgba(128, 111, 64, 0.85) 50%, rgba(220, 180, 80, 0.73) 75%, rgba(106, 74, 38, 0.9))'
      : 'transparent',
    WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
    backdropFilter: isScrolled ? 'blur(16px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
    boxShadow: isScrolled ? '0 8px 20px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'all 0.4s ease'
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full h-20 z-50"
      style={navbarStyle}
    >
      {/* Decorative gloss layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {isScrolled && (
          <div className="absolute top-0 left-0 w-full h-[2px] bg-white/40 blur-sm" />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative h-20">
  
        {/* Left Links */}
        <div className="hidden md:flex gap-8 items-center font-medium text-[#F5E9D3]">
          <Link href="/" className="hover:text-yellow-400 transition duration-300"><b>Home</b></Link>
          <Link href="/about" className="hover:text-yellow-400 transition duration-300"><b>Our Story</b></Link>
          <Link href="/#services" className="hover:text-yellow-400 transition duration-300"><b>Services</b></Link>
          <Link href="/about#team" className="hover:text-yellow-400 transition duration-300"><b>Team</b></Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <Image
                src="/Images/vnlogo.png"
                alt="Vnexora Logo"
                width={85}
                height={79}
                className="object-contain bg-transparent"
                unoptimized
              />
            </div>
          </Link>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex gap-8 items-center font-medium text-[#F5E9D3]">
          <Link href="/#gallery" className="hover:text-yellow-400 transition duration-300"><b>Gallery</b></Link>
          <Link href="/#OurAllies" className="hover:text-yellow-400 transition duration-300"><b>Our Allies</b></Link>
          <Link href="/career" className="hover:text-yellow-400 transition duration-300"><b>Careers</b></Link>
          
          <Link href="/contact" className="hover:text-yellow-400 transition duration-300"><b>Contact</b></Link>
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
            <li><a href="/about" className="hover:text-red-300">About</a></li>
            <li><a href="#services" className="hover:text-red-300">Services</a></li>
            <li><a href="/career" className="hover:text-red-300">Career</a></li>
            <li><a href="#gallery" className="hover:text-red-300">Gallery</a></li>
            <li><a href="#contact" className="hover:text-red-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;