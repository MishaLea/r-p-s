/**
 * Declare constants for DOM and possible choices
 */

const buttons = document.getElementsByClassName("choice");
const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");

/**Const example from google */

const choice = document.querySelectorAll(".choice");

    choice.forEach((choice) => {
        choice.addEventListener("click", function () {
        });
    });

/**
 * Add event listener to all buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let choice = this.getAttribute("data-choice");
        playGame(choice);
    });
}

/**
 * Main game function accepts one parameter which 
 * is the data-choice value of the selected button
 */


function playGame("player") {

    playerImage.src = 'assets/images/${choice[player]}.jpeg';
    playerImage.alt = choices["player"];

    let computer = Math.floor(math.random() * 3);


    computerImage.src = 'assets/images/${choice[computer]}.jpeg';
    computerImage.alt = choices[computer];

    let result = checkWinner(choices[computer], choices[player]);

    updateScores(result);
}



function checkAnswer("choice-area") {
    let rock;
    let paper;
    let scissors;

    if ("rock > scissors") {
        rock = true;
    } else if ("scissors > paper") {
        scissors = true;
    } else if ("paper > rock") {
        paper = true;
    }

}


function calculateCorrectAnswer()

function incrementScore()

function incrementWrongAnswer()

if (player == "rock") {
    document.getElementsByClassName("player").src = "assets/images/rock.jpeg");

}