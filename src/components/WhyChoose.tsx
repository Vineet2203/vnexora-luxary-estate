'use client';

import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f7f5f1] py-20 px-6 md:px-16" id="why-choose-us">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-[#1a1a1a] mb-2">
          Why Choose VNEXORA!
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Redefining Excellence in Hospitality Management
        </p>

        {/* Feature Blocks */}
        <div className="space-y-20">
          {/* Block 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#705C2E] mb-4">
                End-to-End Hotel Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From architectural design and project execution to daily operations, staff
                training, sales, marketing, and guest satisfaction — VNEXORA handles
                everything with precision and professionalism.
              </p>
            </div>
            <div>
              <Image
                src="/images/hotel-reception.jpg"
                alt="Modern Hotel Reception"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div>
              <h3 className="text-2xl font-semibold text-[#705C2E] mb-4">
                Strategic Brand Partnerships
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We collaborate with the world’s leading hospitality brands, offering hotel
                owners instant brand recognition, global visibility, and elevated guest
                trust. Whether it's repositioning an existing property or launching a new
                one, our brand alliances drive results.
              </p>
            </div>
            <div>
              <Image
                src="/images/hotel-exterior.jpg"
                alt="Luxurious Hotel Exterior"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#705C2E] mb-4">
                Proven Business Models
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Choose from flexible revenue models — Lease Agreements, Management Contracts,
                Revenue Sharing with Minimum Guarantee (MG), or Co-Branding Partnerships — all
                tailored to maximize profitability and minimize risk.
              </p>
            </div>
            <div>
              <Image
                src="/images/business-models.jpg"
                alt="Business Meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Block 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div>
              <h3 className="text-2xl font-semibold text-[#705C2E] mb-4">
                Expert-Led Operations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our executive team brings decades of industry expertise in hotel operations,
                financial planning, F&B, marketing, and hospitality tech. We implement global
                SOPs, cutting-edge tools, and best practices for consistent performance and
                guest delight.
              </p>
            </div>
            <div>
              <Image
                src="/images/expert-team.jpg"
                alt="Expert Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Block 5 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#705C2E] mb-4">
                Scalable Growth Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Whether you manage a boutique hotel or a multi-city portfolio, VNEXORA provides
                scalable solutions designed to expand your reach, elevate your brand, and grow
                your revenue sustainably.
              </p>
            </div>
            <div>
              <Image
                src="/images/scalable-growth.jpg"
                alt="Scalable Growth"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Block 6 */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div>
              <h3 className="text-2xl font-semibold text-[#705C2E] mb-4">
                Transparent & Trusted Partnerships
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Integrity is at the core of everything we do. With clear communication,
                performance reporting, and aligned goals, we build long-term partnerships
                based on trust and measurable success.
              </p>
            </div>
            <div>
              <Image
                src="/images/trusted-partnership.jpg"
                alt="Trusted Partnership"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button className="bg-[#705C2E] text-white px-8 py-4 rounded-full text-lg hover:bg-[#5e4f2a] transition">
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
