function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const computerChoice = getComputerChoice(1, 3);
console.log(computerChoice);

let choice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

function compareChoices(player, ai) {
  choice = prompt("Rock, Paper or Scissors?");
  playerChoice = choice.toUpperCase();
  console.log(playerChoice);

  if (playerChoice === "ROCK" && computerChoice === 1) {
    return "Tie!";
  } else if (playerChoice === "ROCK" && computerChoice === 2) {
    computerScore++;

    return "You Lose!";
  } else if (playerChoice === "ROCK" && computerChoice === 3) {
    playerScore++;
    return "You Win!";
  } else if (playerChoice === "PAPER" && computerChoice === 1) {
    playerScore++;
    return "You Win!";
  } else if (playerChoice === "PAPER" && computerChoice === 2) {
    return "Tie!";
  } else if (playerChoice === "PAPER" && computerChoice === 3) {
    computerScore++;
    return "You Lose!";
  } else if (playerChoice === "SCISSORS" && computerChoice === 1) {
    computerScore++;
    return "You Lose!";
  } else if (playerChoice === "SCISSORS" && computerChoice === 2) {
    playerScore++;
    return "You Win!";
  } else if (playerChoice === "SCISSORS" && computerChoice === 3) {
    return "Tie!";
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(compareChoices(playerChoice, computerChoice));
    console.log(
      "Player Score: ",
      playerScore,
      " vs Computer Score: ",
      computerScore
    );
  }
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

game();
console.log(reportWinner());
