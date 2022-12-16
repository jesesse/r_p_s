import { Player } from "./player";
import { UI } from "./ui";

export const Game = () => {
    
    const DOM = UI();
    const player1 = Player(false);
    const cpu = Player(true);

    const playGameLoop = () => {
        
        let cpuWeapon = cpu.pickWeapon();
        let player1Weapon = player1.pickWeapon();


        if (player1Weapon === "rock") {
            if (cpuWeapon === "paper") cpu.win()
            if (cpuWeapon === "scissors") player1.win()

        }
        if (player1Weapon === "paper") {
            if (cpuWeapon === "rock") player1.win()
            if (cpuWeapon === "scissors") cpu.win()

        }
        if (player1Weapon === "scissors") {
            if (cpuWeapon === "rock") cpu.win()
            if (cpuWeapon === "paper") player1.win()
        }

        DOM.renderScoreArea(player1.getScore(), cpu.getScore());
        
        if (player1.getScore() === 5 || cpu.getScore() === 5) return;
        else playGameLoop();
    }

    return{
        playGameLoop
    }

}