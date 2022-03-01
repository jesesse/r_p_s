// PLAN



/*Player chooses rock papaer or scissors and it will be validated, then computer randomizez its choise, then program will check witch one won, and continue approprately */

const playersChoise = playerChoise();
const computersChoise = computerChoise();

checkResult(playersChoise, computersChoise);



//Ask the player theys choise and validate it and return it.
function playerChoise() {

    let choise = prompt("Choose either 'rock', 'paper' or 'scissors'", "");

    if (!validateChoise(choise)) {
        alert("check your spelling")
        playerChoise();
    } else {
        return choise;
    }
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
    alert("its a tie, again!")

}

function win() {
    alert("YOU WIN!")

}

function lose() {
    alert("You lose, try again")

}



