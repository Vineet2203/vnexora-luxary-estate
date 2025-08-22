'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import AppointmentModel from '../AppointmentModel';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openModalType, setOpenModalType] = useState<'video' | 'office' | 'site' | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setIsDropdownOpen(false);
        setIsQuickLinksOpen(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    background: isScrolled
      ? 'linear-gradient(90deg, rgba(106, 74, 38, 0.9) 0%,rgba(205, 140, 59, 0.63) 25%, rgba(128, 111, 64, 0.85) 50%, rgba(220, 180, 80, 0.73) 75%, rgba(106, 74, 38, 0.9))'
      : 'transparent',
    WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
    backdropFilter: isScrolled ? 'blur(16px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
    boxShadow: isScrolled ? '0 8px 20px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'all 0.4s ease',
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50" style={navbarStyle}>
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
          <Link href="/services" className="hover:text-yellow-400 transition duration-300"><b>Services</b></Link>
          <Link href="/wedding" className="hover:text-yellow-400 transition duration-300"><b>Wedding</b></Link>
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
              />
            </div>
          </Link>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex gap-8 items-center font-medium text-[#F5E9D3]">
          <Link href="/hotels" className="hover:text-yellow-400 transition duration-300"><b>Our Hotels</b></Link>
          <Link href="/contact" className="hover:text-yellow-400 transition duration-300"><b>Contact</b></Link>

          {/* Quick Links Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              className="hover:text-yellow-400 transition duration-300"
            >
              <b>Quick Links</b>
            </button>
            {isQuickLinksOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/30 text-black rounded shadow-md z-50">
                <ul className="flex flex-col text-sm">
                  <li>
                    <Link
                      href="/career"
                      className="block px-4 py-2 hover:bg-white/50"
                      onClick={() => setIsQuickLinksOpen(false)}
                    >
                     Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partnerWithUs"
                      className="block px-4 py-2 hover:bg-white/50"
                      onClick={() => setIsQuickLinksOpen(false)}
                    >
                      Partner With Us
                    </Link>
                  </li>
                  {<li>
                    <Link
                      href="/blogs"
                      className="block px-4 py-2 hover:bg-white/50"
                      onClick={() => setIsQuickLinksOpen(false)}
                    >
                      Blogs
                    </Link>
                  </li> }
                  <li>
                    <Link
                      href="/OurAllies"
                      className="block px-4 py-2 hover:bg-white/50"
                      onClick={() => setIsQuickLinksOpen(false)}
                    >
                      Our Allies
                    </Link>
                  </li>
                  { <li>
                    <Link
                      href="/gallery"
                      className="block px-4 py-2 hover:bg-white/50"
                      onClick={() => setIsQuickLinksOpen(false)}
                    >
                      Gallery
                    </Link>
                  </li> }
                  <li>
                    <Link
                      href="/stayUpdated"
                      className="block px-4 py-2 hover:bg-white/50"
                      onClick={() => setIsQuickLinksOpen(false)}
                    >
                      Stay Updated With Us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Appointment Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-yellow-400 transition duration-300 cursor-pointer"
            >
              <b>Book Appointment</b>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/30 text-black rounded shadow-md z-50">
                <ul className="flex flex-col text-sm">
                  <li>
                    <button
                      onClick={() => { setOpenModalType('video'); setIsDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-white/50 cursor-pointer"
                    >
                      Schedule Video Call
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { setOpenModalType('office'); setIsDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-white/50 cursor-pointer"
                    >
                      Office Visit
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { setOpenModalType('site'); setIsDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-white/50 cursor-pointer"
                    >
                      Site Visit
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
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
        <div className="md:hidden backdrop-blur-lg shadow-md px-4 pb-4 text-[#F5E9D3] z-40"
          style={{
            background: 'linear-gradient(90deg, rgba(106, 74, 38, 0.9) 0%, rgba(205, 140, 59, 0.63) 25%, rgba(128, 111, 64, 0.85) 50%, rgba(220, 180, 80, 0.73) 75%, rgba(106, 74, 38, 0.9))',
            WebkitBackdropFilter: 'blur(16px)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          }}>
          <ul className="space-y-2 pt-2">
            <li><Link href="/about" className="hover:text-red-300" onClick={() => setIsOpen(false)}>Our Story</Link></li>
            <li><Link href="/services" className="hover:text-red-300" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/weding" className="hover:text-red-300" onClick={() => setIsOpen(false)}>Wedding</Link></li>
            {/* <li><Link href="/blogs" className="hover:text-red-300" onClick={() => setIsOpen(false)}>Blogs</Link></li> */}
            <li><Link href="/OurAllies" className="hover:text-red-300" onClick={() => setIsOpen(false)}>Our Allies</Link></li>
            <li><Link href="/career" className="hover:text-red-300" onClick={() => setIsOpen(false)}>Careers</Link></li>
            <li><Link href="/contact" className="hover:text-red-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link href="/partnerWithUs" className="hover:text-red-300" onClick={() => setIsOpen(false)}>Partner With Us</Link></li>
            {/* <li><Link href="/factSheet" className="hover:text-red-300" onClick={() => setIsOpen(false)}>Fact Sheet</Link></li> */}
            <li><Link href="/stayUpdated" className="hover:text-red-300" onClick={() => setIsOpen(false)}>Stay Updated With Us</Link></li>
          </ul>
        </div>
      )}

      {/* Appointment Modal */}
      {openModalType && (
        <AppointmentModel
          onClose={() => setOpenModalType(null)}
          type={openModalType}
        />
      )}
    </nav>
  );
};

export default Navbar;
