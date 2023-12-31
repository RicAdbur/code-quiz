// Selecting HTML elements and storing them as variables
var highScoreLink = document.getElementById("high-score-link");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var choiceButtons = document.querySelectorAll("#user-choices button")
var scoreDisplay = document.getElementById("score-display");
var inputInitials = document.getElementById("initials");
var submitButton = document.getElementById("submit-score-button");
var feedback = document.getElementById("feedback")
var returnButton = document.getElementById("return-button")
var questionSpan = document.getElementById("question-span")
var startPage =  document.getElementById("start-page")
var questionsPage = document.getElementById("questions-page")
var highScorePage = document.getElementById("highscore-page")
var endPage = document.getElementById("end-page")
var highScores = document.getElementById("high-scores")

// Defining other global variables
var time = 60;
var score = 0;
var questionIndex = 0;
var timerInterval

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

// concept for high score board
// var highScoresArray = [
//   {
//     initials: 'JTN',
//     score: 10
//   }
// ]
// localStorage.setItem('highscores', JSON.stringify(scores))

// pull from local storage and parse
// var savedScores = JSON.parse(localStorage.getItem('highscores')) || []
// add new data
// var score2 = { initials: "TAJP", score: 11}
// savedScores.push(score2)
// stringify and save updated array
// localStorage.setItem('highscores', JSON.stringify(savedScores))

function gameOver() {
        // stop timer
        clearInterval(timerInterval)
        // hide "questions-page" and display "end-page"
        questionsPage.classList.add("hidden");
        endPage.classList.remove("hidden");
        // User clicks submit button on "end-page"
        submitButton.addEventListener("click", function() {
            // hide "end-page" and display "highscore-page"
            endPage.classList.add("hidden");
            highScorePage.classList.remove("hidden")
            // append user's initials and quiz score to "highscore-page" from local storage
            localStorage.setItem("initials", inputInitials.value)
            localStorage.setItem("score", score)
            highScores.textContent = localStorage.getItem("initials") + " : " + localStorage.getItem("score")
        })
}

// View high scores page
function showHighScores () {
    startPage.classList.add("hidden");
    questionsPage.classList.add("hidden");
    endPage.classList.add("hidden");
    highScorePage.classList.remove("hidden");
}
highScoreLink.onclick = showHighScores;

function goBack() {
    startPage.classList.remove("hidden");
    questionsPage.classList.add("hidden");
    endPage.classList.add("hidden");
    highScorePage.classList.add("hidden");
}
returnButton.onclick = goBack;

// Page opens with "start-page" displayed and other sections hidden
// press startButton
function start() {
    // start timer countdown
    timerInterval = setInterval(function() {
        time--
        timer.innerText = time
        if (time < 10) {
            timer.innerText = "0"+time
        }
        if (time <= 0) {
            gameOver()
        }
    }, 1000)
    // hide "start-page" and display "questions-page"
    startPage.classList.add("hidden");
    questionsPage.classList.remove("hidden");
    // append first question to "question-span"
    // append choices for that question to <ul> beneath "question-span"
    showQuestion()
}

// Select a choice
for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function(event) {
        console.log(event)
    // check event.target.innerText and compare to innerText of questions[questionIndex].answer
        if (event.target.innerText === questions[questionIndex].answer) {
            // Add message "Correct!" to feedback span
            feedback.innerText = "Correct!"
            feedback.style.backgroundColor = "green"
            // increase score value
            score++
            scoreDisplay.innerText = score;
        } else {
            // add message "Incorrect" to feedback span
            feedback.innerText = "Incorrect"
            feedback.style.backgroundColor = "red"
            // decrease score value
            score--
            // reduce timer remainder by 5 seconds
            time -= 5
        }
        questionIndex++
        // When all questions are exhausted OR time runs out
        if (questionIndex === questions.length || time <= 0) {
            gameOver()
        } else {
            showQuestion()
        }
    })
}

startButton.addEventListener("click", start)
timer.innerText = time