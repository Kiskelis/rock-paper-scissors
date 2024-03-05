let min = 1;
let max = 3;
let playerSelection;
let computerSelection;

// 1 = rock ; 2 = paper ; 3 = scissors;

const outcome = document.querySelector("#outcome");
const playerPoints = document.querySelector("#playerPoints");
let playerNumbers = "";
const computerPoints = document.querySelector("#computerPoints");
let computerNumbers = "";
const roundsPlayed = document.querySelector("#roundsPlayed");
let roundsPlayedNum = "";
const winer = document.querySelector("#winer");
let rounds = "";

document.getElementById("submit").onclick = function(){
    rounds = document.getElementById("userInput").value;
    rounds = parseInt(rounds);
    const bandom = document.querySelector("#bandom");
    bandom.textContent = "You are playing " + rounds + " rounds";
    if(rounds <= 0){
    bandom.textContent = "I don't know how to stop you from choosing negative numbers, so please use positive numbers"
    };
    }

  

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
        computerNumbers++;
        computerPoints.textContent = `Computer points : ${computerNumbers}`;
    }
    else if(playerSelection === "rock" && computerSelection === 3){
        outcome.textContent = "ROCK vs SCISSORS. Rock beats scissors. You win!"
        playerNumbers++;
        playerPoints.textContent = `Player points : ${playerNumbers}`;
    }
    else if(playerSelection === "paper" && computerSelection === 1){
        outcome.textContent = "PAPER vs ROCK. Paper beats rock. You win!"
        playerNumbers++;
        playerPoints.textContent = `Player points : ${playerNumbers}`;
    }
    else if(playerSelection === "paper" && computerSelection === 3){
        outcome.textContent = "PAPER vs SCISSORS. Scissors beats paper. You loose!"
        computerNumbers++;
        computerPoints.textContent = `Computer points : ${computerNumbers}`;
    }
    else if(playerSelection === "scissors" && computerSelection === 1){
        outcome.textContent = "SCISSORS vs ROCK. Rock beats scissors. You loose!"
        computerNumbers++;
        computerPoints.textContent = `Computer points : ${computerNumbers}`;
    }
    else if(playerSelection === "scissors" && computerSelection === 2){
        outcome.textContent = "SCISSORS vs PAPER. Scissors beats paper. You win!"
        playerNumbers++;
        playerPoints.textContent = `Player points : ${playerNumbers}`;
    }
    else if(playerSelection === "scissors" && computerSelection === 2){
        outcome.textContent = "SCISSORS vs PAPER. Scissors beats paper. You win!"
        playerNumbers++;
        playerPoints.textContent = `Player points : ${playerNumbers}`;
    }
}

let rock = document.querySelector("#rock")
rock.addEventListener("click",(e) => {
playerSelection = "rock";
computerSelection =  Math.floor((Math.random() * max) + min);
roundsPlayedNum++
roundsPlayed.textContent = `Rounds played : ${roundsPlayedNum}`;
playRound(playerSelection, computerSelection);
if(playerNumbers > computerNumbers && rounds === roundsPlayedNum){
    winer.textContent = "YOU ARE THE WINNER!";
}
else if(computerNumbers > playerNumbers && rounds === roundsPlayedNum){
    winer.textContent = "THE COMPUTER HAS WON!"; 
}
else if(computerNumbers === playerNumbers && rounds === roundsPlayedNum){
    winer.textContent = "NOBODY WINS THIS TIME..";
}
});


let paper = document.querySelector("#paper")
paper.addEventListener("click",(e) => {
playerSelection = "paper";
computerSelection =  Math.floor((Math.random() * max) + min);
roundsPlayedNum++
roundsPlayed.textContent = `Rounds played : ${roundsPlayedNum}`;
playRound(playerSelection, computerSelection);
if(playerNumbers > computerNumbers && rounds === roundsPlayedNum){
    winer.textContent = "YOU ARE THE WINNER!";
    
}
else if(computerNumbers > playerNumbers && rounds === roundsPlayedNum){
    winer.textContent = "THE COMPUTER HAS WON!";
    
}
else if(computerNumbers === playerNumbers && rounds === roundsPlayedNum){
    winer.textContent = "NOBODY WINS THIS TIME..";
}
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click",(e) => {
playerSelection = "scissors";
computerSelection =  Math.floor((Math.random() * max) + min);
roundsPlayedNum++
roundsPlayed.textContent = `Rounds played : ${roundsPlayedNum}`;
playRound(playerSelection, computerSelection);
if(playerNumbers > computerNumbers && rounds === roundsPlayedNum){
    winer.textContent = "YOU ARE THE WINNER!";
    
}
else if(computerNumbers > playerNumbers && rounds === roundsPlayedNum){
    winer.textContent = "THE COMPUTER HAS WON!";
    
}
else if(computerNumbers === playerNumbers && rounds === roundsPlayedNum){
    winer.textContent = "NOBODY WINS THIS TIME..";
}
});

let reset = document.querySelector("#reset");
reset.addEventListener("click",(e) => {
    playerNumbers = 0;
    playerPoints.textContent = `Player points : ${playerNumbers}`;
    roundsPlayedNum = 0;
    roundsPlayed.textContent = `Rounds played : ${roundsPlayedNum}`;
    computerNumbers = 0;
    computerPoints.textContent = `Computer points : ${computerNumbers}`;
    winer.textContent = "";
    rounds = "";
    });



































