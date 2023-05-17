// Quiz data
const quizData = [
    {
      question: "1.Which team won the FIFA World Cup 2018?",
      options: ["A.France", "B.Germany", "C.Brazil", "D.Argentina"],
      answer: 0
    },
    {
      question: "2.Who won the UEFA Champions League in 2020?",
      options: ["A.Bayern Munich", "B.Liverpool", "C.Real Madrid", "D.Barcelona"],
      answer: 0
    },
    {
      question: "3.Who is the all-time top scorer in the English Premier League?",
      options: ["A.Alan Shearer", "B.Wayne Rooney", "C.Thierry Henry", "D.Harry Kane"],
      answer: 0
    },
    {
      question: "4.Which player has won the most Ballon d'Or awards?",
      options: ["A.Cristiano Ronaldo", "B.Lionel Messi", "C.Michel Platini", "D.Johan Cruyff"],
      answer: 1
    },
    {
      question: "5.Which country has won the most FIFA World Cup titles?",
      options: ["A.Brazil", "B.Germany", "C.Italy", "D.Argentina"],
      answer: 0
    }
  ];
  
  // Quiz variables
  let currentQuestion = 0;
  let score = 0;
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const scoreText = document.getElementById("score");
  
  // Display the current question
  function showQuestion() {
    const questionData = quizData[currentQuestion];
    quizContainer.innerHTML = `
      <div class="question">
        <h2>${questionData.question}</h2>
      </div>
      <div class="options">
        ${questionData.options
          .map(
            (option, index) =>
              `<button onclick="checkAnswer(${index})">${option}</button>`
          )
          .join("")}
      </div>
    `;
  }
  
  // Check the selected answer
  function checkAnswer(selectedOption) {
    const questionData = quizData[currentQuestion];
    const selectedButton = event.target;
    const optionsButtons = Array.from(selectedButton.parentNode.children);
  
    optionsButtons.forEach((button) => {
      button.disabled = true;
    });
  
    if (selectedOption === questionData.answer) {
      selectedButton.classList.add("tick");
      score++;
    } else {
      selectedButton.classList.add("cross");
    }
  
    currentQuestion++;
  
    if (currentQuestion === quizData.length) {
      showResult();
    } else {
      setTimeout(showQuestion, 1000);
    }
  }
  
  // Display the quiz result
  function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreText.textContent = `You scored ${score} out of ${quizData.length}`;
  }
  
  // Replay the quiz
  document.getElementById("replay").addEventListener("click", function() {
    currentQuestion = 0;
    score = 0;
    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    showQuestion();
  });
  
  // Quit the quiz
  document.getElementById("quit").addEventListener("click", function() {
    window.close(); // Closes the browser tab/window
  });
  
  // Start the quiz
  showQuestion();
  