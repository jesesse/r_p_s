
/* Game of Rock Paper Scissors. Race to 5. */

const results = document.querySelector('.results')
const message = document.querySelector('.message')
const message2 = document.querySelector('.message2')
const result = document.querySelector('.result')
const buttons = document.querySelectorAll('button')

for(btn of buttons){
    btn.addEventListener("click", game)
}


let playerScore = 0;
let computerScore = 0;
let score = (`Player: ${playerScore} Computer: ${computerScore}`);
let playerChoise;


function restart(){
    playerScore = 0;
    computerScore = 0;
    score = (`Player: ${playerScore} Computer: ${computerScore}`);
    console.clear();
    return;
}


function game(e) {
    
    playerChoise = e.target.className;
    checkResult(playerChoise, getComputerChoise())

}


//Generates a random choise for computer
function getComputerChoise() {

    let choise = Math.random();

    if (choise < 0.33333) return "rock";
    if (choise > 0.33333 && choise < 0.66666) return "paper";
    if (choise > 0.66666) return "scissors";

}


/*
Tells the player the choises of them and their computer
Check which one will win, computer or player
*/
function checkResult(playerChoise, computerChoise) {

    message2.textContent = `You chose: ${playerChoise.toUpperCase()} & The computer chose: ${computerChoise.toUpperCase()}`;


    if (playerChoise == "rock") {
        if (computerChoise == "rock") even();

        if (computerChoise == "paper") lose();

        if (computerChoise == "scissors") win();
    }

    if (playerChoise == "paper") {
        if (computerChoise == "paper") even();

        if (computerChoise == "scissors") lose();

        if (computerChoise == "rock") win()
    }

    if (playerChoise == "scissors") {
        if (computerChoise == "scissors") even();

        if (computerChoise == "rock") lose();

        if (computerChoise == "paper") win();

    }


}

/* Tells the user the result of the round and updates the score*/
function even() {
    message.textContent = `its a tie, again!`;
    result.textContent = `${score}`

}

/* Tells the user the result of the round and updates the score */
function win() {
    score = (`Player: ${++playerScore} Computer: ${computerScore}`);
    if (playerScore == 5) {
        message.textContent = "WOU WIN THE WHOLE SHIT";
        result.textContent = score;
        restart();
        return;
    }     
    message.textContent =`YOU WIN!`;
    result.textContent =`${score}`;

}

/* Tells the user the result of the round and updates the score*/
function lose() {
    score = (`Player: ${playerScore} Computer: ${++computerScore}`);
    if (computerScore == 5) {
        message.textContent = "WOU LOSE THE WHOLE SHIT";
        result.textContent = score;
        restart();
        return;
    }  
    message.textContent =`You lose.`;
    result.textContent = `${score}`;

}

