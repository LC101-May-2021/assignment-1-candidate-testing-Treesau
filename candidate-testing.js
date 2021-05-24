const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  candidateAnswer = input.question(question);
}

function gradeQuiz(candidateAnswers) {
  if (candidateAnswer === correctAnswer){
    console.log("Correct! Congratulations " + candidateName + ".")
  }
  else{
    console.log("Sorry, " + candidateName + ", your answer was incorrect.")
  }
  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};