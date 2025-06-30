'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  '/images/IMG-20250626-WA0005.jpg',
  '/images/IMG-20250626-WA0007.jpg',
  '/images/IMG-20250626-WA0006.jpg',
  '/images/IMG-20250626-WA0008.jpg',
  '/images/IMG-20250626-WA0009.jpg',
];

const Gallery = () => {
  return (
    <section className="py-10 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#432c15] text-center">Gallery</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
