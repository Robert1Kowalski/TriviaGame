var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById('submit');


//build questions to objects

var myQuestions = [
  {
  question: "Who is the current Denver Broncos Quarterback?",
  answers: {
    a: "Superman",
    b: "Joe Flaco",
    c: "Ted Bundy",
  },
    correctAnswer: "b"
  },
  {
    question: "When was the Broncos Last Super Bowl Win?",
    answers: {
      a: "2015",
      b: "1845",
      c: "1991",

    },
    correctAnswer: "a",
  },
{
  question: "Who is the Broncos Head Coach?",
  answers: {
    a: "Chuck Berry",
    b: "Mary Todd Lincoln",
    c: "Vic Fangino",
    },
    correctAnswer: "c",
  }
];

//build quiz,show results

function buildQuiz(){}

function showResults(){}

//display quiz right away
buildQuiz();

//on submit, show results
submitButton.addEventListener('click', showResults)