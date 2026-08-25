import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizScreenProps = {
  currentQuestion: Question;
  selectedOption: string | null;
  isOptionsDisabled: boolean;
  onOptionPress: (option: string) => void;
  onNextQuestion: () => void;
};

export default function QuizScreen({
  currentQuestion,
  selectedOption,
  isOptionsDisabled,
  onOptionPress,
  onNextQuestion,
}: QuizScreenProps) {
  if (!currentQuestion) return null;

  const getOptionStyle = (option: string) => {
    if (selectedOption) {
      const isCorrect = option === currentQuestion.correctAnswer;
      if (isCorrect) return styles.correctOption;
      if (option === selectedOption && !isCorrect)
        return styles.incorrectOption;
    }
    return {};
  };

  const getOptionTextStyle = (option: string) => {
    if (selectedOption) {
      const isCorrect = option === currentQuestion.correctAnswer;
      if (isCorrect) return styles.correctOptionText;
      if (option === selectedOption && !isCorrect)
        return styles.incorrectOptionText;
    }
    return {};
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.option, getOptionStyle(option)]}
            onPress={() => onOptionPress(option)}
            disabled={isOptionsDisabled}
            activeOpacity={0.7}
          >
            <Text style={[styles.optionText, getOptionTextStyle(option)]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        {selectedOption ? (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={onNextQuestion}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.buttonPlaceholder} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    justifyContent: "space-between",
  },
  questionCard: {
    minHeight: 140,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C1C1E",
    textAlign: "center",
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 12,
    marginVertical: 20,
  },
  option: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#E5E5EA",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C2C2E",
  },
  correctOption: {
    borderColor: "#34C759",
    backgroundColor: "#E8F9ED",
  },
  correctOptionText: {
    color: "#1E7E34",
  },
  incorrectOption: {
    borderColor: "#FF3B30",
    backgroundColor: "#FEEBEE",
  },
  incorrectOptionText: {
    color: "#B00020",
  },
  footer: {
    height: 54,
  },
  nextButton: {
    backgroundColor: "#007AFF",
    height: "100%",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  buttonPlaceholder: {
    height: "100%",
  },
});
