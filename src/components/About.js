import "../css/about.css";
function About() {
  return (
    <section className="section section--about">
      <div className="about-container">
        <div className="about-content-box">
          <h1 className="about-heading margin-bottom-small">
            So, who am I?
          </h1>
          <img
            src="./img/contact-image.jpg"
            alt="miryam"
            className="about-img-hidden-l"
          />
          <p className="about-description margin-bottom-small">
            Hello, and welcome! I'm Miriyam,and
            for over a decade,I've had the
            privilege of enchanting congregations
            as a church organist, humbly holding
            six grades of Trinity certification.
          </p>
          <p className="about-description margin-bottom-small">
            Beyond the keys, my humble mission is
            to share the art of piano with eager
            minds, fostering a deep love for
            music's nuances. In my classes, I aim
            to cultivate not just piano skills but
            discipline, dedication, and an
            enduring passion for the profound joy
            of musical expression.
          </p>
          <p className="about-description margin-bottom-small">
            Join me in exploring the enchanting
            world of music, where every keystroke
            holds the potential to weave tales of
            emotion, harmony, and inspiration.
          </p>
          <a
            className="cta-btn "
            href="https://wa.me/+917338785700"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN ME
          </a>
        </div>
        <div className="about-img-box">
          <img
            src="./img/contact-image.jpg"
            alt="miryam"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
