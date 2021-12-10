console.log('loaded')

//**Declare constants for DOM and possible choices */

// Global variables/ 
const buttons = document.getElementsByClassName("btns");
const playArea = document.getElementsByClassName("play-area");
const results = document.getElementsByClassName("Scores")
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
let playerScoreDisplay = document.getElementById("player-score-display");
let computerScoreDisplay = document.getElementById("computer-score-display");

//**scoring system */



/**Const example from google */

    const btns = document.querySelectorAll(".btns");
    let playerScores = 0;
    let computerScores = 0;

    btns.forEach((btn) => {

        btn.addEventListener("click", function () {
            const player = this.textContent;
    
            const cOptions = ["Rock", "Paper", "Scissors"];
            const computer = cOptions[Math.floor(Math.random() * 3)];
       //* btn.addEventListener("score", function () {

       //** */ })//*
            compareInputs(player, computer);
            if (checkWinner()) {
                playerScoreDisplay = computerScoreDisplay = 0;
                updateResults();
        }
    });
});


function compareInputs(player, computer) {
    const current = `${player} vs ${computer}`;

    //**Tie */
    if (player === computer) {
        alert(`${current} is a Tie`);
        return;
    }

    //** Rock */
    if (player === "Rock") {
        if (computer === "Scissors") {
            playerScoreDisplay.innerText ++ ;
            alert(`${current} = You Win, ${playerScoreDisplay}`);
        } else {
            computerScoreDisplay.innerText ++ ;
            alert(`${current} = Computer Wins, ${computerScoreDisplay}`);
        }
    }

    //** Paper */
    else if (player === "Paper") {
        if (computer === "Rock") {
            playerScoreDisplay.innerText ++ ;
            alert(`${current} = You Win, ${playerScoreDisplay}`);
        } else {
            computerScoreDisplay.innerText ++ ;
            alert(`${current} = Computer Wins, ${computerScoreDisplay}`);
        }
    }

    //** Scissors */
    else {
        if (computer === "Paper") {
            playerScoreDisplay.innerText ++ ;
            alert(`${current} = You Win, ${playerScoreDisplay}`);
        } else {
            computerScoreDisplay.innerText ++ ;
            alert(`${current} = Computer Wins, ${computerScoreDisplay}`);
        }
    }
}

function updateResults() {
    document.getElementById("playerScoreDisplay").textContent = playerScoreDisplay;
    document.getElementById("computerScoreDisplay").textContent = computerScoreDisplay;
}

function checkWinner() {
    if (playerScoreDisplay === 5 || computerScoreDisplay === 5) {
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