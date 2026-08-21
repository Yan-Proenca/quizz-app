import { useState } from "react";

import QuizScreen from "../components/QuizScreen";
import ResultScreen from "../components/ResultScreen";
import StartScreen from "../components/StartScreen";

import questions from "../questions.json";

export default function HomePage() {
  const [gameStage, setGameStage] = useState<"start" | "quiz" | "result">(
    "start",
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);

  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionsDisabled(false);
    setScore(0);
  };

  const handleStartQuiz = () => {
    resetGame();
    setGameStage("quiz");
  };

  const handleOptionPress = (option: string) => {
    if (currentQuestion && option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setSelectedOption(option);
    setIsOptionsDisabled(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);

      setSelectedOption(null);
      setIsOptionsDisabled(false);
    } else {
      setGameStage("result");
    }
  };

  const handlePlayAgain = () => {
    resetGame();
    setGameStage("quiz");
  };

  // Tela inicial
  if (gameStage === "start") {
    return (
      <StartScreen
        totalQuestions={questions.length}
        onStartGame={handleStartQuiz}
      />
    );
  }

  // Tela de resultado
  if (gameStage === "result") {
    return (
      <ResultScreen
        score={score}
        totalQuestions={questions.length}
        onPlayAgain={handlePlayAgain}
      />
    );
  }

  // Tela do quiz
  return (
    <QuizScreen
      currentQuestion={currentQuestion}
      selectedOption={selectedOption}
      isOptionsDisabled={isOptionsDisabled}
      onOptionPress={handleOptionPress}
      onNextQuestion={handleNextQuestion}
    />
  );
}
