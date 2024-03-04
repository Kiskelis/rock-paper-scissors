let min = 1;
let max = 3;
let playerSelection;
let computerSelection;
// 1 = rock ; 2 = paper ; 3 = scissors;
const outcome = document.querySelector("#outcome");

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === 1){
        outcome.textContent = "ROCK vs ROCK. It's a draw!";
    }
    else if(playerSelection === "paper" && computerSelection === 2){
        outcome.textContent = "PAPER vs PAPER. It's a draw!";
    }
    else if(playerSelection === "scissors" && computerSelection === 3){
        outcome.textContent = "SCISSORS vs SCISSORS. It's a draw!";
    }
    else if(playerSelection === "rock" && computerSelection === 2){
        outcome.textContent = "ROCK vs PAPER. Paper beats rock. You loose!";
    }
    else if(playerSelection === "rock" && computerSelection === 3){
        outcome.textContent = "ROCK vs SCISSORS. Rock beats scissors. You win!"
    }
    else if(playerSelection === "paper" && computerSelection === 1){
        outcome.textContent = "PAPER vs ROCK. Paper beats rock. You win!"
    }
    else if(playerSelection === "paper" && computerSelection === 3){
        outcome.textContent = "PAPER vs SCISSORS. Scissors beats paper. You loose!"
    }
    else if(playerSelection === "scissors" && computerSelection === 1){
        outcome.textContent = "SCISSORS vs ROCK. Rock beats scissors. You loose!"
    }
    else if(playerSelection === "scissors" && computerSelection === 2){
        outcome.textContent = "SCISSORS vs PAPER. Scissors beats paper. You win!"
    }
    else if(playerSelection === "scissors" && computerSelection === 2){
        outcome.textContent = "SCISSORS vs PAPER. Scissors beats paper. You win!"
    }

}

let rock = document.querySelector("#rock")
rock.addEventListener("click",(e) => {
playerSelection = "rock";
computerSelection =  Math.floor((Math.random() * max) + min);
playRound(playerSelection, computerSelection);
});


let paper = document.querySelector("#paper")
paper.addEventListener("click",(e) => {
playerSelection = "paper";
computerSelection =  Math.floor((Math.random() * max) + min);
playRound(playerSelection, computerSelection);
});

let scissors = document.querySelector("#scissors")
scissors.addEventListener("click",(e) => {
playerSelection = "scissors";
computerSelection =  Math.floor((Math.random() * max) + min);
playRound(playerSelection, computerSelection);
});



















