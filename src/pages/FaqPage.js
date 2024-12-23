import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import useScrollAndIntersectionObserver from "../hooks/useScrollAndIntersectionObserver";

function FaqPage() {
  useScrollAndIntersectionObserver();
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <FAQ />

      <Footer />
    </div>
  );
}

export default FaqPage;
