import { useState } from "react";
import "../Questions/index";
import Questions from "../Questions/index";

const QuestionBox = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); 
  const [score, setScore] = useState(0); 
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextButton = () => {
    if (selectedOption === Questions[index].answer) {
      setScore(score + 1);
    }

    if (index < Questions.length - 1) {
      setIndex(index + 1);
      setSelectedOption(null);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handlePrevButton = () => {
      if (index > 0) {
        setIndex(index - 1);
        setSelectedOption(null); 
      }
    };

    if (isQuizFinished) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-lg p-8 border border-gray-300 rounded-md shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
            <p>
              Your Score: {score} out of {Questions.length}
            </p>
          </div>
        </div>
      );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg p-8 border border-gray-300 rounded-md shadow-md">
        <div className="mb-6 flex flex-col text-center">
          <p>
            Question {index + 1} of {Questions.length}
          </p>
          <h2 className="text-2xl font-semibold text-center">
            {Questions[index].question}
          </h2>
          <hr className="mt-2" />
        </div>

        <div className="space-y-4">
          {Object.entries(Questions[index].options[0]).map(([key, value]) => (
            <div
              key={key}
              onClick={() => handleOptionSelect(value)}
              className={`flex items-center space-x-4 cursor-pointer p-3 rounded-md border ${
                selectedOption === value
                  ? "border-blue-700 bg-blue-200"
                  : "border-gray-300"
              }`}
            >
              <div className="font-semibold">{key.toUpperCase()}</div>
              <div>{value}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <div>
            <button
              onClick={handlePrevButton}
              className="px-9, py-3, outline-1 outline-blue-700 text-blue-700 hover:outline-1 hover:outline-red-700"
            >
              Back
            </button>
          </div>

          <div>
            <button
              onClick={handleNextButton}
              className="px-9, py-3, bg-blue-700 text-white hover:bg-red-500"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
