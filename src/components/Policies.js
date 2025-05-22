import "../css/policies.css";

const policiesData = {
  headingText: "POLICIES",
  policyItems: [
    {
      title: "Fee Payment",
      description:
        "Monthly fees are to be paid on or before the 1st of every month.",
    },
    {
      title: "Attendance Policy",
      description:
        "Regular attendance is expected. Missed classes (without an emergency) will not be rescheduled or refunded.",
    },
    {
      title: "Practice Expectations",
      description:
        "Students are expected to practice regularly to see steady progress. Assignments should be reviewed before each class.",
    },
    {
      title: "Learning Materials",
      description:
        "Students must have a keyboard or piano at home. Bring required notebooks and assigned books to every class.",
    },
    {
      title: "Punctuality",
      description:
        "Classes will start and end on time. Late arrivals will not receive extra time.",
    },
    {
      title: "Parent Involvement",
      description:
        "For younger students, parents are encouraged to attend the first few sessions. Support with home practice is appreciated.",
    },
    {
      title: "Examination/Performance Readiness",
      description:
        "Students will be recommended for grade exams or performances only when fully ready, not just based on timelines.",
    },
    {
      title: "Class Conduct",
      description:
        "A positive and respectful attitude is expected during lessons. Disruptions can affect focus and learning.",
    },
  ],
};

export default function Policies() {
  return (
    <section className="section-policies section">
      <h2 className="policies-heading">
        {policiesData.headingText}
      </h2>
      <div className="container policies-grid">
        {policiesData.policyItems.map(
          (item, index) => (
            <div
              key={index}
              className="policy-card"
            >
              <h3 className="policy-title">
                {item.title}
              </h3>
              <p className="policy-description">
                {item.description}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
