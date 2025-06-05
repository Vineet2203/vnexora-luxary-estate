'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    
      {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[80vw] h-[80vh] max-w-5xl max-h-[80vh]">
          <Image
            src="/Images/hero-bg.png"
            alt="Vnexora Background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* Transparent Shadow Layer */}
      <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />


      {/* Centered Text Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#F5E9D3] drop-shadow-lg">
          LET'S MAKE YOUR HOSPITALITY VISION A REALITY
        </h1>
        <p className="text-[#F5E9D3] text-lg md:text-2xl mt-4 italic drop-shadow-sm">
          Strategic Hospitality Solutions
        </p>
        <p className="text-[#F5E9D3] text-lg md:text-xl mt-4 max-w-2xl">
          At Vnexora, we specialize in transforming your hospitality dreams into reality. Our expert team is dedicated to providing strategic solutions that elevate your business to new heights.</p>
        <Link href="#services">
            <button
             className="mt-6 px-6 py-3 font-semibold rounded-full shadow-md transition-all duration-300 gradient-hover-btn text-black" >
            Explore Our Service
            </button>
        </Link>
      </div>
    </section>
    
  );
}
