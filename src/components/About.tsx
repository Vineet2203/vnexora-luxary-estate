// app/about/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2C1B12]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/Images/about-hero.jpg')` }}>
        <div className="bg-black/50 absolute inset-0 z-10" />
        <h1 className="relative z-20 text-5xl font-extrabold text-white drop-shadow-lg text-center">About Us</h1>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed">
          Vnexora was founded with a single vision — to redefine the standards of luxury hospitality. We combine years of industry expertise with strategic foresight to transform spaces and deliver experiences that resonate with both elegance and purpose.
        </p>
      </section>

      {/* Our Philosophy */}
      <section className="bg-[#EAE0D5] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-lg leading-relaxed">
            At Vnexora, we believe hospitality is more than just service — it’s a lifestyle. We strive to harmonize functionality, aesthetics, and guest experience through customized strategies and a deep understanding of our client’s brand essence.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Hospitality Consulting", desc: "Tailored solutions for hotels and resorts." },
            { title: "Brand Development", desc: "Strategizing compelling brand narratives." },
            { title: "Space Transformation", desc: "Design and renovate your dream hospitality space." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#A97B50] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hospitality Vision?</h2>
        <Link href="/#contact">
          <button className="mt-4 px-6 py-3 bg-white text-[#A97B50] font-semibold rounded-full hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  );
}
