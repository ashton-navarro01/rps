let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices.at(randomNumber);
}

function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors:");
    while(true) {
        switch(choice.toLowerCase()){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            choice = prompt("Invalid choice! Choose rock, paper or scissors:");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
        return;
    }

    else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
        return;
    }

    else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
        return;
    }

    else if (humanChoice == computerChoice) {
        console.log("Tie game!");
        return;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        computerScore += 1;
        return;
    }
}

function playGame(){
    let humanSelection;
    let computerSelection;
    
    for(let round = 0; round < 5; round++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Human score: ${humanScore} vs Computer score: ${computerScore}`);
}