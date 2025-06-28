'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Playfair_Display, Poppins } from 'next/font/google';

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
  return (
    <section
      className="bg-[#f7f5f1] min-h-screen w-full px-0 md:px-8 py-16 relative"
      id="whychooseus"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2
          className={`${playfair.className} text-4xl font-bold text-center text-[#432c15] mb-6`}
        >
          Why Choose VNEXORA?
        </h2>
        <p
          className={`${poppins.className} text-lg text-center text-gray-600 mb-12 max-w-4xl mx-auto`}
        >
          At VNEXORA Luxury Estate, we don’t just manage properties—we transform
          them into profitable, memorable, and luxurious destinations. Our
          end-to-end hospitality solutions combine global expertise with local
          insights, delivering tailored strategies that drive guest
          satisfaction, operational excellence, and sustainable growth for every
          client.
        </p>

        {/* === Swiper Slider === */}
        <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={30}
  slidesPerView={1}
  className="w-full max-w-8xl mx-auto"
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div className="flex flex-col items-center text-center">
        {/* === Image === */}
        <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg mb-6">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* === Text BELOW image === */}
        <h3
          className={`${poppins.className} text-2xl font-semibold text-[#705C2E] mb-2`}
        >
          {slide.title}
        </h3>
        <p
          className={`${poppins.className} text-gray-700 max-w-xl px-6`}
        >
          {slide.description}
        </p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className={`${poppins.className} bg-[#705C2E] text-white px-8 py-4 rounded-full text-lg hover:bg-[#5e4f2a] transition`}
          >
            Partner with Us
          </button>
        </div>
      </div>

      {/* Custom Styling */}
      <style jsx global>{`
  .swiper-button-next,
  .swiper-button-prev {
    color: #705c2e;
  }
  .swiper-pagination-bullet {
    background: #705c2e;
  }
  .swiper-pagination {
    bottom: 10px !important;
  }
`}</style>
    </section>
  );
};

export default WhyChooseUs;
