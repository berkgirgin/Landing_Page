
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");
const previousGuesses = document.querySelector(".previousGuesses");
const lowOrHi = document.querySelector(".lowOrHi");


guessSubmit.addEventListener( "click", function() {checkGuess()} );
let randomNumber = generateRandomNumber();

let guessCount = 0;


function generateRandomNumber() {
  //generate a random number between 1 and 100

  let result = Math.floor(Math.random() * 100) + 1;
  return result;
}


function checkGuess() {

  const userGuess = Number(guessField.value);

  if (userGuess === randomNumber) {
    lowOrHi.textContent = "You have won, congrats!!";
    lowOrHi.style.backgroundColor = "green";
    resetGame();
  } else if (guessCount === 10) {
    gameOver();
  } else if (userGuess === NaN) {
    lowOrHi.textContent = "!Not a number!";
    lowOrHi.style.backgroundColor = "red";
  } else if (userGuess > randomNumber) {
    lowOrHi.textContent = "your number is too high";
    lowOrHi.style.backgroundColor = "red";
  } else if ( userGuess < randomNumber) {
    lowOrHi.textContent = "your number is too low";
    lowOrHi.style.backgroundColor = "red";
  }

  guessCount++;
  previousGuesses.textContent += userGuess + " ";
  guessField.value = "";
  guessField.focus();
}

function gameOver(){
  lowOrHi.textContent = "You lost :("
  lowOrHi.style.backgroundColor = "red"
  resetGame();
}

function resetGame(){
  guessField.setAttribute("disabled", "");
  guessSubmit.setAttribute("disabled", "");
  const resetButton = document.createElement("button");
  resetButton.innerText = "Reset Button";
  resetButton.addEventListener("click", resetGameFunction);
  document.body.appendChild(resetButton);

  function resetGameFunction(){
    guessCount = 1;
    previousGuesses.textContent = "Previous guesses: ";
    lowOrHi.textContent = "";
    guessField.focus();
    element = document.querySelector("button");
    element.remove();
    guessField.removeAttribute("disabled");
    guessSubmit.removeAttribute("disabled");
  }
  


}


