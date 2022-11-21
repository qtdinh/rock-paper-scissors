let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log(`Player: ${++playerScore} Computer: ${++computerScore}`);
        return `It's a Tie! You both picked ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;  
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`Player: ${++playerScore} Computer: ${computerScore}`);
        return `You Win! Rock beats Scissors`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`Player: ${++playerScore} Computer: ${computerScore}`);
        return `You Win! Paper beats Rock`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`Player: ${++playerScore} Computer: ${computerScore}`);
        return `You Win! Scissors beats Paper`;
    } else {
        console.log(`Player: ${playerScore} Computer: ${++computerScore}`);
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + 
        computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter rock, paper, or scissors", "");
    if(playerSelection === null || playerSelection === undefined) {
        alert("cancel");
        break;
    }
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }
}
