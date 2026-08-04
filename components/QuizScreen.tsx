import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QuizScreen() {
  return (
    <View style={styles.container}>
      {/* Container para a Pergunta */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          Qual propriedade do Flexbox é usada para distribuir os itens ao longo
          do eixo principal?
        </Text>
      </View>

      {/* Container para as Alternativas */}
      <View style={styles.optionsContainer}>
        {/* Usamos TouchableOpacity para dar feedback de toque */}
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>A) alignItems</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>B) justifyContent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>C) flexDirection</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>D) flexWrap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o container principal ocupar a tela inteira
    backgroundColor: "#f0f8ff",
    padding: 16, // Um espaçamento geral nas bordas da tela
  },
  questionContainer: {
    flex: 1, // Faz este container ocupar metade do espaço disponível
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    justifyContent: "center", // Centraliza o conteúdo (o Text) na vertical
    marginBottom: 20, // Uma margem para separar da área de opções
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center", // Centraliza o texto dentro do componente Text
  },
  optionsContainer: {
    flex: 1, // Faz este container ocupar a outra metade do espaço
    justifyContent: "space-around", // Distribui as opções com espaço igual ao redor
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
});
