import Policies from "../components/Policies";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import useScrollAndIntersectionObserver from "../hooks/useScrollAndIntersectionObserver";

function PoliciesPage() {
  useScrollAndIntersectionObserver();
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Policies />
      <Footer />
    </div>
  );
}

export default PoliciesPage;
