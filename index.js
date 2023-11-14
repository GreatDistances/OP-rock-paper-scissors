const promptDiv = document.querySelector(".promptDiv");
const btnDiv = document.querySelector(".btnDiv");
const resultsDiv = document.querySelector(".resultsDiv");

const playGameBtn = document.createElement("button");
playGameBtn.textContent = "Click here to play Rock, Paper, Scissors";
promptDiv.append(playGameBtn);

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

let playerChoice = "";

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
  
    console.log(
      `Player plays: ${playerChoice}, computer plays: ${computerChoice}`
    );
    if (playerChoice == computerChoice) {
      resultsDiv.textContent = "Draw, try again!";
      return 0;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      resultsDiv.textContent = "You Lose! Paper beats Rock";
      return 2;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      resultsDiv.textContent = "You Win! Paper beats Rock";
      return 1;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      resultsDiv.textContent = "You Win! Rock beats Scissors";
      return 1;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      resultsDiv.textContent = "You Lose! Rock beats Scissors";
      return 2;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      resultsDiv.textContent = "You Win! Scissors beats Paper";
      return 1;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      resultsDiv.textContent = "You Lose! Scissors beats Paper";
      return 2;
    } else {
      return -1;
    }

};

const playGame = () => {

  promptDiv.textContent = "Choose Rock, Paper, or Scissors";

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
