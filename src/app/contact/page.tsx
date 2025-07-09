'use Client';
import GetInTouchForm from '@/components/forms/GetInTouch'; 

export default function GetInTouchPage() {
  return (
    <main className="relative min-h-screen">
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/Videos/contact.mp4" 
          autoPlay
          loop
          muted
          playsInline
        />
        
    <div className="absolute text-center text-[#f5e8d7] z-10">
    <h1 className="text-4xl md:text-5xl font-extrabold">Get in Touch with us</h1>
  </div>
       
      </section>
      <div id="get-in-touch" className="relative z-20 flex flex-col items-center text-center">
        <GetInTouchForm />
      </div>
    </main>
  );
}
