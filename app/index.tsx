import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

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

  const renderContent = () => {
    if (gameStage === "start") {
      return (
        <StartScreen
          totalQuestions={questions.length}
          onStartGame={handleStartQuiz}
        />
      );
    }

    if (gameStage === "result") {
      return (
        <ResultScreen
          score={score}
          totalQuestions={questions.length}
          onPlayAgain={handlePlayAgain}
        />
      );
    }

    return (
      <QuizScreen
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        isOptionsDisabled={isOptionsDisabled}
        onOptionPress={handleOptionPress}
        onNextQuestion={handleNextQuestion}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{renderContent()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
