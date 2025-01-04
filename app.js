let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".userChoice-container > img");
let userScore_span = document.querySelector("#user-score");
let computerScore_span = document.querySelector("#computer-score");
let result = document.querySelector("#result");

const getComputerChoice = () => {
  let idx = Math.floor(Math.random() * 3);
  let computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[idx];
};

const playGame = (userChoice) => {
  let computerChoice = getComputerChoice();
  userScore_span = document.querySelector("#user-score");
  computerScore_span = document.querySelector("#computer-score");
  result = document.querySelector("#result");

  if (userChoice === computerChoice) {
      result.innerText = "It's a draw!";
  } else {
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("You lose!");
        result.innerText = "You lose!";
        computerScore++;
        computerScore_span.innerText = computerScore;
      } else {
        result.innerText = "You win!";
        console.log("You win!");
        userScore++;
        userScore_span.innerText = userScore;
      }
    } else if (userChoice === "Paper") {
      if (computerChoice === "scissors") {
        console.log("You lose!");
        result.innerText = "You lose!";
        computerScore++;
        computerScore_span.innerText = computerScore;
      } else {
        result.innerText = "You win!";
        console.log("You win!");
        userScore++;
        userScore_span.innerText = userScore;
      }
    } else if (userChoice === "Scissors") {
      if (computerChoice === "rock") {
        console.log("You lose!");
        result.innerText = "You lose!";
        computerScore++;
        computerScore_span.innerText = computerScore;
      } else {
        result.innerText = "You win!";
        console.log("You win!");
        userScore++;
        userScore_span.innerText = userScore;
      }
    }
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");
    console.log(userChoice);
    playGame(userChoice);
  });
});
