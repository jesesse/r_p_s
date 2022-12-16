import { Player } from "./player";
import { UI } from "./ui";

export const Game = () => {
    
    const DOM = UI();
    const player1 = Player(false);
    const cpu = Player(true);

    const playGameLoop = (player1Weapon) => {

        if (player1.getScore() === 5 || cpu.getScore() === 5) return;
        
        let cpuWeapon = cpu.pickWeapon();

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
        
        DOM.renderArena(player1Weapon, cpuWeapon);
        DOM.renderScoreArea(player1.getScore(), cpu.getScore());
    }

    return{
        playGameLoop
    }

}