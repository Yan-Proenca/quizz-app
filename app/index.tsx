// app/index.tsx

import { useState } from "react";
import QuizScreen from "../components/QuizScreen";
import ResultScreen from "../components/ResultScreen";
import questions from "../questions.json";

export default function HomePage() {
  // Todos os estados agora vivem aqui, no componente pai
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);

  // NOVO: Estado para controlar se o quiz terminou
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionPress = (option: string) => {
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(option);
    setIsOptionsDisabled(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsOptionsDisabled(false);
    } else {
      // Quando as perguntas acabam, mudamos o estado para finalizado
      setIsQuizFinished(true);
    }
  };

  const handlePlayAgain = () => {
    // Lógica que será implementada no próximo capítulo
    console.log("Reiniciando o jogo...");
  };

  // Renderização Condicional: decide qual tela mostrar
  return isQuizFinished ? (
    <ResultScreen
      score={score}
      totalQuestions={questions.length}
      onPlayAgain={handlePlayAgain}
    />
  ) : (
    <QuizScreen
      currentQuestion={currentQuestion}
      selectedOption={selectedOption}
      isOptionsDisabled={isOptionsDisabled}
      onOptionPress={handleOptionPress}
      onNextQuestion={handleNextQuestion}
    />
  );
}
