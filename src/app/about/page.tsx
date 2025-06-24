// src/app/about/page.tsx
import React from "react";

import Card from '@/components/common/Card';

const AboutPage = () => {
  return (
    <main className="w-full mx-auto space-y-16 px-0 pb-10 relative bg-[#f7f5f1]">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute w-full h-full object-cover"
        >
      <source src="/videos/girl_hotel.mp4" type="video/mp4" />
      <source src="/videos/pool_hotel.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute text-center text-[#f5e8d7] z-10">
    <h1 className="text-4xl md:text-5xl font-extrabold">ABOUT VNEXORA</h1>
    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
      Crafting Tailored Hospitality Solutions with Vision, Innovation & Expertise.
    </p>
  </div>
</section>
      
      {/* What We Do */}
      <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-[#432c15] text-center mt-15">Who We Are</h2>
      <p className="text-lg text-gray-600 text-justify">
        Founded in April 2025 by IIT BHU alumnus Vineet Mishra, VNEXORA Luxury Estate is a Varanasi-based premium hospitality management and consulting firm. We specialize in transforming hotels and resorts into profitable, branded destinations through strategic partnerships and comprehensive services. From daily operations and revenue optimization to branding, HR, and guest experience innovation, we deliver tailored solutions that elevate every property we touch. Backed by deep industry expertise and global partnerships—from luxury giants to boutique brands—we empower property owners to unlock their full potential while crafting unforgettable guest journeys. At VNEXORA, we don’t just manage hotels—we redefine hospitality excellence.
      </p>
      </section>

      {/* Founder Section */}
      <h2 className="text-3xl font-bold text-[#432c15] mb-4 text-center">Meet Our Founder</h2>
      <section className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-2/3">
          <p className="text-lg text-gray-600 text-base leading-relaxed mb-4 mt-10 text-justify ">
            Mr. Vineet Mishra, the visionary behind Vnexora Luxury Estate Private Limited, brings with him over 15 years of rich experience in the hospitality and real estate industry. As an alumnus of the prestigious <strong>IIT (B.H.U), Varanasi</strong>, he combines the analytical rigor and technical acumen of an engineer with the creative foresight of an industry leader.
          </p>
          <p className="text-lg text-gray-600 text-base leading-relaxed mb-4 mt-10 text-justify">
            Born and raised in Varanasi, Mr. Mishra’s deep-rooted understanding of both traditional values and modern business dynamics uniquely positions him to bridge global standards with local relevance. His journey began with a passion for redefining luxury hospitality, not just through aesthetics, but through data-driven solutions and sustainable growth strategies.
          </p>
          <p className="text-lg text-gray-600 text-base leading-relaxed mb-4 mt-10 text-justify">
            Under his leadership, Vnexora has emerged as a disruptive force — offering a new paradigm in property management, hotel operations, and strategic consulting. His goal is to transform the hospitality landscape PAN India by empowering clients through innovation, strategic alliances with premium brands, and tech-driven operations.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-end">
          <Card
            name="Mr. Vineet Mishra"
            role="Founder & CEO"
            image="/Images/founder.jpg"
            stake="Major Stakeholder"
            email="founder@vnexora.com"
            linkedin="https://www.linkedin.com/in/vineet-mishra-98151a6a/"
            instagram="https://www.instagram.com/vineet_iitbhu?igsh=ZnN2ZWRsOHRkd2to"
            size="large"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-[#432c15] text-center">Our Diverse Team</h2>
      <p className="text-lg text-gray-600 text-base text-justify text-center">
        Our team blends tradition and innovation—comprising architects, interior designers, and tech professionals. 
      </p>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-[#432c15] text-center">Our Vision</h2>
      <p className="ttext-justify text-lg text-gray-600 text-base">
        To be India’s most forward-thinking partner in luxury hospitality—focused on long-term sustainability, 
        operational excellence, and unparalleled guest experiences.
      </p>
      <p className="text-lg text-gray-600 text-base text-justify">
        <strong>We’re not just building hotels. We’re building enduring legacies.</strong>
      </p>
      </section>
      
    </main>
  );
};

export default AboutPage;
