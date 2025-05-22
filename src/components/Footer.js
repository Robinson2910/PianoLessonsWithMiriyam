import { Link } from "react-router-dom";
import "../css/footer.css";
function Footer() {
  return (
    <footer className="footer section">
      <p className="footer-logo-label container">
        Piano Lessons With Miriyam
      </p>

      <p className="footer-slogan-text container">
        Harmonizing Your Musical Journey
      </p>
      <div className="container footer-grid">
        <div className="links-col">
          <h1 className="footer-heading">
            Quick Links
          </h1>
          <ul className="footer-nav">
            <li>
              <Link
                className="footer-link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="footer-link"
                to="/about us"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className="footer-link"
                to="/faq"
              >
                FAQS
              </Link>
            </li>
            <li>
              <Link
                className="footer-link"
                to="/policies"
              >
                Policies
              </Link>
            </li>
          </ul>
        </div>
        <div className="socials-col">
          <h1 className="footer-heading">
            Socials
          </h1>
          <ul className="footer-nav">
            <li>
              <a
                className="footer-link"
                href="https://www.instagram.com/piano.lessons.with.miriyam/?utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://wa.me/917338785700"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <h1 className="footer-heading">
            Contact
          </h1>
          <ul className="footer-nav">
            <li>
              <a
                className="footer-link"
                href="mailto:miriyamraja@gmail"
              >
                miriyamraja@gmail.com
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="tel:+917338785700"
              >
                7338785700
              </a>
            </li>

            <li className="address">
              South Gangai Amman Koil street,
              Choolaimedu, Chennai 94
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
