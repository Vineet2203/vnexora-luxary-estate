// src/app/about/page.tsx
import React from "react";

import Card from '@/components/common/Card';

const AboutPage = () => {
  return (
    <main className="pt-30 pb-5 px-2 max-w-5xl mx-auto space-y-16">
      
      {/* What We Do */}
      <section>
      <h2 className="text-3xl font-bold mb-4 text-gray-800">What We Do</h2>
      <p className=" text-lg text-gray-600">
        At Vnexora Luxury Estate, we are reimagining the luxury hospitality experience. 
        Based in Varanasi and operating PAN India, we specialize in helping clients with 
        their operations, management, and property setup through alliances with premium 5-star brands.
      </p>
      </section>

      {/* Founder Section */}
      <section className="flex flex-col md:flex-row items-start gap-6">
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold text-[#432c15] mb-4">Meet Our Founder</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Mr. Vineet Mishra, the visionary behind Vnexora Luxury Estate Private Limited, brings with him over 15 years of rich experience in the hospitality and real estate industry. As an alumnus of the prestigious <strong>IIT (B.H.U), Varanasi</strong>, he combines the analytical rigor and technical acumen of an engineer with the creative foresight of an industry leader.
        </p>

        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Born and raised in Varanasi, Mr. Mishra’s deep-rooted understanding of both traditional values and modern business dynamics uniquely positions him to bridge global standards with local relevance. His journey began with a passion for redefining luxury hospitality, not just through aesthetics, but through data-driven solutions and sustainable growth strategies.
        </p>

        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Under his leadership, Vnexora has emerged as a disruptive force — offering a new paradigm in property management, hotel operations, and strategic consulting. His goal is to transform the hospitality landscape PAN India by empowering clients through innovation, strategic alliances with premium brands, and tech-driven operations.
        </p>
      </div>
      <div className="flex justify-center">
        <Card
        name="Mr. Vineet Mishra"
        role="Founder & CEO"
        image="/Images/founder.jpg" // make sure this exists
        stake="Major Stakeholder"
        email="founder@vnexora.com"
        linkedin="https://www.linkedin.com/in/vineet-mishra-98151a6a/"
        instagram="https://www.instagram.com/vineet_iitbhu?igsh=ZnN2ZWRsOHRkd2to"
        size="medium"
        />
      </div>
      </section>

      {/* Team Section */}
      <section>
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Diverse Team</h2>
      <p className="text-lg text-gray-600">
        Our team blends tradition and innovation—comprising architects, interior designers, and tech professionals. 
        The tech team is building data-driven tools using AI/ML to deliver custom revenue and operations strategies 
        tailored to each client’s property and goals.
      </p>
      </section>

      {/* Vision Section */}
      <section>
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
      <p className="text-lg text-gray-600">
        To be India’s most forward-thinking partner in luxury hospitality—focused on long-term sustainability, 
        operational excellence, and unparalleled guest experiences.
      </p>
      <p className="text-lg mt-2 text-gray-600">
        <strong>We’re not just building hotels. We’re building enduring legacies.</strong>
      </p>
      </section>
      
    </main>
  );
};

export default AboutPage;
