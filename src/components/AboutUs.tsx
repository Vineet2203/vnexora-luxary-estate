'use client';
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Company Overview */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Vnexora Luxury Estate Private Limited is a premium hospitality solutions firm,
            committed to elevating hotel and resort businesses with curated strategies and
            unmatched industry insights. We help our clients realize the full potential of
            their assets by combining operational excellence with brand vision.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            With deep expertise in property management, marketing, design consultation, and
            performance analytics, we partner with hospitality leaders across India to
            redefine luxury experiences.
          </p>
        </div>

        {/* Right Column - Highlights (inspired by unitedhospitality.com) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">350+</h3>
            <p className="text-gray-700 mt-2">Keys</p>
          </div>
          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">15+ Years</h3>
            <p className="text-gray-700 mt-2">Industry Experience</p>
          </div>
          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">56+</h3>
            <p className="text-gray-700 mt-2">Brands</p>
          </div>
          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">15+</h3>
            <p className="text-gray-700 mt-2">Hotels pipeline</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
