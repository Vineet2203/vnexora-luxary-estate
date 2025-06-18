'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from "react-icons/fi";
import { Playfair_Display, Poppins } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

// Counter Component
type CounterProps = {
  target: string;
  duration?: number;
  suffix?: string;
};

const Counter = ({ target, duration = 2000, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>{count}{suffix}</span>
  );
};

const AboutUs = () => {
  return (
    <section className="relative bg-[#f7f5f1] py-20 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        
        {/* Left Column */}
        <div className="relative z-10">
          <h2 className={`${playfair.className} text-4xl font-bold text-[#432c15] mb-6`}>
            About Us
          </h2>
          <p className={`${poppins.className} text-base text-gray-700 leading-relaxed mb-4`}>
            At VNEXORA Luxury Estate Private Limited, we redefine hospitality by empowering hotel and resort owners with bespoke operational and strategic solutions. Rooted in excellence and driven by innovation, VNEXORA partners with visionary property owners to unlock the full potential of their assets. Whether through long-term leasing, management contracts, or curated brand alliances, our approach is built on trust, transparency, and transformative growth.
          </p>
          <p className={`${poppins.className} text-base text-gray-700 leading-relaxed mb-6`}>
            With deep expertise in property management, marketing, design consultation, and performance analytics, we collaborate with hospitality leaders across India to craft legacies in luxury hospitality.
          </p>
          <div className="flex gap-4">
            <Link href="/about">
              <span className="flex items-center justify-center gap-1 bg-[#705C2E] text-white font-medium px-8 py-3 rounded-full shadow-md hover:bg-[#926d3f] transition cursor-pointer">
                Learn More
                <FiArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <a
              className="flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border border-gray-300 px-8 py-3 rounded-full shadow-md hover:shadow-lg transition inline-block"
              href="/Documents/Brochure.pdf"
              download
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Right Column - Stats with Counter Effect */}
        <div className="grid grid-cols-2 gap-6 text-center z-10">
          <div>
            <h3 className={`${playfair.className} text-3xl font-bold text-[#705C2E]`}>
              <Counter target="350" suffix="+" />
            </h3>
            <p className={`${poppins.className} text-gray-700 mt-1`}>Keys</p>
          </div>
          <div>
            <h3 className={`${playfair.className} text-3xl font-bold text-[#705C2E]`}>
              <Counter target="15" suffix="+ " />
            </h3>
            <p className={`${poppins.className} text-gray-700 mt-1`}>Years Industry Experience</p>
          </div>
          <div>
            <h3 className={`${playfair.className} text-3xl font-bold text-[#705C2E]`}>
              <Counter target="56" suffix="+" />
            </h3>
            <p className={`${poppins.className} text-gray-700 mt-1`}>Brands</p>
          </div>
          <div>
            <h3 className={`${playfair.className} text-3xl font-bold text-[#705C2E]`}>
              <Counter target="15" suffix="+" />
            </h3>
            <p className={`${poppins.className} text-gray-700 mt-1`}>Hotels Pipeline</p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 z-0" />
      </div>

      {/* Rotating Logo Circle at Bottom Center */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-[100px] h-[100px] rounded-full border border-gray-300 flex items-center justify-center bg-[rgba(62,24,6,0.97)] shadow-lg">
          <Image
            src="/Images/Logo.png"
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
