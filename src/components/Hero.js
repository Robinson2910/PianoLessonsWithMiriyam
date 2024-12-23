import { Link } from "react-router-dom";
import "../css/hero.css";

function Hero() {
  return (
    <div className="hero section">
      <div className="hero-content-box ">
        {/* <p className="subheading margin-bottom-vsmall">
          Now at namma chennai!
        </p> */}
        <h1 className="hero-heading margin-bottom-vsmall">
          Piano Lessons With Miriyam
        </h1>
        <p className="para margin-bottom-vsmall">
          Hello, music enthusiasts! I'm Miriyam,
          and I invite you to embark on a
          harmonious journey with me at Piano
          Lessons with Miriyam. I am dedicated to
          elevating your piano skills to new
          heights through tailored instruction,
          passionate mentorship, and a focus on
          your individual growth.
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
        <img src="./img/paino1.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
