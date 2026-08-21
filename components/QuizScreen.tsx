import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import questions from "../questions.json";

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  // Trata o clique na opção
  const handleOptionPress = (option: string) => {
    if (option === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedOption(option);
    setIsOptionsDisabled(true);
  };

  // Avança para a próxima pergunta
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      setIsOptionsDisabled(false);
    } else {
      console.log("FIM DO QUIZ! Pontuação Final:", score);
      // Aqui você adicionará a navegação para a tela de resultados
    }
  };

  // Retorna os estilos dinâmicos da opção selecionada
  const getOptionStyle = (option: string) => {
    if (selectedOption) {
      const isCorrect = option === currentQuestion.correctAnswer;
      if (isCorrect) {
        return styles.correctOption;
      }
      if (option === selectedOption && !isCorrect) {
        return styles.incorrectOption;
      }
    }
    return {};
  };

  if (!currentQuestion) return null;

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Pontuação: {score}</Text>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.option, getOptionStyle(option)]}
            onPress={() => handleOptionPress(option)}
            disabled={isOptionsDisabled}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedOption && (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextQuestion}
        >
          <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 16,
  },
  questionContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    justifyContent: "center",
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  option: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#e0e0e0",
  },
  optionText: {
    fontSize: 18,
  },
  correctOption: {
    borderColor: "#4CAF50",
    backgroundColor: "#D4EDDA",
    borderWidth: 2,
  },
  incorrectOption: {
    borderColor: "#F44336",
    backgroundColor: "#F8D7DA",
    borderWidth: 2,
  },
  nextButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  scoreContainer: {
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
