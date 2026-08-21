
---

```markdown
# 🧠 Quiz Mobile App

Um aplicativo de Quiz dinâmico e interativo desenvolvido em **React Native**, projetado para testar conhecimentos de forma fluida e intuitiva[cite: 1, 3, 4].

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ecossistema:

* **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento de aplicações móveis nativas usando JavaScript/TypeScript[cite: 1, 2, 3].
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código, garantindo mais segurança e legibilidade às props e componentes[cite: 1, 2, 3].
* **[Expo](https://expo.dev/)** *(Recomendado/Padrão)*: Plataforma/Tooling para facilitar a criação, execução e teste de projetos React Native.
* **StyleSheet (React Native)**: Estilização nativa para uma interface limpa, moderna e responsiva[cite: 1, 2, 3].

---

## 🏗️ Como o Projeto Foi Construído

A aplicação foi estruturada seguindo o conceito de **máquina de estados para fluxo de navegação** e **componentização reutilizável**, dividindo-se nas seguintes etapas e componentes:

1. **Controle de Estado Principal (`HomePage.tsx`)**[cite: 4]:
   * Gerencia as fases do jogo através do estado `gameStage` (`'start'` | `'quiz'` | `'result'`)[cite: 4].
   * Mantém o estado da pergunta atual (`currentQuestionIndex`), pontuação (`score`), opção selecionada (`selectedOption`) e desativação das alternativas após a escolha (`isOptionsDisabled`)[cite: 4].
   * Importa a lista de perguntas a partir de um arquivo JSON local (`questions.json`)[cite: 4].

2. **Tela Inicial (`StartScreen.tsx`)**[cite: 3, 4]:
   * Apresenta o título, boas-vindas e informações gerais como o número total de perguntas disponíveis e tentativas permitidas[cite: 3].
   * Contém o botão de ação para iniciar a partida[cite: 3, 4].

3. **Tela de Perguntas (`QuizScreen.tsx`)**[cite: 1, 4]:
   * Exibe a pergunta ativa e gera dinamicamente os botões para cada alternativa[cite: 1].
   * **Feedback Visual Instantâneo**: Ao clicar em uma alternativa, o app destaca a resposta correta em verde e, caso o usuário tenha errado, destaca a resposta incorreta em vermelho[cite: 1].
   * Bloqueia os botões após a seleção para evitar respostas múltiplas e exibe o botão para avançar para a próxima pergunta[cite: 1, 4].

4. **Tela de Resultado (`ResultScreen.tsx`)**[cite: 2, 4]:
   * Exibe o placar final detalhando quantas perguntas o usuário acertou do total[cite: 2].
   * Disponibiliza a opção de reiniciar o jogo e tentar novamente[cite: 2, 4].

---

## 📂 Estrutura de Arquivos

```text
├── components/
│   ├── StartScreen.tsx   # Tela inicial de boas-vindas
│   ├── QuizScreen.tsx    # Tela das perguntas e alternativas
│   └── ResultScreen.tsx  # Tela de encerramento e pontuação
├── pages/ (ou app/)
│   └── HomePage.tsx      # Componente principal / Gerenciador de estados
├── questions.json        # Base de dados com as perguntas e respostas
└── README.md             # Documentação do projeto

```

---

## 🚀 Como Executar o Projeto na Sua Máquina

Siga os passos abaixo para rodar o aplicativo localmente em seu computador.

### 📋 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

* **[Node.js](https://nodejs.org/)** (versão LTS recomendada)
* **[Git](https://git-scm.com/)**
* Gerenciador de pacotes **npm** ou **yarn**
* Aplicativo **Expo Go** instalado no seu celular (iOS ou Android) *para testar em dispositivo físico*.

---

### 📥 Passos para Instalação

1. **Clone o repositório:**
```bash
git clone [https://github.com/seu-usuario/seu-repositorio-quiz.git](https://github.com/seu-usuario/seu-repositorio-quiz.git)

```


2. **Acesse a pasta do projeto:**
```bash
cd seu-repositorio-quiz

```


3. **Instale as dependências:**
```bash
npm install
# ou
yarn install

```


4. **Inicie o servidor de desenvolvimento:**
```bash
npx expo start
# ou
npm start

```



---

### 📱 Como Visualizar o App

Após rodar o comando de início, um **QR Code** será exibido no seu terminal ou no navegador:

* **Dispositivo Físico (Celular)**:
1. Abra o aplicativo **Expo Go** no seu celular.
2. Escaneie o QR Code exibido no terminal.
3. O aplicativo carregará no seu aparelho!


* **Emuladores / Simuladores**:
* Pressione `a` no terminal para abrir no emulador **Android**.
* Pressione `i` no terminal para abrir no simulador **iOS** (apenas macOS).
* Pressione `w` no terminal para rodar a versão **Web**.



---

## 📝 Formato do Arquivo de Perguntas (`questions.json`)

Para adicionar ou alterar as perguntas do aplicativo, basta modificar o arquivo `questions.json` mantendo a estrutura abaixo:

```json
[
  {
    "question": "Qual é a capital do Brasil?",
    "options": ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
    "correctAnswer": "Brasília"
  }
]

```

```
