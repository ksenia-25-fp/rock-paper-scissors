function getComputerChoice () {
    let randomNum = Math.random();

    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    const buttonRock = document.querySelector ("#rock");
    buttonRock.addEventListener('click', () => playRound("rock", getComputerChoice()));

    const buttonPaper = document.querySelector ("#paper");
    buttonPaper.addEventListener('click', () => playRound("paper", getComputerChoice()));

    const buttonScissors = document.querySelector ("#scissors");
    buttonScissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));

    const resultDiv = document.querySelector("#result");
    const score = document.querySelector("#score");


    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            resultDiv.textContent = "A draw. You’re not so easy to beat!";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")) {
            resultDiv.textContent = "You win!";
            humanScore ++; 
        } else {
            resultDiv.textContent = "You lose! Hahahaha";
            computerScore ++;
        } 

        score.textContent = `Score: Player ${humanScore} - ${computerScore} Computer`;

        if (humanScore === 5) {
            alert ("You are the ultimate champion!")
        } else if (computerScore === 5) {
            alert ("Machine uprising is here. You lost the game.")
        }
    }
}

playGame();