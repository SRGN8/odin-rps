// Rock Paper Scissors - Odin Project

let min = 1;
let max = 3;
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let playerWins = 0;
let compWins = 0;

function randomNumber(min, max) {
  let ceiling = Math.ceil(min);
  let floor = Math.floor(max);
  return Math.floor(Math.random() * (floor - ceiling + 1)) + min;
}

function getComputerChoice() {
  let rng = randomNumber(min, max);
  let choice;

  if (rng == 1) {
    choice = rock;
  }

  if (rng == 2) {
    choice = paper;
  }

  if (rng == 3) {
    choice = scissors;
  }

  return choice;
}

function getPlayerChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  let checkCase = choice.toLowerCase();

  if (checkCase == "rock" || checkCase == "paper" || checkCase == "scissors") {
    return choice;
  } else {
    alert("Invalid Choice, choose: Rock, Paper Or Scissors");
    console.log(
      "Invalid Choice, Please try again. choose: Rock, Paper or Scissors"
    );
    return 1;
  }
}

function playRound() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  let playerCheck = playerChoice.toLowerCase();
  let compCheck = computerChoice.toLowerCase();

  alert(
    `You picked ${playerChoice}, and the Computer Chose ${computerChoice}...`
  );
  console.log(
    `You picked ${playerChoice}, and the Computer Chose ${computerChoice}...`
  );

  if (playerCheck == compCheck) {
    alert("DRAW GAME.");
    console.log("DRAW GAME.");
    return console.log("NEXT ROUND!");
  }

  if (
    (playerCheck == "rock" && compCheck == "scissors") ||
    (playerCheck == "scissors" && compCheck == "paper") ||
    (playerCheck == "paper" && compCheck == "rock")
  ) {
    alert(`YOU WIN! ${playerChoice} beats ${computerChoice}.`);
    console.log(`YOU WIN! ${playerChoice} beats ${computerChoice}.`);
    playerWins += 1;
  } else {
    alert(`YOU LOSE. ${computerChoice} beats ${playerChoice}.`);
    console.log(`YOU LOSE. ${computerChoice} beats ${playerChoice}.`);
    compWins += 1;
  }

  return console.log("NEXT ROUND!");
}

function game() {
  alert(
    `Welcome to Rock, Paper, Scissors: JS Console Edition! Play vs the Computer in 5 Rounds and see who comes out on top!`
  );

  for (i = 0; i < 5; i++) {
    alert(`ROUND ${i + 1}`);
    playRound();
  }

  if (playerWins == compWins) {
    alert(
      `Its a Draw! you tied with the computer ${playerWins} - ${compWins}! Go for the Tiebreaker set, Someone's gotta win LOL!`
    );
    console.log(
      `Its a Draw! you tied with the computer ${playerWins} - ${compWins}! Go for the Tiebreaker set, Someone's gotta win LOL!`
    );
  }

  if (playerWins > compWins) {
    alert(`You won the set ${playerWins} - ${compWins}! CONGRATULATIONS!`);
    console.log(
      `You won the set ${playerWins} - ${compWins}! CONGRATULATIONS!`
    );
  } else {
    alert(
      `The Computer won the set ${compWins} - ${playerWins}! Better luck next time!`
    );
    console.log(
      `The Computer won the set ${compWins} - ${playerWins}! Better luck next time!`
    );
  }

  return 0;
}
