'use client';

import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="relative bg-[#f7f5f1] py-20 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left Column */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-[#a17e4d] mb-6">About Us</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            At VNEXORA Luxury Estate Private Limited, we redefine hospitality by empowering hotel and resort owners with bespoke operational and strategic solutions. Rooted in excellence and driven by innovation, VNEXORA partners with visionary property owners to unlock the full potential of their assets. Whether through long-term leasing, management contracts, or curated brand alliances, our approach is built on trust, transparency, and transformative growth.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            With deep expertise in property management, marketing, design consultation, and performance analytics, we collaborate with hospitality leaders across India to craft legacies in luxury hospitality.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#a17e4d] text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-[#926d3f] transition">
              Learn More
            </button>
            <button className="bg-white text-[#1a1a1a] border border-gray-300 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-6 text-center z-10">
          <div>
            <h3 className="text-3xl font-bold text-[#705C2E]">350+</h3>
            <p className="text-gray-700 mt-1">Keys</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#705C2E]">15+ Years</h3>
            <p className="text-gray-700 mt-1">Industry Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#705C2E]">56+</h3>
            <p className="text-gray-700 mt-1">Brands</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#705C2E]">15+</h3>
            <p className="text-gray-700 mt-1">Hotels Pipeline</p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 z-0" />
      </div>

      {/* Rotating Logo Circle at Bottom Center */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-25 h-25 rounded-full border border-gray-300 flex items-center justify-center animate-spin-slow bg-rgba(84, 31, 21, 0.91) shadow-lg">
          {/* Replace with your logo or circular text */}
          <Image
            src="/Images/logo.png" // replace with your logo path
            alt="VNEXORA Logo"
            width={70}
            height={65}
            
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
