import "../css/about.css";

function About() {
  return (
    <section className="section section--about">
      <div className="about-container">
        <div className="about-content-box">
          <h1 className="about-heading margin-bottom-small">
            So, who am I?
          </h1>
          <div className="about-text-container">
            <p className="about-description margin-bottom-small">
              Hi there! I'm Miriyam Joseline, a
              certified piano teacher with over 14
              years of experience, and I'm
              thrilled to share the joy of music
              with you.
            </p>
            <p className="about-description margin-bottom-small">
              Music is a beautiful gift that can
              brighten your days, spark
              creativity, and bring a sense of
              peace like nothing else. My lessons
              are all about helping you build
              strong skills while making sure you
              have fun and feel inspired every
              step of the way.
            </p>
            <p className="about-description margin-bottom-small">
              Whether you're just picking up the
              keys for the first time or looking
              to take your playing to new heights,
              I'm here to guide you, cheer you on,
              and celebrate every little victory.
              Ready to start your musical
              adventure? Let's make every note
              count together!
            </p>
          </div>
          <a
            className="cta-btn"
            href="https://wa.me/+917338785700"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN ME
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
