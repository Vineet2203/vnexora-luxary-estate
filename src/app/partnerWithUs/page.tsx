'use client';

import React from 'react';
import { Poppins, Playfair_Display } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

const PartnerPage = () => {
  return (
    <main className={`w-full bg-[#f7f5f1] px-4 pb-20 ${poppins.className}`}>
  {/* Hero */}
  <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          src="/Videos/partnerus.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute text-center text-[#f5e8d7] z-10">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${playfair.className}`}>Partner with us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Shape the future of the hospitality industry with VNEXORA.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto mt-16 space-y-6">
        <p className="text-lg text-gray-700 text-justify">
          At <strong>VNEXORA Luxury Estate Pvt. Ltd.</strong>, in collaboration with our renowned hotel brand partners, we deliver tailor-made solutions to maximize the value and visibility of your hospitality asset.
        </p>
        <p className="text-lg text-gray-700 text-justify">
          Whether you own a boutique stay, urban hotel, heritage haveli, or a resort property, our partnership models are scalable, transparent, and aligned with your goals.
        </p>
      </section>

      {/* Models */}
      <section className="max-w-6xl mx-auto mt-12 space-y-10">
        {[
          {
            title: '1. Hotel Management Contract',
            description:
              'VNEXORA or its partnered hotel brand takes complete responsibility of your hotel’s operations while you retain ownership.',
            bullets: [
              'Experienced hospitality leadership team',
              'Brand association with VNEXORA or its partners',
              'Central reservation & distribution systems',
              'HR management & SOP enforcement',
              'Guest satisfaction tracking & reporting',
            ],
          },
          {
            title: '2. Lease / Rental Agreement',
            description:
              'VNEXORA or its collaborated brand leases your hotel property for a fixed tenure and operates it independently.',
            bullets: [
              'Assured monthly/annual income',
              'No operational stress or liabilities',
              'Facility upgrades to brand standards',
              'Long-term asset branding',
            ],
          },
          {
            title: '3. Revenue Sharing Agreement',
            description:
              'We manage your property and share revenue based on mutually agreed percentages.',
            bullets: [
              'Focus on guest experience + performance',
              'Transparent reporting & review meetings',
              'AI-based pricing & booking engine',
              'Collaborative reviews and performance mapping',
            ],
          },
          {
            title: '4. Minimum Guarantee + Revenue Sharing',
            description:
              'A hybrid model that ensures minimum guaranteed income plus shared revenue profits.',
            bullets: [
              'Fixed income with revenue upside',
              'Operational control by experienced brand',
              'Incentive schemes and performance mapping',
            ],
          },
          {
            title: '5. Customized Partnership Model',
            description:
              'Every asset is unique. We craft bespoke models blending management, lease, or franchise approaches.',
            bullets: [
              'Tailored strategy for your location & segment',
              'Experiential or boutique property branding',
              'Wedding/banquet optimization',
              'Green practices & local staff upskilling',
            ],
          },
        ].map((model, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm space-y-4">
            <h2 className={`text-2xl font-semibold text-[#432c15] ${playfair.className}`}>
              {model.title}
            </h2>
            <p className="text-gray-700 text-justify">{model.description}</p>
            <ul className="list-disc ml-5 text-gray-600">
              {model.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto mt-16 text-center bg-[#fdf6e9] p-10 rounded-xl shadow">
        <h2 className={`text-3xl font-bold text-[#432c15] ${playfair.className}`}>
          Let’s Collaborate!
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Partner with VNEXORA or our collaborated hotel brands to elevate your property.
        </p>
        <div className="mt-6 space-y-2 text-base text-gray-800">
          <p><strong>Email:</strong> <a className="text-blue-600" href="mailto:connect@vnexora.com">connect@vnexora.com</a></p>
          <p><strong>Call / WhatsApp:</strong> <a href="tel:+917980829403">+91-7980829403</a></p>
          <p><strong>Website:</strong> <a className="text-blue-600" href="https://www.vnexora.com" target="_blank">www.vnexora.com</a></p>
        </div>
      </section>
    </main>
  );
};

export default PartnerPage;
