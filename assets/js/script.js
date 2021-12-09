/**
 * Declare constants for DOM and possible choices
 */

const buttons = document.getElementsByClassName("choice");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");

/**Const example from google */

const choice = document.querySelectorAll(".choice");

    choice.forEach((choice) => {
    
    choice.addEventListener("click", function () {
        
/** variable 'input' created for click event */
    const player = this.textContent;

    const cChoice = ["Rock", "Paper", "Scissors"];
    const computer = cChoice[Math.floor(Math.random() * 3)];

    compareInputs(player, computer);
    });
});



function compareInputs(player, computer) {
    const currentMatch = `${player} vs ${computer}`;

//**Tie */
    if (player === computer) {
        alert(`${currentMatch} is a Tie`);
        return;
    }
//** Rock */
    if (player === "Rock") {
        if (computer === "Scissors") {
            alert(`${currentMatch} = You Win`);
        } else {
            alert(`${currentMatch} = Computer Wins`);
        }
    }

    //** Paper */
    else if (player === "Paper") {
        if (computer === "Rock") {
            alert(`${currentMatch} = You Win`);
        } else { 
            alert(`${currentMatch} = Computer Wins`);
        }
    }

    //** Scissors */
    else {
        if (computer === "Paper") {
            alert(`${currentMatch} = You Win`);
        } else {
            alert(`${currentMatch} = Computer Wins`);
        }
    }
}