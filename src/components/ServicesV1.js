import "../css/Services.css";
function Services() {
  return (
    <section className="section-services section">
      <h1 className="services-heading text-center margin-bottom-large">
        Our Services
      </h1>
      <div className="container services-grid">
        <div className="services-card">
          <h1 className="card-heading">
            Individualized Lessons
          </h1>
          <img
            src="./img/service-img-1.png"
            alt=""
            className="service-img"
          />
          <p className="para">
            Tailored one-on-one piano sessions
            with experienced instructors,
            exclusively for ages 7 and above.
          </p>
        </div>
        <div className="services-card">
          <h1 className="card-heading">
            Exam Preparation
          </h1>
          <img
            src="./img/service-img-2.png"
            alt=""
            className="service-img"
          />
          <p className="para">
            Guided preparation for Graded Exams by
            Trinity College London and Royal
            Schools of Music (ABRSM)
          </p>
        </div>
        <div className="services-card">
          <h1 className="card-heading">
            offline / ONLINE Lessons
          </h1>
          <img
            src="./img/service-img-3.png"
            alt=""
            className="service-img"
          />
          <p className="para">
            With us you never miss a lesson. We
            provide virtual music lessons for
            those who prefer or require remote
            learning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
