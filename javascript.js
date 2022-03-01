// PLAN



/*Player chooses rock papaer or scissors and it will be validated, then computer randomizez its choise, then program will check witch one won, and continue approprately */

const playerChoise = playerChoise();
const computerChoise = computerChoise();
        
//Ask the player theys choise and validate it and return it.
playerChoise{
            
    let choise = prompt("give me your choise: Enter: "rock", "paper" or "scissors")
            
        if(!validateChoise(choise)) {
                alert("check your spelling")
                playerChoise(); 
            } else {
                return choise;
            }
 
        }        
    }
    
validateChoise(choise) {
            if choise === rock || if choise === paper || id choise === "scissors"
                return true;
            else
                return false;
        }
        
  
    
        3. Computer chooses a rock or paper or siccsors

        const computerChoise = computerChoise();

        comPuterChoose{
            
            choose = random()1-3;
            

            if choose 1 = choise = rock
            if choise 2 = choise = paper
            id choise 3 = choise = scissores
            
            return computerChoise;
        }

    
    

    4 a function checks, which one will win and show it to the player
        
        checkResult(playerChoise, computerChoise) {
            
            if playerChoise == "rock" {
                if computerChoise == "rock"{
                    even()
                }               
                if compiter Choise == "paper"
                    lost()
                }
                if compuiteChoise == "scissors"
                    won()
            }

            if playerChoise == "paper" {
                if computerChoise == "rock"{
                    even()
                }
                if compiter Choise == "paper"
                    lost()
                }
                if compuiteChoise == "scissors"
                    won()
            }

            if playerChoise == "scissors" {
                if computerChoise == "rock"{
                    even()
                } 
                if compiter Choise == "paper"
                    lost()
                }
                if compuiteChoise == "scissors"
                    won()
            }

         
             
        }

    even() {
        alert("its a tie, again!")
        restart();
    }

    win() {
        alert("YOU WIN!")
        restart();
    }

    lose() {
        alert("You lose, try again")
        restart();
    }
        
    
    
   