'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  '/Images/gallery/gl1.jpg',
  '/Images/gallery/gl2.jpg',
  '/Images/gallery/gl3.jpg',
  '/Images/gallery/gl4.jpg',
  '/Images/gallery/gl5.jpg',
  '/Images/gallery/gl6.jpg',
  '/Images/gallery/gl7.jpg',
  '/Images/gallery/gl8.jpg',
  '/Images/gallery/gl9.jpg',
  '/Images/gallery/gl10.jpg',

];

const Gallery = () => {
  return (
    <section className="py-16 px-4 " id="gallery">
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
