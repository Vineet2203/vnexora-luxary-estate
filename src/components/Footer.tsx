'use client';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#FDF7F0] text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">

        {/* Logo & Policies */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#705C2E]">VNEXORA</h3>
          <p className="text-sm">&copy; 2025 VNEXORA Luxury Estate Pvt. Ltd.</p>
          <div className="space-y-2">
            <a href="#" className="text-sm hover:underline">Terms & Conditions</a>
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a href="https://www.linkedin.com/company/vnexora" className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition"
            target="_blank" 
            rel="noopener noreferrer">
              <FaLinkedinIn size={16} />
            </a>
            <a href="https://www.youtube.com/@VNEXORALUXURYESTATE" className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition"  target="_blank" 
  rel="noopener noreferrer">
              <FaYoutube size={16} />
            </a>
            <a href="https://www.facebook.com/people/Vnexora/61577263220491/" className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition"  target="_blank" 
  rel="noopener noreferrer">
                <FaFacebook size={16} />
            </a>
            <a href="https://www.instagram.com/vnexora/" className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition"  target="_blank" 
  rel="noopener noreferrer">
                <FaInstagram size={16} />
            </a>


          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-4 text-[#705C2E]">About</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Introduction</a></li>
            <li><a href="#" className="hover:underline">Mission/Vision</a></li>
            <li><a href="#" className="hover:underline">Milestones</a></li>
            <li><a href="#" className="hover:underline">Awards</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-[#705C2E]">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Hotel Management</a></li>
            <li><a href="#" className="hover:underline">Pre-Opening</a></li>
            <li><a href="#" className="hover:underline">Asset Management</a></li>
            <li><a href="#" className="hover:underline">Brand Partnerships</a></li>
          </ul>
        </div>

        {/* Portfolio */}
        <div>
          <h4 className="font-semibold mb-4 text-[#705C2E]">Portfolio</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Luxury Hotels</a></li>
            <li><a href="#" className="hover:underline">Resorts</a></li>
            <li><a href="#" className="hover:underline">Urban Properties</a></li>
            <li><a href="#" className="hover:underline">Boutique Hotels</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-[#705C2E]">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>VNEXORA Luxury Estate Pvt. Ltd.</li>
            <li>123 Luxury Lane, Mumbai, India</li>
            <li>+91 98765 43210</li>
            <li><a href="mailto:info@vnexora.com" className="hover:underline">info@vnexora.com</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        Designed & Developed by VNEXORA Tech Team.
      </div>
    </footer>
  );
};

export default Footer;
