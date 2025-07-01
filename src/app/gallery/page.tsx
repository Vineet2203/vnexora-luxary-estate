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
  '/Images/gallery/gl11.jpg',
  '/Images/gallery/gl12.jpg',
  '/Images/gallery/gl13.jpg',
  '/Images/gallery/gl14.jpg',
  '/Images/gallery/gl15.jpg',
  '/Images/gallery/gl16.jpg',
  '/Images/gallery/gl17.jpg',
  '/Images/gallery/gl18.jpg',   
  '/Images/gallery/gl19.jpg',
  '/Images/gallery/gl20.jpg',
  '/Images/gallery/gl21.jpg',
  '/Images/gallery/gl22.jpg',
  '/Images/gallery/gl23.jpg',
  '/Images/gallery/gl24.jpg',
  '/Images/gallery/gl25.jpg',
  '/Images/gallery/gl26.jpg',
  '/Images/gallery/gl27.jpg',
  '/Images/gallery/gl28.jpg',
  '/Images/gallery/gl29.jpg',
  '/Images/gallery/gl30.jpg',
];

const Gallery = () => {
  return (
    <main className={`w-full mx-auto space-y-16 px-0 pb-10 relative bg-[#f7f5f1]`}>
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
    </main>
  );
};

export default Gallery;

