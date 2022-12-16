import { Player } from "./player";


export const Game = () => {
    
    const player1 = Player(false);
    const cpu = Player(true);

    const playGameLoop = () => {
        
        let cpuWeapon = cpu.pickWeapon();
        let player1Weapon = player1.pickWeapon();

        console.log(player1Weapon)
        console.log(cpuWeapon)


        if (player1Weapon === "rock") {
            if (cpuWeapon === "paper") player1.takeDamage();
            if (cpuWeapon === "scissors") cpu.takeDamage();

        }
        if (player1Weapon === "paper") {
            if (cpuWeapon === "rock") cpu.takeDamage();
            if (cpuWeapon === "scissors") player1.takeDamage();

        }
        if (player1Weapon === "scissors") {
            if (cpuWeapon === "rock") player1.takeDamage();
            if (cpuWeapon === "paper") cpu.takeDamage();
        }

        console.log(player1.getHp())
        console.log(cpu.getHp())

        console.log('--------------------------------------------------')

        if (player1.getHp() === 0 || cpu.getHp() === 0) return;
        else playGameLoop();
    }

    return{
        playGameLoop
    }

}