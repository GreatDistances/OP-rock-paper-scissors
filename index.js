const promptDiv = document.querySelector(".promptDiv");
const btnDiv = document.querySelector(".btnDiv");
const resultsDiv = document.querySelector(".resultsDiv");
const scoreDiv = document.querySelector(".scoreDiv");

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
});

paperBtn.addEventListener("click", function (e) {
  playerChoice = "paper";
  playRound();
});

scissorsBtn.addEventListener("click", function (e) {
  playerChoice = "scissors";
  playRound();
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

  let resultMsg;

  paperBtn.style.backgroundColor = "";
  rockBtn.style.backgroundColor = "";
  scissorsBtn.style.backgroundColor = "";

  console.log(
    `Player plays: ${playerChoice}, computer plays: ${computerChoice}`
  );
  if (playerChoice == computerChoice) {
    resultMsg = `Game #${gameCounter}: Draw, try again!`;
    if (playerChoice === "rock") {
      rockBtn.style.backgroundColor = "yellow";
    } else if (playerChoice === "paper") {
      paperBtn.style.backgroundColor = "yellow";
    } else if (playerChoice === "scissors") {
      scissorsBtn.style.backgroundColor = "yellow";
    }
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    rockBtn.style.backgroundColor = "red";
    resultMsg = `Game #${gameCounter}: You Lose! Paper beats Rock.`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    paperBtn.style.backgroundColor = "green";
    resultMsg = `Game #${gameCounter}: You Win! Paper beats Rock.`;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    rockBtn.style.backgroundColor = "green";
    resultMsg = `Game #${gameCounter}: You Win! Rock beats Scissors.`;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    scissorsBtn.style.backgroundColor = "red";
    computerScore++;
    resultMsg = `Game #${gameCounter}: You Lose! Rock beats Scissors.`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    scissorsBtn.style.backgroundColor = "green";
    resultMsg = `Game #${gameCounter}: You Win! Scissors beats Paper.`;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    paperBtn.style.backgroundColor = "red";
    resultMsg = `Game #${gameCounter}: You Lose! Scissors beats Paper.`;
  } else {
    return -1;
  }

  
  gameCounter++;

  resultsDiv.textContent = resultMsg;
  scoreDiv.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`

  if (playerScore >= 5 || computerScore >= 5) {
    gameOver();
    return;
  }

};

const playGame = () => {
  gameCounter = 1;

  playGameBtn.remove();
  resultsDiv.textContent = "";
  scoreDiv.textContent = "";

  btnDiv.append(rockBtn);
  btnDiv.append(paperBtn);
  btnDiv.append(scissorsBtn);
  rockBtn.textContent = "\u{1FAA8}";
  paperBtn.textContent = "\u{1F5DE}";
  scissorsBtn.textContent = "\u{2704}";
};

playGameBtn.addEventListener("click", function (e) {
  playGame();
});

const gameOver = () => {
  playerScore = 0;
  computerScore = 0;
  rockBtn.remove();
  paperBtn.remove();
  scissorsBtn.remove();
  playGameBtn.textContent = "GAME OVER - Click here to play again";
  promptDiv.append(playGameBtn);

  paperBtn.style.backgroundColor = "";
  rockBtn.style.backgroundColor = "";
  scissorsBtn.style.backgroundColor = "";
};
