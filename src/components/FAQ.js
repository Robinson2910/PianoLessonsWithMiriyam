import { useState } from "react";
import { useEffect } from "react";
import "../css/faq.css";
import Accordion from "./Accordion";

const faqData = {
  headingText: "FREQUENTLY ASKED QUESTIONS",
  faqItems: [
    {
      question:
        "Do you offer both online and offline piano lessons?",
      answer:
        "Yes, I offer both online and offline lessons to suit your preference.",
    },
    {
      question: "What skill levels do you teach?",
      answer:
        "I teach all levels—from beginners to advanced players.",
    },
    {
      question:
        "What equipment do I need for online lessons?",
      answer:
        "You need a piano or keyboard, a device with a camera, and a stable internet connection.",
    },
    {
      question: "How do I sign up for lessons?",
      answer:
        "You can contact me directly at +91 - 7338785700, and I'll help you get started.",
    },
    {
      question:
        "Can I switch between online and offline lessons?",
      answer:
        "Yes, you can switch anytime based on what works best for you.",
    },
    {
      question:
        "Do you prepare students for grade examinations?",
      answer:
        "Yes, I guide and prepare students who wish to take piano grade exams",
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
