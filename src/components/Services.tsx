'use client';

import React from 'react';

const services = [
  {
    title: 'Strategic Hospitality Consulting',
    description: 'Expert guidance to enhance performance and market positioning.',
  },
  {
    title: 'Operational Excellence',
    description: 'Streamlined operations to maximize guest satisfaction and profits.',
  },
  {
    title: 'Brand Development',
    description: 'Design and scale distinctive hospitality brands.',
  },
  {
    title: 'Property Management',
    description: 'Turnkey management for villas, hotels, and resorts.',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#fdfaf7] py-20 px-4 sm:px-8 lg:px-24 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#432c15] mb-2">Our Services</h2>
        <p className="text-lg text-gray-600">
          Tailored solutions for every facet of hospitality management.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#f1e3d3] shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#7a4e24] mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
