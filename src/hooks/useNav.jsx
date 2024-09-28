import { useState } from "react";

const useNav = (initialIndex = 0, questionsLength = 0) => {

  const [index, setIndex] = useState(initialIndex);

  const handleNext = () => {
    if (index < questionsLength - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return {
    index,
    handleNext,
    handlePrev,
  };
};

export default useNav;
