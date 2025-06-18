'use client';

import React from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Playfair_Display, Poppins } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const services = [
  {
    title: 'Brand Partnership Solutions',
    description:
      'At VNEXORA, we bridge the gap between visionary hotel owners and leading national and international hospitality brands. Our expertise lies in facilitating mutually beneficial brand affiliations that elevate property positioning and guest experiences.',
    points: [
      'Management Contracts',
      'Lease Agreements',
      'Revenue-Sharing Models',
      'Tailored Hybrid Models',
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', // replace with your actual image path
  },
  {
    title: 'Property Development & Consulting',
    description:
      'We support hospitality ventures from ideation to execution. Our development team offers comprehensive consulting services to guide investors and owners through every phase of hotel development and renovation.',
    points: [
      'Market Research & Feasibility Studies',
      'Site Selection & Brand Fitment',
      'Capex Planning & Budgeting',
      'Architecture & Interior Design Consultation',
      'Procurement of FF&E',
      'Pre-Opening Operations Setup & Training',
    ],
    image: 'https://www.spireconsultinggroup.com/wp-content/uploads/2021/04/Denver-Convention-Center-Image-1-website.jpg.webp',
  },
  {
    title: 'Hotel Operations & Management',
    description: 'Operational excellence is the backbone of every successful hotel. VNEXORA provides hands-on daily management solutions across departments to enhance guest satisfaction,increase profitability, and ensure brand compliance.',
    points: [
      'Day-to-day Hotel Management',
      'Rooms Division & Front Office Oversight',
      'Food & Beverage Management',
      'Sales & Marketing Strategy',
      'Preventive Maintenance & Engineering',
      'HouseKeeping & Quality Audits',
      'Energy Efficiency & Sustainability Programs'
    ],
    image: 'https://17a64fdc.delivery.rocketcdn.me/wp-content/uploads/2021/05/Hotel-Management-Team.jpg',
  },
  {
    title: 'Sales & Marketing',
    description: 'Effective positioning and promotion are crucial in today’s competitive hospitality space. VNEXORA builds sales strategies that blend local intelligence with global outreach to drive bookings and boost visibility.',
    points: [
      'Marketing Plan Development & Campaign Execution',
      'Revenue Management & Yield Optimization',
      'Website Design, SEO & Social Media Strategy',
      'Graphic Design & Visual Identity',
      'Public Relations & Influencer Collaborations',
      'Online Reputation Management'
    ],
    image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg',
  },
  {
    title: 'Human Resource & Talent Development',
    description: 'Our people-first philosophy ensures that we attract, nurture, and retain top hospitality talent. VNEXORA helps properties build teams that align with the brand’s ethos and deliver exceptional service.',
    points: [
      'Talent Acquisition & Onboarding',
      'Customized Training Modules for All Departments',
      'Leadership Development & Mentorship Programs',
      'Employee Engagement Initiatives',
      'Performance Appraisal & Rewards System'
    ],
    image: 'https://images.pexels.com/photos/5862284/pexels-photo-5862284.jpeg',
  },
  {
    title: 'Finance & Accounting',
    description: 'Financial transparency and strategic control are vital for sustainable growth. VNEXORA offers full-suite financial services tailored to hospitality businesses,allowing owners to make data-backed decisions with confidence.',
    points: [
      'Budgeting & Forecasting',
      'Cash Flow & Working Capital Management',
      'Financial Reporting (Compliant with USALI Standards)',
      'Accounts Payable & Receivable Management',
      ''
    ],
    image: 'https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#f7f5f1] py-20 px-4 sm:px-8 lg:px-24 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="text-center mb-12">
        <h2 className={`${playfair.className} text-4xl font-bold text-[#432c15] mb-2`}>
          Our Services
        </h2>
        <p className={`${poppins.className} text-lg text-gray-600`}>
          Tailored solutions for every facet of hospitality management.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full max-w-6xl"
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid md:grid-cols-2 gap-8 bg-white border border-[#f1e3d3] rounded-2xl overflow-hidden shadow-xl">
              
              {/* Left - Image */}
              <div className="relative w-full h-[300px] md:h-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Content */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className={`${playfair.className} text-3xl text-[#432c15] mb-4`}>
                  {service.title}
                </h3>
                <p className={`${poppins.className} text-gray-700 mb-4`}>
                  {service.description}
                </p>

                {/* Points if any */}
                {service.points.length > 0 && (
                  <ul className={`${poppins.className} text-gray-700 list-disc pl-5 space-y-2 mb-4`}>
                    {service.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}

                <button className="flex items-center gap-2 bg-[#705C2E] text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-[#926d3f] transition w-max">
                  Learn More
                  <FiArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #705C2E;
        }
        .swiper-pagination-bullet {
          background: #705C2E;
        }
      `}</style>
    </section>
  );
};

export default Services;
