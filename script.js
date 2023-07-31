function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const myPara = document.querySelector("p");
const myHead = document.querySelector("h1");

let choice = null;
let playerChoice = null;

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", (e) => {
  choice = e.target.textContent;
  playRound();
});

paperButton.addEventListener("click", (e) => {
  choice = e.target.textContent;
  playRound();
});

scissorsButton.addEventListener("click", (e) => {
  choice = e.target.textContent;
  playRound();
});

function playRound() {
  const computerChoice = getComputerChoice(1, 3);
  playerChoice = choice; // Set playerChoice here

  console.log("Player chose:", playerChoice);
  console.log("Computer chose:", computerChoice);

  if (playerChoice === "ROCK" && computerChoice === 1) {
    console.log("Tie!");
  } else if (playerChoice === "ROCK" && computerChoice === 2) {
    computerScore++;
    console.log("You Lose!");
  } else if (playerChoice === "ROCK" && computerChoice === 3) {
    playerScore++;
    console.log("You Win!");
  } else if (playerChoice === "PAPER" && computerChoice === 1) {
    playerScore++;
    console.log("You Win!");
  } else if (playerChoice === "PAPER" && computerChoice === 2) {
    console.log("Tie!");
  } else if (playerChoice === "PAPER" && computerChoice === 3) {
    computerScore++;
    console.log("You Lose!");
  } else if (playerChoice === "SCISSORS" && computerChoice === 1) {
    computerScore++;
    console.log("You Lose!");
  } else if (playerChoice === "SCISSORS" && computerChoice === 2) {
    playerScore++;
    console.log("You Win!");
  } else if (playerChoice === "SCISSORS" && computerChoice === 3) {
    console.log("Tie!");
  }

  myPara.innerHTML = `Player Score: ${playerScore} vs Computer Score: ${computerScore}`;

  console.log(
    "Player Score: ",
    playerScore,
    " vs Computer Score: ",
    computerScore
  );

  checkGameOver();
}

function checkGameOver() {
  if (playerScore >= 5 || computerScore >= 5) {
    myHead.innerHTML = reportWinner();
    resetGame();
  } else myHead.innerHTML = " ";
}

function reportWinner() {
  if (computerScore > playerScore) {
    return "Computer Wins!";
  } else if (computerScore < playerScore) {
    return "Player Wins!";
  } else {
    return "Tie!";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}
