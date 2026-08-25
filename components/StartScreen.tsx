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
      <View style={styles.header}>
        <Text style={styles.title}>Quiz Do Contra</Text>
        <Text style={styles.subtitle}>Teste seus conhecimentos!</Text>
      </View>

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

      <TouchableOpacity
        style={styles.button}
        onPress={onStartGame}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Iniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 32,
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#1C1C1E",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6E6E73",
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    gap: 16,
  },
  infoBox: {
    width: 130,
    height: 120,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8E8E93",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 28,
    fontWeight: "700",
    color: "#007AFF",
  },
  infiniteText: {
    fontSize: 12,
    color: "#8E8E93",
    marginTop: 2,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    width: "100%",
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
