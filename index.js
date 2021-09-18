var readLineSync = require("readline-sync");
var userName = readLineSync.question("What is your name? ");

console.log("Welcome " + userName.toUpperCase() + " to \"HOW WELL DO YOU KNOW ME?\"\n");

var score = 0;

var highScores = [{
        name: "Ozair",
        score: '5'
    },
    {
        name: "Ricky",
        score: '2'
    }
]

var questionOne = {
    question: "Where do I live (city)? ",
    answer: "Hyderabad"
}

var questionTwo = {
    question: "Who is my favorite actor? ",
    answer: "Shahrukh Khan"
}

var questionThree = {
    question: "Which is my favorite food? ",
    answer: "Biryani"
}

var questionFour = {
    question: "What is my month of birth? ",
    answer: "October"
}

var questionFive = {
    question: "Which is my favortite cartoon? ",
    answer: "Chota Bheem"
}

var listOfQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

function play(question, answer) {
    var userAnswer = readLineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("Correct!");
        score = score + 1;
    } else {
        console.log("Wrong!");
    }
    console.log("Current score: " + score);
    console.log("--------------");
}

function playGame() {
    for (let i = 0; i < listOfQuestions.length; i++) {
        var currentQuestion = listOfQuestions[i];
        play(currentQuestion.question, currentQuestion.answer);
    }
    console.log("Yay! you scored " + score + "\n");
}

function showHighScores() {
    console.log("Current highscores : ");
    for (let i = 0; i < highScores.length; i++) {
        console.log(highScores[i].name + ": " + highScores[i].score);
    }
    console.log("If you scored more than highest scorers ping me :) ");
}

playGame();
showHighScores();