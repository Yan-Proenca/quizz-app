Aqui está o seu `README.md` atualizado, incorporando a nova seção detalhada com as funcionalidades recentemente desenvolvidas (Menu de Start/Tela Inicial, Layout de Ambiente com SafeArea, Navegação por Expo Router e Design System consistente), além dos desafios e aprendizados técnicos envolvidos.

````markdown
# 🧠 Quiz Mobile App

Um aplicativo de Quiz dinâmico e interativo desenvolvido em **React Native**, projetado para testar conhecimentos de forma fluida, responsiva e intuitiva.

---

## ✨ Funcionalidades e Layouts Atualizados

### 📌 Funcionalidade Adicional: Menu de Start e Novo Layout de Ambiente

- **O que faz**: O aplicativo conta com um fluxo de tela inicial (_Start Screen_) totalmente estilizado que apresenta as regras básicas (número de perguntas e tentativas) e fornece um ponto de entrada claro para o quiz.
- **Como funciona**:
  - **Layout de Ambiente Seguro (`_layout.tsx` e `HomePage` / `SafeAreaView`)**: O app agora utiliza um contêiner global com `SafeAreaView` e `StatusBar` configurada via Expo Router, garantindo que o layout se ajuste perfeitamente a dispositivos com _notch_, ilha dinâmica ou barras de navegação sem cortar nenhum conteúdo.
  - **Design System Unificado**: Padronização visual com paleta de cores moderna (tons claros de fundo `#F5F5F7`, destaque azul `#007AFF`, cartões brancos elevados com sombras sutis), tipografia legível e feedback tátil em botões (`activeOpacity`).
  - **Fluxo Dinâmico**: Ao pressionar "Iniciar Jogo", a máquina de estados altera o estágio para a tela de perguntas (`QuizScreen`), e ao final, redireciona para a tela de resultado (`ResultScreen`), permitindo reiniciar o quiz a qualquer momento.

### 💡 Desafios e Aprendizados

- **Safe Area & Layouts de Dispositivos Móveis**: Precisei pesquisar sobre a correta aplicação do `SafeAreaView` e da propriedade `contentStyle` no `Stack` do `expo-router` para manter uma cor de fundo uniforme em toda a aplicação sem deixar lacunas nas margens da tela do dispositivo.
- **Consistência de Cores e Feedback Visual**: Foi necessário refatorar os estilos entre componentes (`StartScreen`, `QuizScreen`, `ResultScreen`) para eliminar conflitos de cor de fundo (como tons de verdes diferentes).
- **Gerenciamento de Estados e Transições**: Ajustes no fluxo de estados para garantir que, ao avançar de pergunta ou resetar o jogo, a interface não sofra com saltos de layout (_layout shift_), mantendo seletores e botões alinhados.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ecossistema:

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento de aplicações móveis nativas usando JavaScript/TypeScript.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código, garantindo mais segurança e legibilidade às props e componentes.
- **[Expo](https://expo.dev/) / [Expo Router](https://docs.expo.dev/router/introduction/)**: Plataforma e roteamento baseado em arquivos para facilitar a navegação, execução e testes do aplicativo.
- **StyleSheet (React Native)**: Estilização nativa com suporte a elevações e sombras para uma interface moderna e responsiva.

---

## 🏗️ Como o Projeto Foi Construído

A aplicação foi estruturada seguindo o conceito de **máquina de estados para fluxo de navegação** e **componentização reutilizável**, dividindo-se nas seguintes etapas e componentes:

1. **Configuração de Layout e Roteamento (`app/_layout.tsx`)**:
   - Define o container global da aplicação, estilizando a `StatusBar` nativa e garantindo o fundo uniforme `#F5F5F7` em todas as rotas.

2. **Controle de Estado Principal (`HomePage.tsx` / `index.tsx`)**:
   - Gerencia as fases do jogo através do estado `gameStage` (`'start'` | `'quiz'` | `'result'`).
   - Mantém o estado da pergunta atual (`currentQuestionIndex`), pontuação (`score`), opção selecionada (`selectedOption`) e desativação das alternativas após a escolha (`isOptionsDisabled`).
   - Importa a lista de perguntas a partir do arquivo `questions.json`.
   - Envolve os componentes em um `SafeAreaView` para garantir a exibição perfeita em qualquer tela.

3. **Tela Inicial (`StartScreen.tsx`)**:
   - Apresenta o título, boas-vindas e informações gerais como o número total de perguntas disponíveis e tentativas permitidas.
   - Contém o botão de ação para iniciar a partida com efeito visual de toque.

4. **Tela de Perguntas (`QuizScreen.tsx`)**:
   - Exibe a pergunta ativa dentro de um cartão destacado e gera dinamicamente as opções de resposta.
   - **Feedback Visual Instantâneo**: Ao clicar em uma alternativa, destaca a resposta correta em verde e, caso o usuário erre, em vermelho.
   - Bloqueia os botões após a seleção para evitar respostas múltiplas e exibe o botão para avançar para a próxima pergunta.

5. **Tela de Resultado (`ResultScreen.tsx`)**:
   - Exibe a pontuação final de forma clara e destacada em um cartão de resumo.
   - Disponibiliza a opção de reiniciar o jogo e tentar novamente.

---

## 📂 Estrutura de Arquivos

```text
├── app/
│   ├── _layout.tsx       # Configuração de layout global e StatusBar (Expo Router)
│   └── index.tsx         # Página principal / Gerenciador de estados (HomePage)
├── components/
│   ├── StartScreen.tsx   # Tela inicial do jogo
│   ├── QuizScreen.tsx    # Tela das perguntas e alternativas
│   └── ResultScreen.tsx  # Tela de encerramento e pontuação
├── questions.json        # Base de dados com as perguntas e respostas
└── README.md             # Documentação do projeto
```
````

---

## 🚀 Como Executar o Projeto na Sua Máquina

Siga os passos abaixo para rodar o aplicativo localmente em seu computador.

### 📋 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão LTS recomendada)
- **[Git](https://git-scm.com/)**
- Gerenciador de pacotes **npm** ou **yarn**
- Aplicativo **Expo Go** instalado no seu celular (iOS ou Android) _para testar em dispositivo físico_.

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

- **Dispositivo Físico (Celular)**:

1. Abra o aplicativo **Expo Go** no seu celular.
2. Escaneie o QR Code exibido no terminal.
3. O aplicativo carregará no seu aparelho!

- **Emuladores / Simuladores**:
- Pressione `a` no terminal para abrir no emulador **Android**.
- Pressione `i` no terminal para abrir no simulador **iOS** (apenas macOS).
- Pressione `w` no terminal para rodar a versão **Web**.

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

```
