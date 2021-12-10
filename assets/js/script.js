console.log('loaded')

//**Declare constants for DOM and possible choices */


const buttons = document.getElementsByClassName("btns");
const playArea = document.getElementsByClassName("play-area");
const result = document.getElementsByClassName("Scores")
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const pScoreDisplay = document.getElementById("player-score");
const cScoreDisplay = document.getElementById("computer-score");

//**scoring system */



/**Const example from google */

    const btns = document.querySelectorAll(".btns");
    let pScore = 0;
    let cScore = 0;

    btns.forEach((btn) => {

        btn.addEventListener("click", function () {
            const player = this.textContent;
    
            const cOptions = ["Rock", "Paper", "Scissors"];
            const computer = cOptions[Math.floor(Math.random() * 3)];
    
            compareresults(player, computer);
            updateScore();
            if (checkWinner()) {
                player = computer = 0;
                updateScore();
            }
    });
});

function compareScores(player, computer) {
    const current = `${player} vs ${computer}`;

    //**Tie */
    if (player === computer) {
        alert(`${current} is a Tie`);
        return;
    }

    //** Rock */
    if (player === "Rock") {
        if (computer === "Scissors") {
            alert(`${current} = You Win`);
            playerScore++;
        } else {
            alert(`${current} = Computer Wins`);
            computerScore++;
        }
    }

    //** Paper */
    else if (player === "Paper") {
        if (computer === "Rock") {
            alert(`${current} = You Win`);
            playerScore++;
        } else {
            alert(`${current} = Computer Wins`);
            computerScore++;
        }
    }

    //** Scissors */
    else {
        if (computer === "Paper") {
            alert(`${current} = You Win`);
            playerScore++;
        } else {
            alert(`${current} = Computer Wins`);
            computerScore++;
        }
    }
}

//** Does the name in brackets = the name after the textcontent? */

function updateScore(playerScore, computerScore) {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
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