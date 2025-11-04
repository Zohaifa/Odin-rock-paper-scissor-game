let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*10);
    switch(randomNumber%3){
        case 0:
            return "rock";
        case 1:
            return "paper" ;
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?", "");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === "rock"){
        switch(computerChoice){
            case "rock":
                return "Oof! It's a draw";
            case "paper":
                computerScore++;
                return "Damn... you lost";
            case "scissor":
                humanScore++;
                return "Yay! you win!!"
        }
    }
    else if(humanChoice === "paper"){
        switch(computerChoice){
            case "rock":
                humanScore++;
                return "Yay! you win!!"
            case "paper":
                return "Oof! It's a draw";
            case "scissor":
                computerScore++;
                return "Damn... you lost";
        }
    }
    else{
        switch(computerChoice){
            case "rock":
                computerScore++;
                return "Damn... you lost";
            case "paper":
                humanScore++;
                return "Yay! you win!!"
            case "scissor":
                return "Oof! It's a draw";
        }
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log("you choose " + humanChoice);
console.log("computer chose " + computerChoice);
console.log(playRound(humanChoice, computerChoice))