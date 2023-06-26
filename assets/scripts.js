// Selecting HTML elements and storing them as variables
var highScoreLink = document.getElementById("high-score-link");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var choiceButtons = document.querySelectorAll("#user-choices button")
var scoreDisplay = document.getElementsByClassName("score-display");
var inputInitials = document.getElementById("initials");
var submitButton = document.getElementById("submit-score-button");
var feedback = document.getElementById("feedback")
var returnButton = document.getElementById("return-button")
var questionSpan = document.getElementById("question-span")

// Defining other global variables
var time = 10;
var score = 0;
var initials = "";
var questionIndex = 0;

// Each question will be stored as an object inside an array
var questions = [
    {
        text: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        text: "The condition in an if/else statement is enclosed within _____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        text: "Arrays in Javascript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        text: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

// figuring out notation for traversing objects in arrays
// console.log(questions[0].question);
// console.log(questions[0].choices[0]);
// console.log(questions[0].answer);

function showQuestion() {
    var question = questions[questionIndex]
    questionSpan.innerText = question.text
    for (var i = 0; i < question.choices.length; i++) {
        choiceButtons[i].innerText = question.choices[i]
    }
}

// Page opens with "start-page" displayed and other sections hidden
// press startButton
function start() {
    // start timer countdown
    var timerInterval = setInterval(function() {
        time--
        timer.innerText = time

        if (time === 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
    // hide "start-page" and display "questions-page"
    document.getElementById("start-page").classList.add("hidden");
    document.getElementById("questions-page").classList.remove("hidden");
    // append first question to "question-span"
    // append choices for that question to <ul> beneath "question-span"
    showQuestion()
}

// Select a choice
for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function(event) {
        console.log(event)
    // check event.target.innerText and compare to innerText of questions[questionIndex].answer
        if (event.target.innerText === questions[questionIndex].answer.innerText) {
            // Add message "Correct!" to feedback span
            feedback.innerText = "Correct!"
            // increase score value
            score++

        } else {
            // add message "Incorrect" to feedback span
            feedback.innerText = "Incorrect"
            // decrease score value
            score--
            // reduce timer remainder by 5 seconds

        }
        questionIndex++
        showQuestion()
    })
}
    // When all questions are exhausted OR time runs out
        // stop timer
        // hide "questions-page" and display "end-page"
        // user types initials into #initials input field on "end-page"
    // User clicks submit button on "end-page"
        // store user's initials and quiz score in local storage
        // hide "end-page" and display "highscore-page"
        // append user's initials and quiz score to "highscore-page" from local storage
    // User clicks "return-button"
        // hide "highscores-page" and display "start-page"

startButton.addEventListener("click", start)