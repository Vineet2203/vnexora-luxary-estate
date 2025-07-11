'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Card from '@/components/common/Card';
import { Poppins, Playfair_Display } from 'next/font/google';

type TabKey = "vision" | "mission" | "purpose";

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

const AboutPage = () => {
  //const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'purpose'>('vision');
  const tabOptions: TabKey[] = ["vision", "mission", "purpose"];
  const [activeTab, setActiveTab] = useState<TabKey>("vision");
  const teamMembers = [
    {
      name: "Deepak Mishra",
      role: "Brand Delegate",
      image: "/Images/deepak.jpg",
      linkedin: "https://www.linkedin.com/in/deepak-mishra-6b88318/",
    },
    {
      name: "Pooja Tripathi",
      role: "Co-Founder & COO",
      image: "/Images/pooja.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-akshat-9646891b3/",
    },
    
    {
      name: "Shachi Mishra",
      role: "Co-Founder",
      image: "/Images/sachi.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-akshat-9646891b3/",
    },
    {
      name: "Shib Roy",
      role: "Principle Architect Consultant",
      image: "/Images/shib.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-akshat-9646891b3/",
    },
    {
      name: "Akansha Roy",
      role: "Business Executive",
      image: "/Images/akanscha.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-akshat-9646891b3/",
    },

     {
       name: "Kumar Akshat",
       role: "Tech",
       image: "/Images/akshat.jpg",
       linkedin: "https://www.linkedin.com/in/kumar-akshat-9646891b3/",  
      },
     {
       name: "Ashu Singh",
       role: "Tech",
       image: "/Images/ashu.jpg",
       linkedin: "https://www.linkedin.com/in/ashu-singh-a49307262/",
     },
    {
      name: "Ankush Rai",
      role: "Architect & Project Planner",
      image: "/Images/ankush.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-akshat-9646891b3/",
    },
    {
      name: "Shikha Mishra",
      role: "PR & Media Head",
      image: "/Images/shikha.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-akshat-9646891b3/",
    },
        {
      name: "Aparajita Bose",
      role: "Astrologer & Vastu",
      image: "/Images/aparajita.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-akshat-9646891b3/",
    },
    {
      name: "Devesh Mishra",
      role: "Chartered Accountant & Insolvency Professional",
      image: "/Images/devesh.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-akshat-9646891b3/",
    },
    // {
    //   name: "Monica Sharma",
    //   role: "Architect, Interior Designer & Project Planner Consultant",
    //   image: "/Images/team/isha.jpg",
    //   linkedin: "https://www.linkedin.com/in/isha-dutta",
    //   instagram: "https://www.instagram.com/isha.hosp",
    // },
    // {
    //   name: "Sneha Giri",
    //   role: "Legal Head Consultant",
    //   image: "/Images/team/rohit.jpg",
    //   linkedin: "https://www.linkedin.com/in/rohit-saini",
    //   instagram: "https://www.instagram.com/rohit.digital",
    // },
    // {
    //   name: "Namira",
    //   role: "Sales and Event Manager",
    //   image: "/Images/team/rohit.jpg",
    //   linkedin: "https://www.linkedin.com/in/rohit-saini",
    //   instagram: "https://www.instagram.com/rohit.digital",
    // },
    
    // {
    //   name: "Rakesh Singh",
    //   role: "Restaurant & Bar Setup Head",
    //   image: "/Images/team/rohit.jpg",
    //   linkedin: "https://www.linkedin.com/in/rohit-saini",
    //   instagram: "https://www.instagram.com/rohit.digital",
    // },
    {
      name: "Shyam Lal Singh",
      role: "Planner India Founder & Mentor",
      image: "/Images/shyam.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-akshat-9646891b3/",
    },
    
  ];

 return (
    <main className={`w-full mx-auto space-y-16 px-0 pb-10 relative bg-[#f7f5f1] ${poppins.className}`}>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          src="/Videos/girl_hotel.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute text-center text-[#f5e8d7] z-10">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${playfair.className}`}>ABOUT VNEXORA</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Crafting Tailored Hospitality Solutions with Vision, Innovation & Expertise.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who" className="max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-4 text-[#432c15] text-center mt-15 ${playfair.className}`}>Who We Are</h2>
        <p className="text-lg text-gray-600 text-justify">
             Founded in April 2025 by IIT BHU alumnus Vineet Mishra, VNEXORA Luxury Estate is a Varanasi-based premium hospitality management and consulting firm. We specialize in transforming hotels and resorts into profitable, branded destinations through strategic partnerships and comprehensive services. From daily operations and revenue optimization to branding, HR, and guest experience innovation, we deliver tailored solutions that elevate every property we touch. Backed by deep industry expertise and global partnerships—from luxury giants to boutique brands—we empower property owners to unlock their full potential while crafting unforgettable guest journeys. At VNEXORA, we don’t just manage hotels—we redefine hospitality excellence.
        </p>
      </section>

      {/* Founder */}
      <h2 className={`text-3xl font-bold text-[#432c15] mb-4 text-center ${playfair.className}`}>Meet Our Founder</h2>
      <section className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-2/3">
          <p className="text-lg text-gray-600 text-base leading-relaxed mb-4 mt-10 text-justify">
              Mr. Vineet Mishra, the visionary behind Vnexora Luxury Estate Private Limited, brings with him over 15 years of rich experience in the hospitality and real estate industry. As an alumnus of the prestigious <strong>IIT (B.H.U), Varanasi</strong>, he combines the analytical rigor and technical acumen of an engineer with the creative foresight of an industry leader.
          </p>
          <p className="text-lg text-gray-600 text-base leading-relaxed mb-4 mt-10 text-justify">
            Born and raised in Varanasi, Mr. Mishra’s deep-rooted understanding of both traditional values and modern business dynamics uniquely positions him to bridge global standards with local relevance.
          </p>
           <p className="text-lg text-gray-600 text-base leading-relaxed mb-4 mt-10 text-justify">
            Under his leadership, Vnexora has emerged as a disruptive force — offering a new paradigm in property management, hotel operations, and strategic consulting.
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
      <section id="team" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className={`text-3xl font-bold mb-4 text-[#432c15] text-center ${playfair.className}`}>Our Diverse Team</h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          Our team blends tradition and innovation—comprising architects, interior designers, and tech professionals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <Card
              key={idx}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              size="medium"
            />
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-10 bg-[#fdf6e9] relative rounded-xl overflow-hidden">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            src="/Images/philosophy.jpg"
            alt="Philosophy Visual"
            className="rounded-2xl w-[420px] md:w-[770px] lg:w-[560px]"
            width={560}
            height={400}
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h2 className={`text-4xl font-extrabold tracking-wider text-[#432c15] ${playfair.className}`}>Philosophy</h2>
          <div className="space-y-4">
            {tabOptions.map((key, idx) => (
              <div key={key}>
                <button
                  onClick={() => setActiveTab(key)}
                  className={`flex justify-between items-center w-full px-6 py-3 text-lg transition rounded-2xl ${
                    activeTab === key
                      ? "bg-white shadow text-[#1e1e1e]"
                      : "bg-transparent text-[#1e1e1e]"
                  }`}>
                  <span className={`${poppins.className}`}>
                    {key === "vision" && "Our Vision"}
                    {key === "mission" && "Our Mission"}
                    {key === "purpose" && "Our Purpose"}
                  </span>
                  <span className="text-[#432c15] font-semibold text-xl">{`0${idx + 1}`}</span>
                </button>
                {activeTab === key && (
                  <div className="bg-white text-left text-slate-600 text-base px-6 py-4 rounded-2xl shadow-sm transition-all duration-300">
                    {key === "vision" && (
                      <p>
                        To be India&apos;s most trusted and admired name in luxury hospitality development and hotel transformation.<br></br>VNEXORA envisions a future where every property we touch becomes a landmark of excellence, experience, and profitability.
                      </p>
                    )}
                    {key === "mission" && (
                      <p>
                        To partner with hotels, resorts, and investors to deliver tailored hospitality solutions—ranging from brand collaborations to operational mastery.<br></br>Our mission is to unlock each property&apos;s full potential by integrating strategic planning, guest-first thinking, and global standards.
                      </p>
                    )}
                    {key === "purpose" && (
                      <p>
                        To bridge the gap between unrealized hotel potential and sustainable success through vision, innovation, and execution.<br></br>At VNEXORA, our purpose is to make every hotel not just operational—but aspirational.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
