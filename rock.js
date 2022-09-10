let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('input');
/*const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
*/

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

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playerSelection);
    result = '';
    if (playerSelection == computerSelection) {
        result = ('You chose ' + playerSelection +' and the computer chose ' + computerSelection + ', so nobody got any points.')
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
        result = ('You chose ' + playerSelection +' and the computer chose ' + computerSelection + ', so you got a point!')
        playerScore = playerScore + 1;
    }
    else if ((computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'scissors' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'rock')) {
        result = ('You chose ' + playerSelection +' and the computer chose ' + computerSelection + ', so the computer got a point :/')
        computerScore = computerScore + 1;
    }
    else {
        result =  'Something weird happened';
    }
    if (playerScore == 5 || computerScore == 5) {
        running_score_text = ('Game is over! Final score is player: ' + playerScore + ' computer: ' + computerScore)
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
    
    else {
        running_score_text = ('Player Score: ' + playerScore + ' Computer Score: ' + computerScore) 
    } 

    console.log('Player Score is ' + playerScore);
    console.log('Computer Score is ' + computerScore);
    document.getElementById('result').innerHTML = result;
    document.getElementById('running_score').innerHTML = running_score_text;
    document.getElementById('result').style.cssText = 'color: blue; background: white;';   
    
    return
};


/*
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
        result = ('Player Score: ' + playerScore + ' Computer Score: ' + computerScore);
        if (i == 4) {
            result = ('End of game.');
        }
    }
    document.getElementById('result').innerHTML = result
    return
};


game();
*/


/*content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
*/

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
        console.log("Ran")
    });
  });



             
