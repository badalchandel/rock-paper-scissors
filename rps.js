let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        
        msg.innerText = `You Win your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
       
        msg.innerText = `Computer Win ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user choice is = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice is = ", compChoice);

    if(userChoice === compChoice) {
        console.log("Game Draw");
        msg.innerText = "Draw";
        msg.style.backgroundColor = "black";
    }
    else{
      let userWin = true;
      if(userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
      }
      else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
      }
      else {
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});