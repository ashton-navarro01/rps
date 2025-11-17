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
    const scoreboard = document.getElementById("scoreboard");
    const choices = document.getElementById("choices");
    let message = ""

    if(humanChoice == "rock" && computerChoice == "scissors") {
        message = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore += 1;
    }

    else if(humanChoice == "paper" && computerChoice == "rock") {
        message = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore += 1;
    }

    else if(humanChoice == "scissors" && computerChoice == "paper") {
        message = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore += 1;
    }

    else if (humanChoice == computerChoice) {
        message = "Tie game!";
    }
    else {
        message = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore += 1;
    }

    choices.innerHTML = `You chose: <b>${humanChoice}</b>, and the computer chose: <b>${computerChoice}</b>.<br>${message}`
    scoreboard.innerHTML = `Human Score: ${humanScore}<br>Computer Score: ${computerScore}`
    return;
}

function playGame(){
    let humanSelection;
    let computerSelection;

    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorBtn = document.createElement("button");

    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorBtn.textContent = "Scissors";

    document.body.appendChild(rockBtn);
    document.body.appendChild(paperBtn);
    document.body.appendChild(scissorBtn);


    rockBtn.addEventListener('click', function(event) {
        humanSelection = 'rock';
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })
    paperBtn.addEventListener('click', function(event) {
        humanSelection = 'paper'
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })
    scissorBtn.addEventListener('click', function(event) {
        humanSelection = 'scissors'
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })
}