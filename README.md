# QuestionsAPI Quiz App

Quiz App is a simple React app that fetches quiz questions from an external API and displays them in a multiple-choice format. The user can select answers, navigate between questions, and receive a final score at the end of the quiz.

### Features:
- Fetches quiz questions from [QuizAPI](https://quizapi.io/)
- Displays questions with multiple answer options
- Tracks the user's score
- Allows navigation between previous and next questions
- Displays the final score at the end of the quiz
- Option to restart the quiz

### Live Link
    https://quizz-app-three-blue.vercel.app/

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/livinalt/quizAppp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quizApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173` to interact with the quiz.

## Code Explanation

- **State Management**: 
  - `index`: Tracks the current question index.
  - `selectedOption`: Holds the answer option selected by the user.
  - `score`: Tracks the user's score.
  - `isQuizFinished`: Flags whether the quiz is completed.
  - `questions`: Stores the fetched questions.
  - `loading` and `error`: Handle API loading state and error reporting.

- **Fetching Data**:
  - `useEffect` is used to fetch questions from the QuizAPI on component mount.

- **Navigation**:
  - `handleNextButton`: Checks if the selected answer is correct and updates the score, then moves to the next question.
  - `handlePrevButton`: Allows navigation to the previous question.

- **Restart Quiz**:
  - `handleRestartQuiz`: Resets the state to restart the quiz from the beginning.

## API

The application fetches questions from the following API endpoint:

```
https://quizapi.io/api/v1/questions?apiKey=your-api-key&difficulty=Medium&limit=10&tags=WordPress
```

Make sure to replace the `apiKey` with your valid API key from QuizAPI.


## License

This project is licensed under the MIT License.

