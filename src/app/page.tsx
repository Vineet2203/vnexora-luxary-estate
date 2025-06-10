import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChoose";
import Gallery from "../components/Gallery";
import Section from "../components/Section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Gallery />
      <Section />

      {/* Add other sections here one by one */}
      {/* Example: <Services /> */}
      {/* Example: <Gallery /> */}
      {/* Example: <Contact /> */}
      {/* Add other sections here one by one */}
      {/* Example: <About /> */}
      {/* Example: <Services /> */}
      {/* Example: <Gallery /> */}
      {/* Example: <Contact /> */}
      {/* Add other sections here one by one */}
    </main>
  );
}
