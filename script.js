let questions = [
  {
    question: "What Does HTML Stand For?",
    a: "Hyper Text Preprocessor",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Multiple Language",
    d: "Hyper Tool Multi Language",
    currect: "b",
  },

  {
    question: "What Does HTML Stand For?",
    a: "Hyper Text Preprocessor",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Multiple Language",
    d: "Hyper Tool Multi Language",
    currect: "b",
  },
  {
    question: "What Does HTML Stand For?",
    a: "Hyper Text Preprocessor",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Multiple Language",
    d: "Hyper Tool Multi Language",
    currect: "b",
  },

  {
    question: "What Does HTML Stand For?",
    a: "Hyper Text Preprocessor",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Multiple Language",
    d: "Hyper Tool Multi Language",
    currect: "b",
  },

  {
    question: "What Does HTML Stand For?",
    a: "Hyper Text Preprocessor",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Multiple Language",
    d: "Hyper Tool Multi Language",
    currect: "b",
  },
];

const questionDisplay = document.getElementById("questionDisplay");
const input = document.querySelectorAll(".input");
let total = questions.length;
let index = 0;
let right = 0;
wrong = 0;

function loadQuestion() {
  if (index === total) {
    endQuiz();
  }
  reset();
  let que = questions[index];
  questionDisplay.innerText = `${index + 1}) ${que.question}`;
  input[0].nextElementSibling.innerText = que.a;
  input[1].nextElementSibling.innerText = que.b;
  input[2].nextElementSibling.innerText = que.c;
  input[3].nextElementSibling.innerText = que.d;
}

function submitBtn() {
  let ans;
  input.forEach((input) => {
    if (input.checked) {
      ans = input.value;
    }
  });
  return ans;
}

document.querySelector("#btn").addEventListener("click", () => {
  let que = questions[index];
  let sub = submitBtn();
  if (sub === que.currect) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
});

function reset() {
  input.forEach((input) => {
    if (input) {
      input.checked = false;
    }
  });
}
function endQuiz() {
  document.querySelector(".box").innerHTML = `
      <h2>Thank You So Much !</h2>
      <h2>${right} / ${total} are correct</h2>
      `;
}
loadQuestion();
