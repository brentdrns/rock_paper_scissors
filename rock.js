let getComputerChoice = () => {
    let randomGet = Math.floor(Math.random() * 3) + 1;
    if (randomGet == 1) {
        return 'rock';
    }
    else if (randomGet == 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
};

let playRound = (playerSelection) => {
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playerSelection);
    if (playerSelection == computerSelection) {
        return 'tie';
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return 'player wins';
    }
    else if ((computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'scissors' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'rock')) {
        return 'computer wins';
    }
    else {
        return 'confused';
    }

};

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("rock, paper, or scissors?").toLowerCase();

        gameResult = playRound(playerSelection);
        if (gameResult == 'player wins') {
            playerScore = playerScore + 1;
        }
        else if (gameResult == 'computer wins') {
            computerScore = computerScore + 1;
        }
        else {

        }
        console.log('Player Score: ' + playerScore + ' Computer Score: ' + computerScore);
        if (i == 4) {
            console.log('End of game.');
        }
    }
};

game();