// Rock Paper Scissors - Odin Project

let min = 1;
let max = 3;
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let playerWins = 0;
let compWins = 0;
let pSets = 0;
let cSets = 0;
let stateText = "Which option will you choose???";

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

function playRound(pChoice) {
  let compChoice = getComputerChoice();

  const state = document.getElementById("gstext");
  const score = document.getElementById("sctext");

  if (pChoice == compChoice) {
    state.textContent = `The Player and CPU Both chose ${pChoice}. DRAW GAME.`;
  }

  if (
    (pChoice == "Rock" && compChoice == "Scissors") ||
    (pChoice == "Scissors" && compChoice == "Paper") ||
    (pChoice == "Paper" && compChoice == "Rock")
  ) {
    state.textContent = `${pChoice} beats ${compChoice}. YOU WIN! `;
    playerWins += 1;
    score.textContent = `Player Round Wins: ${playerWins}  Set Wins: ${pSets} | CPU Wins: ${compWins}  Set Wins: ${cSets}`;
  } else {
    state.textContent = `YOU LOSE. ${compChoice} beats ${pChoice}.`;
    compWins += 1;
    score.textContent = `Player Round Wins: ${playerWins}  Set Wins: ${pSets} | CPU Wins: ${compWins}  Set Wins: ${cSets}`;
  }

  return 0;
}

function gameGen() {
  const container = document.querySelector(".container");
  const btn_Names = ["rockBtn", "paperBtn", "scissorsBtn"];

  // Generate Score Keeper and Track Game State
  const score = document.createElement("div");
  const scoreText = document.createTextNode(
    `Player Round Wins: ${playerWins}  Set Wins: ${pSets} | CPU Wins: ${compWins}  Set Wins: ${cSets}`
  );
  const gameState = document.createElement("p");
  let sText = document.createTextNode(stateText);

  score.id = "sctext";
  gameState.id = "gstext";
  score.appendChild(scoreText);
  gameState.appendChild(sText);
  container.appendChild(score);
  container.appendChild(gameState);

  // Generate buttons to play with
  for (let i = 0; i <= 2; i++) {
    const gameBtn = document.createElement("button");
    const btnImg = document.createElement("img");
    const imgSrc = `assets/${btn_Names[i]}.png`;
    btnImg.src = imgSrc;
    btnImg.classList.add(btn_Names[i]);
    gameBtn.id = `${btn_Names[i]}`;
    gameBtn.classList.add("gameBtn");
    gameBtn.appendChild(btnImg);
    container.appendChild(gameBtn);
  }

  const btnCheck = document.querySelectorAll("button");

  btnCheck.forEach(function (j) {
    j.addEventListener("click", () => {
      // console.log(j.id);
      let c = j.id;

      if (c == "rockBtn") {
        c = "Rock";
      }

      if (c == "paperBtn") {
        c = "Paper";
      }

      if (c == "scissorsBtn") {
        c = "Scissors";
      }
      game(c);
    });
  });
}

function game(choice) {
  playRound(choice);

  const state = document.getElementById("gstext");
  const score = document.getElementById("sctext");

  if (playerWins >= 5 && playerWins > compWins) {
    pSets += 1;
    score.textContent = `Player Round Wins: ${playerWins}  Set Wins: ${pSets} | CPU Wins: ${compWins}  Set Wins: ${cSets}`;
    state.textContent = `Player wins the set ${playerWins} - ${compWins}! Congratulations! You can play another set if you like!`;
    playerWins = 0;
    compWins = 0;
  }

  if (compWins >= 5 && compWins > playerWins) {
    cSets += 1;
    score.textContent = `Player Round Wins: ${playerWins}  Set Wins: ${pSets} | CPU Wins: ${compWins}  Set Wins: ${cSets}`;
    state.textContent = `The Computer wins the set ${compWins} - ${playerWins}! Better luck next time! You can play another set if you like!`;
    playerWins = 0;
    compWins = 0;
  }

  return 0;
}
