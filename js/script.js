// Variables
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizContainer = document.querySelector("#quiz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;


// Questions
const questions = [
    {
      "question": "Qual o comando para escrever no console em JS?",
      "answers": [
        {
          "answer": "console.log(var)",
          "correct": true
        },
        {
          "answer": "print.log(var)",
          "correct": false
        },
        {
          "answer": "show_debug_message(var)",
          "correct": false
        },
        {
          "answer": "println(var)",
          "correct": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "answers": [
        {
          "answer": "$var",
          "correct": false
        },
        {
          "answer": "var",
          "correct": true
        },
        {
          "answer": "@var",
          "correct": false
        },
        {
          "answer": "#let",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "answers": [
        {
          "answer": "#",
          "correct": true
        },
        {
          "answer": ".",
          "correct": false
        },
        {
          "answer": "@",
          "correct": false
        },
        {
          "answer": "/",
          "correct": false
        },
      ]
    },
  ]

// Starting Quiz
function init() {
    //creating first question
    console.log("Começou!");
    createQuestion(0);
}

// creating a question
function createQuestion(i) {
    const oldButtons = answersBox.querySelectorAll("button");
    oldButtons.forEach(function(btn) {
        btn.remove();
    })

    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;
}

init();