'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center text-warmBeige"
      id="hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/hero-bg.jpg" // You can change this image later
          alt="Luxury Background"
          fill
          className="object-cover brightness-75"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm -z-10" />

      {/* Hero Content */}
      <div className="space-y-6 px-4">
        <h1 className="text-4xl md:text-6xl font-heading text-bronzeGold drop-shadow-lg">
          Vnexora Luxury Estate
        </h1>
        <p className="text-xl md:text-2xl font-body text-warmBeige drop-shadow-md">
          Strategic Hospitality Solutions
        </p>
        <Link
          href="#services"
          className="inline-block mt-4 bg-bronzeGold text-darkBrown font-semibold px-6 py-3 rounded-full hover:bg-burntGold transition-all duration-300 shadow-lg"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default Hero;
