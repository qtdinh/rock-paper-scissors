let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
const btn = document.querySelector('#rock');
const btn1 = document.querySelector('#paper');
const btn2 = document.querySelector('#scissors');
const divResults = document.querySelector(".results");


function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    let textResults = '';
    if(playerSelection === computerSelection) {
        textResults =
        `Player: ${playerScore} Computer: ${computerScore}
        It's a Tie! You both picked ${playerSelection}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        textResults =
        `Player: ${++playerScore} Computer: ${computerScore}
        You Win! Rock beats Scissors`;

    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        textResults =
        `Player: ${++playerScore} Computer: ${computerScore}
         You Win! Paper beats Rock`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        textResults =
        `Player: ${++playerScore} Computer: ${computerScore}
         You Win! Scissors beats Paper`;

    } else {
        textResults =
        `Player: ${playerScore} Computer: ${++computerScore}
        You Lose! ${computerSelection} beats ${playerSelection}`;

    }
    divResults.innerHTML = textResults;
}

function game(playerSelection) {

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    if (playerScore === 5) {
        alert("The player has won the game!");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert("The computer has won the game!");
        playerScore = 0;
        computerScore = 0;
    }

}

btn.addEventListener('click', function() {
    game('Rock');
});

btn1.addEventListener('click', function() {
    game('Paper');
});

btn2.addEventListener('click', function() {
    game('Scissors');
});