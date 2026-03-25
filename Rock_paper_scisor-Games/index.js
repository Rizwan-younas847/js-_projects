let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const p1=document.querySelector("#user_Score");
const p2=document.querySelector("#computer_Score");
const drawGame = () => {
  message.innerHTML = "Game was Draw";
  message.style.backgroundColor = "#00d4ff";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    p1.innerHTML = `${userScore}`;
    message.innerHTML = `You win: your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  } else {
    compScore++;
    p2.innerHTML = `${compScore}`;
    message.innerHTML = `You lose: ${compChoice} beats your ${userChoice}`;
    message.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  const compChoiceVal = compChoice();
  if (userChoice === compChoiceVal) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoiceVal === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoiceVal === "scissor" ? false : true;
    } else {
      userWin = compChoiceVal === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoiceVal);
  }
};
const compChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});