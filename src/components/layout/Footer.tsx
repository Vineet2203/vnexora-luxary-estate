'use client';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#fdf6e9] text-black py-14 px-6 md:px-20 font-serif" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-10 text-left">

        {/* Logo & Policies Section */}
        <div className="col-span-2 space-y-4">
          <h3 className="text-3xl font-bold text-[#705C2E]">VNEXORA</h3>
          <p className="text-sm">&copy; 2025 VNEXORA Luxury Estate Pvt. Ltd.</p>
          <div className="space-y-2">
            <a href="#" className="block text-sm hover:underline hover:decoration-[#705C2E] hover:decoration-2">Terms & Conditions</a>
            <a href="#" className="block text-sm hover:underline hover:decoration-[#705C2E] hover:decoration-2">Privacy Policy</a>
          </div>
          <div className="flex space-x-3 pt-4">
            <a href="https://www.linkedin.com/company/vnexora" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition shadow-md hover:shadow-lg">
              <FaLinkedinIn size={16} />
            </a>
            <a href="https://www.youtube.com/@VNEXORALUXURYESTATE" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition shadow-md hover:shadow-lg">
              <FaYoutube size={16} />
            </a>
            <a href="https://www.facebook.com/people/Vnexora/61577263220491/" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition shadow-md hover:shadow-lg">
              <FaFacebook size={16} />
            </a>
            <a href="https://www.instagram.com/vnexora/" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-gray-400 rounded-full hover:bg-[#705C2E] hover:text-white transition shadow-md hover:shadow-lg">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h4 className="font-semibold mb-4 text-[#705C2E] text-lg">ABOUT</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">About</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Introduction</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Mission/Vision</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Milestones</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Awards and Recognition</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="font-semibold mb-4 text-[#705C2E] text-lg">SERVICES</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Strategic Consulting</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Operational Excellence</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Hotel Management</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Marketing Plan</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Finance & Accounting</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Brand Development</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Property Management</a></li>
          </ul>
        </div>

        {/* Portfolio Section */}
        <div>
          <h4 className="font-semibold mb-4 text-[#705C2E] text-lg">PORTFOLIO</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Luxury Hotels</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Resorts</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Urban Properties</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">Boutique Hotels</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold mb-4 text-[#705C2E] text-lg">CONTACT</h4>
          <ul className="space-y-2 text-sm">
            <li>VNEXORA Luxury Estate Pvt. Ltd.</li>
            <li>5th Floor, CDC Building, AIC, BHU Campus, Varanasi-221005</li>
            <li>+91 7980829403</li>
            <li>
              <a href="mailto:contact@vnexora.com" className="hover:underline hover:decoration-[#705C2E] hover:decoration-2">
                contact@vnexora.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-20 border-t-2 border-[#705C2E] pt-6 text-center text-sm text-[#705C2E]">
        Designed & Developed by VNEXORA Tech Team.
      </div>
    </footer>
  );
};

export default Footer;
