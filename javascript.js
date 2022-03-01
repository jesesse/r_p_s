
/* Game of Rock Paper Scissors. Race to 3. */

let playerScore = 0;
let computerScore = 0;
let score = (`Player: ${playerScore} Computer: ${computerScore}`);


//Starts the game. 
game();

//The game starts, and starts over until either one has 3 points.
function game() {
    
    while(playerScore < 3 && computerScore < 3) {
        checkResult(getPlayerChoise(), getComputerChoise())
    }

    if (playerScore > computerScore) { 
        console.log(`YOU WIN!
        FINAL SCORE: ${score}`);
    } else console.log(`YOU LOSE!
FINAL SCORE: ${score}`);
}


/*
Asks the player their choise, 
then asks a validate-function to validate it until player gives a answer in correct form, 
then return the choise. 
*/
function getPlayerChoise() {

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

/* Tells the user the result of the round and updates the score*/
function even() {
    console.log(`its a tie, again!
${score}`)
    
}

/* Tells the user the result of the round and updates the score */
function win() {
    score = (`Player: ${++playerScore} Computer: ${computerScore}`);
    console.log(`YOU WIN! 
${score}`)

}

/* Tells the user the result of the round and updates the score*/
function lose() {
    score = (`Player: ${playerScore} Computer: ${++computerScore}`);
    console.log(`You lose.
${score}`)

}



