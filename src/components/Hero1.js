import { Link } from "react-router-dom";
import "../css/hero.css";

function Hero() {
  return (
    <div className="hero section">
      <div className="hero-content-box">
        <h1 className="hero-heading margin-bottom-vsmall">
          Hey there, and welcome!
        </h1>
        <p className="para margin-bottom-vsmall">
          So glad you’re here! If you’ve been
          dreaming about learning the piano or
          picking it up again - you’re in the
          right place. My classes are all about
          making music fun, inspiring, and
          something you truly enjoy. We’ll take it
          step by step, build your confidence, and
          celebrate every little victory along the
          way
        </p>
        <p className="para margin-bottom-vsmall">
          Whether you’re 6 or 60, there’s a seat
          at the piano waiting for you. Ready to
          press that first key? Let’s begin!
        </p>
        <div className="button-box">
          <a
            className="cta-btn"
            href="https://wa.me/+917338785700"
            target="_blank"
            rel="noopener noreferrer"
          >
            BEGIN TODAY
          </a>
          <Link className="link" to="/about us">
            ABOUT
          </Link>
        </div>
      </div>
      <div className="hero-img-box">
        <img
          src="./img/paino1.png"
          alt="Piano lessons with Miriyam"
        />
      </div>
    </div>
  );
}

export default Hero;
