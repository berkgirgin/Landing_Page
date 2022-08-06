const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

const results = document.querySelector(".results");

let humanWonRounds = 0;
let computerWonRounds = 0;
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
playerScore.innerText = "Your score: " + humanWonRounds;
computerScore.innerText = "Computer's score: " + computerWonRounds;

rockBtn.addEventListener("click", function() { playRound( getComputerChoice(), "rock") } );
paperBtn.addEventListener("click", function() { playRound( getComputerChoice(), "paper") } );
scissorsBtn.addEventListener("click", function() { playRound( getComputerChoice(), "scissors") } );


function updateScores(){
    playerScore.innerText = "Your score: " + humanWonRounds;
    computerScore.innerText = "Computer's score: " + computerWonRounds;
}

function getComputerChoice() {
    let randomPick = Math.floor( Math.random() * 3);
    let options = ["rock" , "paper" , "scissors"];
    return options[randomPick];
}

function isGameOver () {
    return (humanWonRounds === 3 || computerWonRounds === 3);
}

function endGame () {

    function resetGame() {
        humanWonRounds = 0;
        computerWonRounds = 0;
        const element = document.querySelector(".resetBtn");
        element.remove();
        results.textContent = "Starting again, good luck!";
        updateScores();
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    const resetBtn = document.createElement("button");
    resetBtn.innerText = "Restart the game";
    resetBtn.classList.add("resetBtn");
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener( "click", function() { resetGame() } );

}

function playRound(computerSelection , playerSelection) {
        results.textContent = "";

        switch (computerSelection) {

            case "rock":
                if (playerSelection === "rock") {
                    results.textContent += "draw "
                } else if (playerSelection === "paper") {
                    results.textContent += "win ";
                    humanWonRounds ++;
                } else if (playerSelection === "scissors") {
                    results.textContent += "lose ";
                    computerWonRounds ++;
                }
                break;
    
            case "scissors":
                if (playerSelection === "scissors") {
                    results.textContent += "draw "
                } else if (playerSelection === "rock") {
                    results.textContent += "win ";
                    humanWonRounds ++;
                } else if (playerSelection === "paper") {
                    results.textContent += "lose ";
                    computerWonRounds ++;
                }
                break;
    
            case "paper":
                if (playerSelection === "paper") {
                    results.textContent += "draw "
                } else if (playerSelection === "scissors") {
                    results.textContent += "win ";
                    humanWonRounds ++;
                } else if (playerSelection === "rock") {
                    results.textContent += "lose ";
                    computerWonRounds ++;
                }
                break;
        }

        updateScores();

        if ( isGameOver() ) {
            endGame();
        }
    }

