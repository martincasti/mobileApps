const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");

const resultElement = document.getElementById("result");

const WonLostTImes = document.getElementById("counterWonLost");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", startGame));

  var winCounter = 0;
  var loseCounter = 0;

function startGame(event) {

  // Obtener elección del jugador
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;

  // Obtener elección de la computadora
  const computerChoice = getComputerChoice();

  // Calcular ganador
  //const playerWins = isPlayerWinner(playerChoice, computerChoice);
  const winner = setWinner(playerChoice, computerChoice);
  //const match = resultMatch(playerChoice, computerChoice); 

  // Mostrar resultado
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

  // const result = playerWins ? "GANASTE" : "PERDISTE";

  //   if (playerWins === true) {
  //     result.textContent = "GANASTE";
  //   } else if (!playerWins) {
  //     result.textContent = "PERDISTE";
  //   } else if (playerWins === "draw") {
  //     result.textContent = "EMPATASTE";
  //   }

  resultElement.textContent = winner;
  WonLostTImes.textContent = `You won ${winCounter} times. You lost ${loseCounter} times`;
  

}

const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // Obtener un valor aleatorio
  const computerChoice = Math.floor(Math.random() * 3);

  // Retornar elección
  return possibleChoices[computerChoice];
}

// Antes: isPlayerWinner
    
function setWinner(playerChoice, computerChoice) {
    
    
    console.log("playerChoice", playerChoice);
    console.log("computerChoice", computerChoice);

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {

      winCounter = winCounter +1;
      console.log("wins", winCounter);
    return `You Won with ${playerChoice} against ${computerChoice}`;

  } else if (playerChoice === computerChoice) {

    return `You Draw with ${playerChoice} against ${computerChoice}`;
  } else {

    loseCounter = loseCounter +1;
    console.log("lost", loseCounter);
    return `You Lost with ${playerChoice} against ${computerChoice}`;
  }

  }

    //   function resultMatch(playerChoice, computerChoice) {
    //   if (
    //     (playerChoice === "rock" && computerChoice === "scissors") ||
    //     (playerChoice === "paper" && computerChoice === "rock") ||
    //     (playerChoice === "scissors" && computerChoice === "paper")
    //   ) {
    
    //     winCounter = winCounter +1;
    //     console.log("wins", winCounter);
    
    //     return `You won ${winCounter} times. You lost ${loseCounter} times`;
    
    //   } else if (playerChoice === computerChoice) {
    
    //     return `You Draw ${winCounter} times. You lost ${loseCounter} times`;
    //   } else {
    
    //     loseCounter = loseCounter +1;
    //     console.log("lost", loseCounter);
    
    //     return `You Lost ${winCounter} times. You lost ${loseCounter} times`;
    //   }


    // }
  
