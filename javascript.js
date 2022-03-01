// PLAN



/*Player chooses rock papaer or scissors and it will be validated, then computer randomizez its choise, then program will check witch one won, and continue approprately */

let playerScore = 0;
let computerScore = 0;
let score = (`Player: ${playerScore} Computer: ${computerScore}`);

game();

function game() {
    
    while(playerScore < 3 && computerScore < 3) {
        checkResult(playerChoise(), computerChoise())
    }

    if (playerScore > computerScore) { 
        console.log(`YOU WIN!
        FINAL SCORE: ${score}`);
    } else console.log(`YOU LOSE!
FINAL SCORE: ${score}`);
}





//Ask the player theys choise and validate it and return it.
function playerChoise() {

    let choise = prompt("Choose either 'rock', 'paper' or 'scissors'", "");


    while (!validateChoise(choise)) {
        alert("check your spelling")
        choise = prompt("Choose either 'rock', 'paper' or 'scissors'", "");
    }  
    
    return choise;
    
}

// Checks if the choise is spelled correctly and returns true or false accordingly
function validateChoise(choise) {
    
    if (choise === "rock" || choise === "paper" || choise === "scissors") {
        return true;

    } else {
        return false;
    }
}


// Generate a random number between 0-0.999, and choose the computers choise accordingly
function computerChoise() {

    let choise = Math.random();

    if (choise < 0.33) return "rock";
    if (choise > 0.33 && choise < 0.66) return "paper";
    if (choise > 0.66) return "scissors";

}


// Check which one will win, computer or player
function checkResult(playerChoise, computerChoise) {
    
    console.log(`You chose: ${playerChoise}
The computer chose: ${computerChoise}`)

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

function even() {
    console.log(`its a tie, again!
${score}`)
    
}

function win() {
    score = (`Player: ${++playerScore} Computer: ${computerScore}`);
    console.log(`YOU WIN! 
${score}`)

}

function lose() {
    score = (`Player: ${playerScore} Computer: ${++computerScore}`);
    console.log(`You lose.
${score}`)

}



