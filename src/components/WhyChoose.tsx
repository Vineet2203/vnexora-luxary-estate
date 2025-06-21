'use client';

import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Playfair_Display, Poppins } from 'next/font/google';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // arrow icons from react-icons
import { useState } from 'react';
const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const slides = [
  {
    title: 'End-to-End Hotel Management',
    description:
      'From architectural design and daily operations to training, sales, and guest satisfaction — VNEXORA does it all.',
    image: '/Images/gen_images/staff_training.png',
  },
  {
    title: 'Strategic Brand Partnerships',
    description:
      'We collaborate with leading hospitality brands to give your hotel global visibility and instant recognition.',
    image: '/Images/gen_images/strategy.png',
  },
  {
    title: 'Proven Business Models',
    description:
      'Flexible revenue models like Lease, Management, Revenue Sharing with MG, and Co-Branding designed for success.',
    image: '/Images/gen_images/branding.png',
  },
  {
    title: 'Expert-Led Operations',
    description:
      'Decades of industry experience across F&B, finance, marketing, and tech — for consistently excellent execution.',
    image: '/Images/gen_images/executive_team.png',
  },
  {
    title: 'Scalable Growth Solutions',
    description:
      'Whether you run one hotel or many, we scale with your ambitions to drive sustainable growth.',
    image: '/Images/gen_images/scale_growth.png',
  },
  {
    title: 'Transparent & Trusted Partnerships',
    description:
      'We prioritize transparency and trust — with clear goals, reports, and results.',
    image: '/Images/gen_images/report.png',
  },
];

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <section className="bg-[#f7f5f1] py-20 px-6 md:px-16 font-serif relative" id="whychooseus">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className = {`${playfair.className} text-4xl font-bold text-center text-[#432c15] mb-4 mt-20`}>
          Why Choose VNEXORA ?
        </h2>
        <p className= {`${poppins.className} text-lg text-center text-gray-600 mb-12`}>
          At VNEXORA Luxury Estate, we don’t just manage properties—we transform them into profitable, memorable, and luxurious destinations. 
    Our end-to-end hospitality solutions combine global expertise with local insights, delivering tailored strategies that drive guest satisfaction, operational excellence, and sustainable growth for every client.
        </p>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-[#705C2E] text-[#705C2E] p-2 rounded-full shadow-md hover:bg-[#f0e9dd] transition"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {slides.map((item, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center text-center px-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={400}
                  className="rounded-lg shadow-lg mb-6 w-full h-auto object-cover"
                />
                <h3 className={`${poppins.className}text-2xl font-semibold text-[#705C2E] mb-2`}>
                  {item.title}
                </h3>
                <p className={`${poppins.className} text-gray-700 max-w-xl`}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-[#705C2E] text-[#705C2E] p-2 rounded-full shadow-md hover:bg-[#f0e9dd] transition"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className= {`${poppins.className} bg-[#705C2E] text-white px-8 py-4 rounded-full text-lg hover:bg-[#5e4f2a] transition`}>
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
