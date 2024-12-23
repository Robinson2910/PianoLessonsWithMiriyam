import "../css/benefits.css";
function Benefits() {
  return (
    <section className="section-benefits section">
      <h1 className="benefits-heading container benefits-hidden-l">
        <>benefits of learning</>

        <strong> the piano </strong>
      </h1>
      <h1 className="benefits-heading container benefits-hidden-sm">
        <>benefits of learning</>
        <br />
        <strong> the piano </strong>
      </h1>
      <div className=" benefits-container">
        <div className="img-box">
          <img
            src="./img/benefits-img.png"
            alt="A Girl playing Piano"
          />
        </div>
        <div className="content-box">
          <div className="benefit-box">
            <img
              src="./img/mind.png"
              alt="Icon representing the concept of 'mind'"
              className="benefits-icon"
            />
            <div>
              <h2 className="benefit-heading ">
                Cognitive Development
              </h2>
              <p className="para">
                Playing the piano enhances
                cognitive skills such as memory,
                concentration, and
                problem-solving, contributing to
                your child's overall intellectual
                development.
              </p>
            </div>
          </div>
          <div className="benefit-box">
            <img
              src="./img/creativity.png"
              alt="Icon representing the concept of 'creativity'"
              className="benefits-icon"
            />
            <div>
              <h2 className="benefit-heading ">
                Discipline and Focus
              </h2>
              <p className="para">
                Piano lessons instill discipline
                and focus as your child commits to
                regular practice, fostering
                essential life skills that extend
                beyond the realm of music.
              </p>
            </div>
          </div>
          <div className="benefit-box">
            <img
              src="./img/ingenuity.png"
              alt="Icon representing the concept of 'ingenuity'"
              className="benefits-icon"
            />
            <div>
              <h2 className="benefit-heading ">
                Emotional Expression
              </h2>
              <p className="para">
                Learning the piano provides a
                creative outlet for your child to
                express emotions, fostering
                artistic expression and a deeper
                connection to the world of music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
