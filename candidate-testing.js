const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

let candidateName = "";
let candidateAnswer = "";
let question = "Who was the first American woman in space? "
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswer = "Sally Ride"
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question("Candidate Name: ");
  return candidateName;
}

function askQuestions() {
  let userAnswers = [];
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = input.question(i+1 + ")" + questions[i] + "\nYour Answer: ");
    userAnswers.push(userAnswer);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }
  return userAnswers;
}

function gradeQuiz(candidateAnswers) {
  let grade = 0;
  let status = "";
  let numCorrect = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      numCorrect++;
    }
  }
  grade = numCorrect / correctAnswers.length * 100;
  if (grade > 79) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }
  console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of ${correctAnswers.length} responses correct) <<<\n>>> Status: ${status} <<<`);

  return grade;
}

function runProgram() {
  this.candidateName = askForName();
  this.candidateAnswers = askQuestions(this.questions, this.correctAnswers);
  
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