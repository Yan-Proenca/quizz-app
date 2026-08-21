import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type StartScreenProps = {
  totalQuestions: number;
  onStartGame: () => void;
};

export default function StartScreen({
  totalQuestions,
  onStartGame,
}: StartScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz</Text>

      <Text style={styles.subtitle}>Teste seus conhecimentos!</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Perguntas</Text>

          <Text style={styles.infoValue}>{totalQuestions}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Tentativas</Text>

          <Text style={styles.infoValue}>∞</Text>

          <Text style={styles.infiniteText}>Infinitas</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={onStartGame}>
        <Text style={styles.buttonText}>Iniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 24,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 40,
  },

  infoContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 40,
  },

  infoBox: {
    width: 140,
    minHeight: 120,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 4,
  },

  infoLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },

  infoValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#007BFF",
  },

  infiniteText: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },

  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 12,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
