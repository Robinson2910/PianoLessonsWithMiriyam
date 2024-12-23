import { useState } from "react";
import { useEffect } from "react";
import "../css/faq.css";
import Accordion from "./Accordion";

const faqData = {
  headingText: "FREQUENTLY ASKED QUESTIONS",
  faqItems: [
    {
      question:
        "How often should I practice the piano??",
      answer:
        "Regular practice is key to improvement. Aim for at least 20-30 minutes a day, gradually increasing as you become more comfortable with your playing.",
    },
    {
      question:
        "Do I need any prior musical experience to join the piano class?",
      answer:
        " No prior experience is required. Our classes cater to beginners as well as those with some musical background. Our instructors adapt lessons to suit individual skill levels.",
    },
    {
      question:
        "What age is suitable to start learning the piano?",
      answer:
        "Generally, children around 7 or 8 years old can start, but there's no upper age limit! Piano lessons can be tailored to any age group, ensuring a rewarding experience for everyone.",
    },
    {
      question:
        "Do I need to own a piano before starting the class?",
      answer:
        "While having a piano or keyboard at home is beneficial for regular practice, it's not immediately necessary. Many students begin with a keyboard and progress to an acoustic piano later.",
    },
    {
      question:
        "How long will it take to become proficient in playing the piano?",
      answer:
        "Proficiency varies from person to person and depends on practice consistency. Regular practice combined with attentive learning usually leads to noticeable progress within a few months.",
    },
  ],
  answerBoxHeading: "Answer",
};
export default function FAQ() {
  const [questionNo, setQuestionNo] = useState(0);
  function handleButtonClick(num) {
    setQuestionNo(num);
  }

  const largeScreenContent = (
    <section className="section-faq section">
      <h2 className="faq-heading">
        {faqData.headingText}
      </h2>
      <div className="container faq-box">
        <div className="questions-box">
          {faqData.faqItems.map((item, index) => (
            <QuestionBtn
              key={index}
              text={item.question}
              num={index}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
        <div className="answer-box">
          <h2 className="answer-box-heading">
            {faqData.answerBoxHeading}
          </h2>
          <p className="answer">
            {faqData.faqItems[questionNo].answer}
          </p>
        </div>
      </div>
    </section>
  );
  const smallScreenContent = (
    <section className="section-faq">
      <h2 className="faq-heading">
        {faqData.headingText}
      </h2>
      <Accordion data={faqData.faqItems} />
    </section>
  );
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth
  );

  // Function to check if the screen width is below a certain breakpoint
  function isSmallScreen() {
    return windowWidth <= 944; // Adjust the breakpoint as needed
  }

  // Update the windowWidth state when the window is resized
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return isSmallScreen()
    ? smallScreenContent
    : largeScreenContent;
}
function QuestionBtn({
  text,
  onButtonClick,
  num,
}) {
  return (
    <button
      className="question-btn"
      onClick={() => onButtonClick(num)}
    >
      {text}
    </button>
  );
}
