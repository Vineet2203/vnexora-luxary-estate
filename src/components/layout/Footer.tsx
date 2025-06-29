'use client';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#fdf6e9] text-black pt-14 px-6 md:px-20 font-serif" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-left">

        {/* VNEXORA Branding */}
        <div className="space-y-4 md:col-span-1">
          <h3 className="text-3xl font-bold text-[#432c15]">VNEXORA</h3>
          <p className="text-sm">&copy; 2025 VNEXORA Luxury Estate Pvt. Ltd.</p>
          <div className="space-y-2">
            <a href="#" className="block text-sm  hover:decoration-[#432c15]">Terms & Conditions</a>
            <a href="#" className="block text-sm  hover:decoration[#432c15]">Privacy Policy</a>
          </div>
          <div className="flex space-x-3 pt-4">
            <a href="https://www.linkedin.com/company/vnexora" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition">
              <FaLinkedinIn size={16} />
            </a>
            <a href="https://www.youtube.com/@VNEXORALUXURYESTATE" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition">
              <FaYoutube size={16} />
            </a>
            <a href="https://www.facebook.com/people/Vnexora/61577263220491/" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition">
              <FaFacebook size={16} />
            </a>
            <a href="https://www.instagram.com/vnexora/" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-4 text-[#432c15] text-lg">ABOUT</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about">About Us</a></li>
            <li><a href="/about#who">Introduction</a></li>
            <li><a href="/about#philosophy">Our Mission </a></li>
            <li><a href="#">Milestones</a></li>
            <li><a href="#">Awards and Recognition</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-[#432c15] text-lg">SERVICES</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services">Strategic Consulting</a></li>
            <li><a href="#services">Operational Excellence</a></li>
            <li><a href="#services">Hotel Management</a></li>
            <li><a href="#services">Marketing Plan</a></li>
            <li><a href="#services">Finance & Accounting</a></li>
            <li><a href="#services">Brand Development</a></li>
            <li><a href="#services">Property Management</a></li>
          </ul>
        </div>

        {/* Portfolio */}
        <div>
          <h4 className="font-semibold mb-4 text-[#432c15] text-lg">PORTFOLIO</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Luxury Hotels</a></li>
            <li><a href="#">Resorts</a></li>
            <li><a href="#">Urban Properties</a></li>
            <li><a href="#">Boutique Hotels</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-[#432c15] text-lg">CONTACT</h4>
          <ul className="space-y-2 text-sm">
            <li>VNEXORA Luxury Estate Pvt. Ltd.</li>
            <li>5th Floor, CDC Building,<br /> AIC, BHU Campus,<br /> Varanasi - 221005</li>
            <li>+91 7980829403</li>
            <li>
              <a href="mailto:connect@vnexora.com" className=" hover:decoration-[#705C2E]">
                connect@vnexora.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-17 border-t border-[#705C2E] pt-8 text-center text-sm text-[#705C2E]">
        Designed & Developed by VNEXORA Tech Team.
      </div>
    </footer>
  );
};

export default Footer;
