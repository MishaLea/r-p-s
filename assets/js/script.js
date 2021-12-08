/**
 * Declare constants for DOM and possible choices
 */

const buttons = document.getElementsByClassName("choice");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ("rock", "paper", "scissors");

/**
 * Add event listener to all buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * Main game function accepts one parameter which 
 * is the data-choice value of the selected button
 */
function playGame(playerChoice) {

    playerImage.src = 'assets/images/${choices[playerChoice]}.jpg';
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(math.random() * 3);

    computerImage.src = 'assets/images/${choices[computerChoice]}.jpg';
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}