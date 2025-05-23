import Benefits from "../components/Benefits";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import TestimonialBox from "../components/TestimonialBox";
import ScrollToTop from "../components/ScrollToTop";
import useScrollAndIntersectionObserver from "../hooks/useScrollAndIntersectionObserver";
import FAQ from "../components/FAQ";
// HomePage.js

const HomePage = () => {
  useScrollAndIntersectionObserver();
  return (
    <div className="HomePage">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <TestimonialBox />
      <FAQ />
      {/* <Benefits /> */}
      <Services />
      {/* <Pricing /> */}
      <ContactUs />

      <Footer />
    </div>
  );
};

export default HomePage;
