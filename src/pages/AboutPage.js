import About from "../components/About";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import useScrollAndIntersectionObserver from "../hooks/useScrollAndIntersectionObserver";

function AboutPage() {
  useScrollAndIntersectionObserver();
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <About />

      <Footer />
    </div>
  );
}

export default AboutPage;
