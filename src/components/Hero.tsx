'use client';
//import { Video } from 'lucide-react';
//import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    
      {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full h-full ">
          <video className="w-full h-full object-cover rounded-lg shadow-lg"
            preload="auto"
            src="/Videos/Heroanim.mp4"
            //className="object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </div>
      {/* Transparent Shadow Layer */}
      <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" />


      {/* Centered Text Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#F5E9D3] drop-shadow-lg">
          LET&apos;S MAKE YOUR HOSPITALITY VISION A REALITY
        </h1>
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
