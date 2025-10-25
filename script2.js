// -------- Interactive Quiz --------
const quizData = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS"
  },
  {
    question: "What does JS stand for?",
    options: ["Java System", "JavaScript", "Just Script", "Join Style"],
    answer: "JavaScript"
  },
  {
    question: "Which HTML tag is used to include JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script>"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  let current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  current.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(option);
    optionsEl.appendChild(button);
  });
}
function selectAnswer(selected) {
  let correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  nextBtn.style.display = "inline-block";
}
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
    nextBtn.style.display = "none";
  }
});
loadQuestion();
nextBtn.style.display = "none";


// -------- Fetch API Example --------
document.getElementById("fetchJokeBtn").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("jokeDisplay").innerHTML = `${data.setup} 😂 <br><b>${data.punchline}</b>`;
    })
    .catch(error => {
      document.getElementById("jokeDisplay").innerText = "Failed to fetch a joke!";
      console.error(error);
    });
});
