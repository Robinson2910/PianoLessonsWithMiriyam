import "../css/testimonial.css";

const testimonials = [
  {
    quote:
      "Taking piano lessons with Miryam has been an amazing experience. As an adult beginner, I was a bit nervous, but Miryam's patient and encouraging teaching style helped me progress quickly. Her passion for music is contagious, and I look forward to every lesson!",
    author: "- Robin",
  },
  {
    quote:
      "I've been learning piano with Miryam, and it's been amazing! She makes understanding easy and encourages exploring various musical aspects. Miryam's patience and fun approach enhance the learning experience. I eagerly await each weekly lesson with excitement!",
    author: "- Jason",
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
