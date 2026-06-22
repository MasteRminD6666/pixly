import Hero from "../components/Hero";
import VideoShowcase from "../components/VideoShowcase";
import MarketingFocus from "../components/MarketingFocus";
import About from "../components/About";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoShowcase />
      <MarketingFocus />
      <About />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
