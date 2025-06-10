import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChoose";
import Gallery from "../components/Gallery";
import OurAllies from '../components/OurAllies';
import Services from "../components/Services";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <OurAllies />
      <Gallery />
      <Footer />
    </main>
  );
}
