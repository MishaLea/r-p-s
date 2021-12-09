console.log('loaded')

//**Declare constants for DOM and possible choices */


const buttons = document.getElementsByClassName("btns");
const playArea = document.getElementsByClassName("play-area");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementsByClassName("result")
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const pScoreDisplay = document.getElementById("player-score");
const cScoreDisplay = document.getElementById("computer-score");

//**scoring system */



/**Const example from google */

    const btns = document.querySelectorAll(".btns");
    btns.forEach((btn) => {
    btn.addEventListener("click", function () {
    console.log('click worked')

    /** variable 'input' created for click event */
    const player = this.textContent;

    const choice = ["Rock", "Paper", "Scissors"];

    const computer = choice[Math.floor(Math.random() * 3)];

    compareInputs(player, computer);
    updateScore();
    });
});



function newFunction() {
    const playerScore = 0;
    const computerScore = 0;
    return { playerScore, computerScore };
}

function compareInputs(player, computer) {
    const result = `${player} vs ${computer}`;

    //**Tie */
    if (player === computer) {
        alert(`${result} is a Tie`);
        return;
    }

    const choice = document.querySelectorAll(".choice");
    let playerScore = 0;
    let computerScore = 0;

    choice.forEach; {

    };

    //** Rock */
    if (player === "Rock") {
        if (computer === "Scissors") {
            alert(`${result} = You Win`);
            playerScore++;
        } else {
            alert(`${result} = Computer Wins`);
            computerScore++;
        }
    }

    //** Paper */
    else if (player === "Paper") {
        if (computer === "Rock") {
            alert(`${result} = You Win`);
            playerScore++;
        } else {
            alert(`${result} = Computer Wins`);
            computerScore++;
        }
    }

    //** Scissors */
    else {
        if (computer === "Paper") {
            alert(`${result} = You Win`);
            playerScore++;
        } else {
            alert(`${result} = Computer Wins`);
            computerScore++;
        }
    }
}

compareInputs(player, computer);
updateScore();
if (checkWinner()) {
    playerScore = computerScore = 0;
    updateScore();
}

const pScore = this.textContent;
console.log(pScore)
//** Does the name in brackets = the name after the textcontent? */

function updateScore() {
    document.getElementById("pScoreDisplay").textContent = pScoreDisplay;
    document.getElementById("cScoreDisplay").textContent = cScoreDisplay;
}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner =
            playerScore === 5

            ?"Yay! You Won!" 
            :"Sorry, better luck next time!";
        alert(winner);
        return true;
    }
    return false;
}

/** i attempted to add another function 
 * function playArea(choice) {
    playerImage.src = `assets/images/${choice[player]}`;
    playerImage.alt = choice[player];

    computerImage.src = `assets/images/${choice[computer]}`;
    computerImage.alt = choice[computer];
}

but when i saved it and efreshed the website, the results stopped loading. 
 */