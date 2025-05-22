import "../css/testimonial.css";

const testimonials = [
  {
    quote:
      "A very passionate teacher and amazing with kids. My daughter has been taking classes online since past 6 to 8 months and she has improved a lot. She really enjoys keyboard and it's amazing to see her attend her classes with interest and passion. Thank you Ms.Miriyam to guide my daughter and urging her to do the best",
    author: "- Divya ",
  },
  {
    quote:
      "I highly recommend Ms. Miriyam as a piano teacher! My 8-year-old daughter has been taking lessons with her for several months now, and the progress has been amazing. Ms. Miriyam is incredibly patient and dedicated, always taking the time to ensure my daughter understands each concept thoroughly.",
    author: "- Esther",
  },
];

function TestimonialBox() {
  return (
    <section className="section-testimonial-box ">
      <h1 className="testimonial-heading text-center margin-bottom-vsmall">
        TESTIMONIAL
      </h1>
      <p className="para text-center margin-bottom-medium">
        Discover what students are saying about
        their experience with Piano Lessons With
        Miriyam:
      </p>
      <div className="testimonial-box margin-bottom-large">
        {testimonials.map(
          (testimonial, index) => (
            <div
              className="testimonial-card"
              key={index}
            >
              <p className="para">
                {testimonial.quote}
              </p>
              <p className="para">
                {testimonial.author}
              </p>
            </div>
          )
        )}
      </div>
      <div className="testimonial-box">
        {" "}
        <a
          className="cta-btn "
          href="https://wa.me/+917338785700"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENQUIRE NOW
        </a>
      </div>
    </section>
  );
}

export default TestimonialBox;
