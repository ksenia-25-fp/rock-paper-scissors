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

function getHumanChoice () {
    let choice = prompt ("Enter rock, paper or scissors");
    choice = choice.toLowerCase();
    return choice;
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log ("A draw. You’re not so easy to beat!")
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log ("You win!")
            humanScore ++; 
        } else {
            console.log ("You lose! Hahahaha")
            computerScore ++;
        } 
        console.log (humanScore, computerScore);
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        alert ("You are the ultimate champion!")
    } else if (computerScore > humanScore) {
        alert ("Machine uprising is here. You lost the game.")
    } else {
        alert ("A total draw!")
    }
}

playGame();