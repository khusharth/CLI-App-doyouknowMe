const readlineSync = require("readline-sync");
const chalk = require('chalk');

// Chalk Theme 
const error = chalk.bold.red; //
const success = chalk.bold.green;
const primary = chalk.white.bgBlue.bold;

const userName = readlineSync.question(`${primary('Hello!')} 👋 \nCan you please tell me your name? `);
console.clear();

console.log(`Welcome ${chalk.bold(`${userName}`)} to ${primary('DO YOU KNOW Khusharth?')} 👀 \n`);

console.log('🔮 Lets start with the Quiz 🔮')

let score = 0;
const highscore = 4;

const highscores = [
  {
    name: 'Kimberly',
    score: 5
  },
  {
    name: 'Merul',
    score: 4
  },
  {
    name: 'Rithik',
    score: 3
  }
]

// Play function
function play(question,options, answer) {
  var userAnswer = readlineSync.keyInSelect(options,primary(question), {cancel: false});

  if (userAnswer == answer) {
    console.log(success("\nYou are Right! 🥳 \n"));
    score++;
  } else {
    console.log(error("\nNope! You don't know me 🤧 \n"));
  }

  console.log("Current Score: " + score);
  console.log("------------------------");
}

// Questions 
var questions = [{
  question: "Where do I live? ",
  options: ["Jaipur", "Delhi", "Bangalore", "Goa"],
  answer: 0
}, {
  question: "Name of my favourite song? ",
  options: ["Hello", "Beautiful Now", "Blue Eyes", "Selfie maine leli aaj"],
  answer: 1
}, {
  question: "What is my favorite Movie genre?",
  options: ["Sci-Fi", "Horror", "Comedy", "Action"],
  answer: 0
}, {
  question: "Do i use Tabs or Spaces in my code? ",
  options: ["Space", "Tabs"],
  answer: 1
}, {
  question: "Which Javascript framework/library I like the most?",
  options: ["Svelte", "Angular", "React", "Vue"],
  answer: 2
}
];

// Display Quiz
for (let i = 0; i < questions.length; i++) {
  var {question, options, answer} = questions[i];

  play(`Q${i+1}] ${question}`, options, answer);
}

console.clear();
const highscoreText = (score > highscore) ? "\nCongrats! You have beaten the highscore 🔥 \nYou can send me a screenshot if you want to me add your name below 👇" : "\nYou were not able to beat the highscore! 😵";
console.log(highscoreText);
console.log(`Your final score: ${score}`);
console.log(`\n--------🌟  ${primary('Highscores')} 🌟--------`);
console.table(highscores);