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
  return choice;
};

const getPlayerChoice = () => {
    let choice = "";
  choice = prompt("Enter rock, paper, or scissors");

  if (choice === null || choice === "") {
    alert("No entry, please try again");
    return getPlayerChoice();
  } else if (
    choice.trim().toLowerCase() === "rock" ||
    choice.trim().toLowerCase() === "paper" ||
    choice.trim().toLowerCase() === "scissors"
  ) {
    return choice.trim().toLowerCase();
  }
  alert("Invalid entry, please try again");
  
  return getPlayerChoice();
};

const playRound = () => {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  alert(`Player plays: ${playerChoice}, computer plays: ${computerChoice}`);
  if (playerChoice === computerChoice) {
    alert("Draw, try again!");
    return 0;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    alert("You Lose! Paper beats Rock");
    return 2;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    alert("You Win! Paper beats Rock");
    return 1;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    alert("You Win! Rock beats Scissors");
    return 1;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    alert("You Lose! Rock beats Scissors");
    return 2;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    alert("You Win! Scissors beats Paper");
    return 1;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    alert("You Lose! Scissors beats Paper");
    return 2;
  } else {
    return -1;
  }
};

const playGame = () => {
  let computerScore = 0;
  let playerScore = 0;
  let roundResult;

  let continueLoop = true;

  while (continueLoop) {
    roundResult = playRound();

    if (roundResult === 1) {
      playerScore++;
    } else if (roundResult === 2) {
      computerScore++;
    }
    alert(`Player score: ${playerScore}, Computer score: ${computerScore}`);

    if (playerScore === 5) {
      alert("You win!");
      continueLoop = false;
    } else if (computerScore === 5) {
      alert("The computer wins!");
      continueLoop = false;
    }
  }
};

playGame();
