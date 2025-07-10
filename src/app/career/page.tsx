import CareerForm from '@/components/forms/CareerForm';
import { Poppins, Playfair_Display } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Video Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/Videos/career.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 bg-black bg-opacity-50 min-h-screen"></div>
      </section>

      {/* Content Section */}
      <div id="careers" className="relative z-20 flex flex-col items-center text-center px-4 py-10 space-y-10">


        <section className="max-w-4xl space-y-4">
          <h2 className={`text-4xl  text-[#432c15] font-bold ${playfair.className}`}>Join Our Team</h2>
          <p className={`text-xl text-gray- 700 font-semibold  ${poppins.className}`}>Professionalism, Innovation and Excellence.</p>
          <p className={` text-gray- 700  ${poppins.className}`}>
            These are the core values that define us at <strong>VNEXORA Luxury Estate</strong>.
            We specialize in strategic hospitality management, partnering with global brands
            and visionary hotel owners to deliver unparalleled guest experiences.
          </p>
          <p className={` text-gray- 700  ${poppins.className}`}>
            Join a team that’s redefining hospitality through operational precision, creative
            flexibility, and data-driven strategies. At VNEXORA, we don’t just manage properties —
            we craft unforgettable journeys.
          </p>
        </section>

        {/* ✅ Your Form Component */}
        <CareerForm />
      </div>
    </main>
  );
}