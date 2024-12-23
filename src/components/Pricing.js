import "../css/Pricing.css";

const pricingData = [
  {
    name: "Basic Plan",
    price: "₹ 1999",
    sessions: "8 Learning Sessions!",
    features: [
      "30 min per session",
      "Individualized Lessons",
      "Exam Preparation",
      "Offline / Online Classes",
    ],
  },
  {
    name: "Premium Plan",
    price: "₹ 3750",
    sessions: "16 Learning Sessions!",
    features: [
      "30 min per session",
      "Individualized Lessons",
      "Exam Preparation",
      "Offline / Online Classes",
    ],
  },
];

function Pricing() {
  return (
    <section className="section-pricing section">
      <h1 className="pricing-heading text-center margin-bottom-large  ">
        Our Deals
      </h1>
      <div className="pricing-box container">
        {pricingData.map((plan, index) => (
          <div
            className="pricing-card"
            key={index}
          >
            <header className="plan-header">
              <p className="plan-name">
                {plan.name}
              </p>
              <p className="plan-price">
                {plan.price}
              </p>
              <p className="plan-text">
                {plan.sessions}
              </p>
            </header>
            <ul className="plan-list">
              {plan.features.map((feature, i) => (
                <li className="list-item" key={i}>
                  <ion-icon
                    name="checkmark-outline"
                    className="list-icon"
                  ></ion-icon>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="testimonial-box margin-top-large">
        <a
          className="cta-btn "
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
