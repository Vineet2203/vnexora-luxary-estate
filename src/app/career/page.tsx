import CareerForm from '@/components/forms/CareerForm';

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
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
    <div id="careers" className="relative z-20 flex flex-col items-center text-center ">
      <CareerForm />
    </div>
    </main>
  );
}