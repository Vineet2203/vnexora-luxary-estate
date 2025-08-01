'use client';

import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { Poppins, Playfair_Display } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });
const videos = [
  'https://www.youtube.com/embed/VIDEO_ID1',
  'https://www.youtube.com/embed/VIDEO_ID2',
  'https://www.youtube.com/embed/VIDEO_ID3',
  'https://www.youtube.com/embed/VIDEO_ID4',
  'https://www.youtube.com/embed/VIDEO_ID5',
  'https://www.youtube.com/embed/VIDEO_ID6',
  'https://www.youtube.com/embed/VIDEO_ID7',
  'https://www.youtube.com/embed/VIDEO_ID8',
  'https://www.youtube.com/embed/VIDEO_ID9',
];

export default function StayUpdatedPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <main className="w-full min-h-screen bg-[#f7f5f1]">
{/* Hero */}
<section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          src="/Videos/stayupdated.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute text-center text-[#f5e8d7] z-10">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${playfair.className}`}>Stay Updated With Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our latest updates, news, and insights across our properties and brand through engaging video content.
          </p>
        </div>
      </section>


      {/* Video Grid */}
      <section className="py-12 px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.slice(0, visibleCount).map((link, idx) => (
            <div
              key={idx}
              className="aspect-video overflow-hidden rounded-lg shadow-md border border-[#e2ddd7] bg-white"
            >
              <iframe
                className="w-full h-full"
                src={link}
                title={`YouTube video ${idx + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {visibleCount < videos.length && (
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 border border-[#C88C1F] text-[#C88C1F] text-sm font-medium rounded hover:bg-[#C88C1F] hover:text-white transition-all"
            >
              LOAD MORE...
            </button>
          )}
          <a
            href="https://www.youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#C88C1F] text-[#C88C1F] text-sm font-medium rounded flex items-center gap-2 hover:bg-[#C88C1F] hover:text-white transition-all"
          >
            <FaYoutube /> SUBSCRIBE
          </a>
        </div>
      </section>
    </main>
  );
}
