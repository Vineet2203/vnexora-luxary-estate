'use client';
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


export default function GalleryGrid({ limit }: { limit?: number }) {
  const displayedImages = limit ? images.slice(0, limit) : images;

  return(
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {displayedImages.map((src, idx) => (
        <div 
        key={idx} 
        className="relative w-full h-40 bg-gray-300 overflow-hidden rounded-lg shadow"
        >
          <Image
            src={src}
            alt={`Gallery ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
