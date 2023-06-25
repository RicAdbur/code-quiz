// Selecting HTML elements and storing them as variables
var highScoreLink = document.getElementById("high-score-link");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var scoreDisplay = document.getElementById("score-display");
var inputInitials = document.getElementById("initials");
var submitButton = document.getElementById("submit-score-button");
var feedback = document.getElementById("feedback")


// Defining other global variables
var score = 0;



// Each question will be stored as an object inside an array
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

// figuring out notation for traversing objects in arrays
console.log(questions[0].question);
console.log(questions[0].choices[0]);
console.log(questions[0].answer);

// Begin pseudocode

// Page opens with "start-page" displayed and other sections hidden
    // press startButton
        // hide "start-page" and display "questions-page"
        // start timer countdown
        // append first question to "question-span"
        // append choices for that question to <ul> beneath "question-span"
    // Select a choice
        // compare user choice with questions[i].answer
            // if correct
                // append "Correct!" to feedback span
            // if incorrect
                // append "Incorrect" to feedback span
                // reduce timer remainder by 5 seconds
        // append next question to "question-span"
            // repeat above steps
    // When all questions are exhausted
        // hide "questions-page" and display "end-page"
        // save current time to local storage
    // If timer runs out before questions are exhausted
        // hide "questions-page" and display "end-page"
    // user types initials into #initials input field on "end-page"
    // User clicks submit button on "end-page"
        // store user's initials, quiz score, and time values in local storage
        // hide "end-page" and display "highscore-page"
        // append user's initials, quiz score, and time values to "highscore-page"
    // User clicks "return-button"
        // hide "highscores-page" and display "start-page"
