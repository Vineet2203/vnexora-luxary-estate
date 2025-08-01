'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaEnvelope, FaInstagram, FaGithub} from 'react-icons/fa';

interface CardProps {
  name: string;
  role: string;
  image: string;
  stake?: string;
  email?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  size?: 'small' | 'medium' | 'large';
}

const sizeMap = {
  small: 'w-64 h-64',
  medium: 'w-75 h-75',
  large: 'w-80 h-[28rem]',
};

const Card: React.FC<CardProps> = ({
  name,
  role,
  image,
  stake,
  email,
  linkedin,
  instagram,
  github,
  size = 'medium',
}) => {
  return (
    <div className={`perspective group ${sizeMap[size]}`}>
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-2xl p-4 flex flex-col justify-center items-center text-center border-2 border-[#e7c873] bg-[linear-gradient(135deg,rgba(112,103,59,0.87)_0%,rgba(180,143,84,0.57)_50%,rgba(220,152,80,0.64)_75%,rgba(106,74,38,0.9)_100%)] before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_70%)] before:pointer-events-none">
            <h3 className="text-xl font-bold mb-1 drop-shadow-lg text-black">{name}</h3>
            <p className="text-sm mb-1 text-black/80">{role}</p>
            {stake && <p className="text-sm mb-2 text-black/70">Stake: {stake}</p>}

            <div className="flex gap-4 mt-4">
            {linkedin && (
                <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
                >
                <FaLinkedin className="text-[#0A66C2] drop-shadow" size={22} />
                </a>
            )}
            {email && (
                <a 
                href={`mailto:${email}`}
                className="transition-transform duration-200 hover:scale-110">
                <FaEnvelope className="text-[#f8f8f2] drop-shadow" size={22} />
                </a>
            )}
            {instagram && (
                <a href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110">
                <FaInstagram className="text-[#E4405F] hover:text-[#C13584] drop-shadow" size={22} />
                </a>
            )}
            {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <FaGithub className="text-black hover:text-gray-800 drop-shadow" size={22} />
                </a>
              )}

            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
