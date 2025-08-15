// components/CubeCard.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Images must be 4 unique hotel image paths, e.g.:
/*
  [
    "/images/hotel1.jpg",
    "/images/hotel2.jpg",
    "/images/hotel3.jpg",
    "/images/hotel4.jpg"
  ]
*/

export default function CubeCard({ images }: { images: string[] }) {
  // Only support 4 images (one per face)
  if (images.length !== 4) {
    throw new Error("CubeCard requires exactly 4 images (one per face).");
  }
  const [face, setFace] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => setFace(f => (f + 1) % 4), 3000);
    return () => clearInterval(timer);
  }, []);

  // Responsive width: 1/3 of screen, landscape aspect ratio (width > height)
  return (
    <div
      className="flex items-center justify-center perspective-800"
      style={{
        width: "33vw",
        height: "22vw", // landscape aspect ratio (e.g. 3:2)
        maxWidth: 540,
        maxHeight: 360,
        minWidth: 300,
        minHeight: 200,
      }}
    >
      <div
        className="w-full h-full relative transition-transform duration-700"
        style={{
          transform: `rotateY(-${face * 90}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden"
             style={{ transform: "rotateY(0deg) translateZ(11vw)" }}>
          <Image src={images[0]} alt="Front Face" fill className="rounded-xl object-cover" />
        </div>
        {/* Right */}
        <div className="absolute w-full h-full backface-hidden"
             style={{ transform: "rotateY(90deg) translateZ(11vw)" }}>
          <Image src={images[1]} alt="Right Face" fill className="rounded-xl object-cover" />
        </div>
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden"
             style={{ transform: "rotateY(180deg) translateZ(11vw)" }}>
          <Image src={images[2]} alt="Back Face" fill className="rounded-xl object-cover" />
        </div>
        {/* Left */}
        <div className="absolute w-full h-full backface-hidden"
             style={{ transform: "rotateY(-90deg) translateZ(11vw)" }}>
          <Image src={images[3]} alt="Left Face" fill className="rounded-xl object-cover" />
        </div>
      </div>
      {/* Extra CSS for 3D cube */}
      <style jsx>{`
        .perspective-800 {
          perspective: 800px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
