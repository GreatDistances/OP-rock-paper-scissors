const promptDiv = document.querySelector(".promptDiv");
const btnDiv = document.querySelector(".btnDiv");
const resultsDiv = document.querySelector(".resultsDiv");
const gameOverDiv = document.querySelector(".gameOverDiv");

const playGameBtn = document.createElement("button");
playGameBtn.textContent = "Click here to play Rock, Paper, Scissors";
promptDiv.append(playGameBtn);

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

let playerChoice = "";
let gameCounter = 1;
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", function (e) {
  playerChoice = "rock";
  playRound();
  promptDiv.textContent = `Choose Rock, Paper, or Scissors.`;
});

paperBtn.addEventListener("click", function (e) {
  playerChoice = "paper";
  playRound();
  promptDiv.textContent = `Choose Rock, Paper, or Scissors.`;
});

scissorsBtn.addEventListener("click", function (e) {
  playerChoice = "scissors";
  playRound();
  promptDiv.textContent = `Choose Rock, Paper, or Scissors.`;
});

const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3) + 1;
  let choice = "";

  switch (num) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
    default:
      choice = "rock";
  }
  console.log(`Computer choice ${choice}`);
  return choice;
};

const playRound = () => {
  let computerChoice = getComputerChoice();

  console.log(
    `Player plays: ${playerChoice}, computer plays: ${computerChoice}`
  );
  if (playerChoice == computerChoice) {
    resultsDiv.textContent = `Game #${gameCounter}: Draw, try again!  Player: ${playerScore}, Computer: ${computerScore}`;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    resultsDiv.textContent = `Game #${gameCounter}: You Lose! Paper beats Rock.   Player: ${playerScore}, Computer: ${computerScore}`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    resultsDiv.textContent = `Game #${gameCounter}: You Win! Paper beats Rock.  Player: ${playerScore}, Computer: ${computerScore}`;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    resultsDiv.textContent = `Game #${gameCounter}: You Win! Rock beats Scissors.  Player: ${playerScore}, Computer: ${computerScore}`;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    resultsDiv.textContent = `Game #${gameCounter}: You Lose! Rock beats Scissors.  Player: ${playerScore}, Computer: ${computerScore}`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    resultsDiv.textContent = `Game #${gameCounter}: You Win! Scissors beats Paper.  Player: ${playerScore}, Computer: ${computerScore}`;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    resultsDiv.textContent = `Game #${gameCounter}: You Lose! Scissors beats Paper.  Player: ${playerScore}, Computer: ${computerScore}`;
  } else {
    return -1;
  }
  gameCounter++;

  if (gameCounter > 5) {
    gameOver();
    return;
  }
};

const playGame = () => {
  gameCounter = 1;

  playGameBtn.remove();
  promptDiv.textContent = `Choose Rock, Paper, or Scissors.`;

  btnDiv.append(rockBtn);
  btnDiv.append(paperBtn);
  btnDiv.append(scissorsBtn);
  rockBtn.textContent = "Rock";
  paperBtn.textContent = "Paper";
  scissorsBtn.textContent = "Scissors";
};

playGameBtn.addEventListener("click", function (e) {
  playGame();
});

const gameOver = () => {
  promptDiv.append("GAME OVER");
  rockBtn.remove();
  paperBtn.remove();
  scissorsBtn.remove();
  gameOverDiv.append(playGameBtn);
};
