'use client';
import React from "react";
import Link from "next/link";

export default function HeroWithTricolorOverlay() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center font-serif">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="auto"
        
      >
        <source src="/Videos/Heroanim.mp4" type="video/mp4" />
      </video>

      {/* Tricolor gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF9933] via-white to-[#138808] mix-blend-screen opacity-80 animate-slow-wave"></div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#F5E9D3] drop-shadow-lg">
            Celebrating the Spirit of India with Vnexora
        </h1>
        <Link href="#services">
          <button
            className="mt-6 px-6 py-3 font-semibold rounded-full shadow-md transition-all duration-300 gradient-hover-btn text-black">
            Explore Our Service
          </button>
        </Link>
      </div>
      {/* Custom animation */}
      <style jsx>{`
        @keyframes slow-wave {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
        }
        .animate-slow-wave {
        background-size: 200% 200%;
        animation: slow-wave 12s ease-in-out infinite;
        }
    `}</style>
    </section>
  );
}