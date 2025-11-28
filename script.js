let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*10);
    let result = "";
    switch(randomNumber%3){
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper" ;
            break;
        case 2:
            result = "scissor";
            break;
    }
    return result;
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    let result = ""
    if(humanChoice === "rock"){
        switch(computerChoice){
            case "rock":
                result = "Oof! It's a draw";
            case "paper":
                computerScore++;
                result = "Damn... you lost";
            case "scissor":
                humanScore++;
                result = "Yay! you win!!";
        }
    }
    else if(humanChoice === "paper"){
        switch(computerChoice){
            case "rock":
                humanScore++;
                result = "Yay! you win!!";
            case "paper":
                result = "Oof! It's a draw";
            case "scissor":
                computerScore++;
                result = "Damn... you lost";
        }
    }
    else{
        switch(computerChoice){
            case "rock":
                computerScore++;
                result = "Damn... you lost";
            case "paper":
                humanScore++;
                result = "Yay! you win!!";
            case "scissor":
                result = "Oof! It's a draw";
        }
    }
    //display the game consequences
    const displayDiv = document.querySelector("#game-display");
    displayDiv.innerHTML = "";
    const humanChoicePara = document.createElement("p");
    const computerChoicePara = document.createElement("p");
    const resultPara = document.createElement("p");
    humanChoicePara.innerText = `You chose ${humanChoice}`;
    computerChoicePara.innerText = `Computer chose ${computerChoice}`;
    resultPara.innerText = result;
    displayDiv.appendChild(humanChoicePara);
    displayDiv.appendChild(computerChoicePara);
    displayDiv.appendChild(resultPara);
    updateScore();
}

const body = document.querySelector("#container");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
//playing a round
body.addEventListener("click", (e)=>{
    if(e.target == rockBtn){
        playRound("rock");
    }
    if(e.target == paperBtn){
        playRound("paper");
    }
    if(e.target == scissorBtn){
        playRound("scissors");
    }  
});
//updating score
function updateScore(humanChoice, computerChoice){
    const scoreBox = document.querySelector('#score');
    scoreBox.innerHTML = 
    `<p>Human Score: ${humanScore}</p>
    <p>Computer Score: ${computerScore}</p>`
}


console.log(
`Human Score: ${humanScore}
Computer Score: ${computerScore}`);