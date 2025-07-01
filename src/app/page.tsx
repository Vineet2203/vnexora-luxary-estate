import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChoose";
import Gallery from "../components/Gallery";
import OurAllies from '../components/OurAllies';
import Services from "../components/Services";
import AppointmentFAB from '@/components/AppointmentFAB';



export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <OurAllies />
      <Gallery />
      <AppointmentFAB />
    </main>
  );
}
