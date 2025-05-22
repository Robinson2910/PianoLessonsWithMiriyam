import "../css/Pricing.css";

const lessonsData = [
  {
    name: "Beginner to Advanced",
    description: "Comprehensive Piano Lessons",
    features: [
      "Personalized learning approach",
      "Individualized attention",
      "Flexible scheduling",
      "Both online and offline options",
    ],
  },
  {
    name: "Grade Exam Preparation",
    description: "Practical & Theory Training",
    features: [
      "Complete exam preparation",
      "Theory and practical training",
      "Performance practice",
      "Regular progress assessment",
    ],
  },
];

function Pricing() {
  return (
    <section className="section-pricing section">
      <h1 className="pricing-heading text-center margin-bottom-large">
        Lessons Offered
      </h1>
      <div className="pricing-box container">
        {lessonsData.map((lesson, index) => (
          <div
            className="pricing-card"
            key={index}
          >
            <header className="plan-header">
              <p className="plan-name">
                {lesson.name}
              </p>
              {/* <p className="plan-text">
                {lesson.description}
              </p> */}
            </header>
            <ul className="plan-list">
              {lesson.features.map(
                (feature, i) => (
                  <li
                    className="list-item"
                    key={i}
                  >
                    <ion-icon
                      name="checkmark-outline"
                      className="list-icon"
                    ></ion-icon>
                    <p>{feature}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="testimonial-box margin-top-large">
        <a
          className="cta-btn"
          href="https://wa.me/+917338785700"
          target="_blank"
          rel="noopener noreferrer"
        >
          BOOK TODAY
        </a>
      </div>
    </section>
  );
}

export default Pricing;
