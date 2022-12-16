import { Game } from "./game";
import { UI } from "./ui";
import './styles/main.css';

const DOM = UI();
DOM.renderGame();
const game = Game();

let btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const playerWapon = btn.textContent;
        console.log(playerWapon);
        game.playGameLoop(playerWapon)
    })
})