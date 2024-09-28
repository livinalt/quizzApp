import { useState, useEffect } from "react";


const QuestionsAPI = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://quizapi.io/api/v1/questions?apiKey=yqDY3AUax7N8bavucRu1n7lbQz1VRSjB9cwN1mYY&difficulty=Medium&limit=10&tags=WordPress"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }

        const data = await response.json();
        setQuestions(data);
        setLoading(false);

      } 
      
      catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuestions();

  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextButton = () => {
    const correctAnswerKey = Object.keys(questions[index].correct_answers).find(
      (key) => questions[index].correct_answers[key] === "true"
    );

    if (selectedOption === correctAnswerKey.replace("Right", "")) {
      setScore(score + 1);
    }

    if (index < questions.length - 1) {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isQuizFinished) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-lg p-8 border border-gray-300 rounded-md shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
          <p>
            Your Score: {score} out of {questions.length}
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
            Question {index + 1} of {questions.length}
          </p>
          <h2 className="text-2xl font-semibold text-center">
            {questions[index].question}
          </h2>
          <hr className="mt-2" />
        </div>

        {Object.keys(questions[index].answers).map((key) => {
          const value = questions[index].answers[key];
          if (value !== null) {
            return (
              <div
                key={key}
                onClick={() => handleOptionSelect(key)}
                className={`flex items-center space-x-4 cursor-pointer p-3 rounded-md border ${
                  selectedOption === key
                    ? "border-blue-100 bg-blue-800"
                    : "border-gray-300"
                }`}
              >
                <div className="font-semibold">{key.toUpperCase()}</div>
                <div>{value}</div>
              </div>
            );
          }
          return null;
        })}

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevButton}
            className="px-9 py-3 outline outline-blue-700 text-blue-700 hover:outline-red-700"
          >
            Back
          </button>
          <button
            onClick={handleNextButton}
            className="px-9 py-3 bg-blue-700 text-white hover:bg-red-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAPI;
