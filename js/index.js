let min = 1;
let max = 3;

let randomNumber = Math.floor((Math.random() * max) + min);
let computerSelection;
let playerSelection = prompt("Please select : Rock? Paper? Scissors").toLowerCase()
let error;

function getComputerChoice (){
    if (randomNumber === 1) {
        computerSelection = "rock";
    }
    else if (randomNumber === 2) {
        computerSelection = "paper";
    }
    else if (randomNumber === 3) {
        computerSelection = "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "rock"){
        console.log("ROCK vs ROCK. It's a draw!")
    }
    else if(playerSelection === "paper" && computerSelection === "paper"){
        console.log("PAPER vs PAPER. It's a draw!")
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors"){
        console.log("SCISSORS vs SCISSORS. It's a draw!")
    }
    if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("ROCK vs PAPER. Paper beats rock. You loose!")
    }
    if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("ROCK vs SCISSORS. Rock beats scissors. You win!")
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("PAPER vs ROCK. Paper beats rock. You win!")
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("PAPER vs SCISSORS. Scissors beats paper. You loose!")
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("SCISSORS vs ROCK. Rock beats scissors. You loose!")
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("SCISSORS vs PAPER. Scissors beats paper. You win!")
    }

}

getComputerChoice();
playRound(playerSelection, computerSelection);





