import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChoose";
import Gallery from "../components/Gallery";
import OurAllies from '../components/OurAllies';
import Services from "../components/Services";
import GlassCard from "@/components/brand";
import WhatsAppButton from "../components/core/whatsapp";
import ChatbotButton from "../components/core/chatbot";



export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <GlassCard />
      <OurAllies />
      <Gallery />
      {/* WhatsApp Button Component */}
      <div className="fixed bottom-4 right-4 z-50">
        <WhatsAppButton />
      </div>
      {/* Chatbot Button Component */}
      <div className="fixed bottom-4 right-4 z-50">  
        <ChatbotButton />
      </div>
    </main>
  );
}
