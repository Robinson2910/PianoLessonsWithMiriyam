import { useEffect } from "react";

const useScrollAndIntersectionObserver = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener(
      "beforeunload",
      handleBeforeUnload
    );

    const allSections =
      document.querySelectorAll(".section");

    const revealSection = function (
      entries,
      observer
    ) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove(
        "section--hidden"
      );
      observer.unobserve(entry.target);
    };

    const sectionObserver =
      new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.1,
      });

    allSections.forEach((section) => {
      section.classList.add("section--hidden");
      sectionObserver.observe(section);
    });

    return () => {
      window.removeEventListener(
        "beforeunload",
        handleBeforeUnload
      );
      allSections.forEach((section) =>
        sectionObserver.unobserve(section)
      );
    };
  }, []);
};

export default useScrollAndIntersectionObserver;
