function getComputerChoice (){

let randomNum = Math.random();

if (randomNum < 0.33) {
    return "rock";
} else if (randomNum < 0.66){
    return "paper";
} else {
    return "scissors";
}
}

let humanScore = 0;
let computerScore = 0;


function getHumanChoice (){
let choice = prompt ("Enter rock, paper or scissors");
choice = choice.toLowerCase();
return choice;
}


function playRound (humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
    console.log ("A draw. You’re not so easy to beat!")
} else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    console.log ("You win!")
    humanScore ++; 
} else {
    console.log ("You lose! Hahahaha")
    computerScore ++;
} 
console.log (humanScore, computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);