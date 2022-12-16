import { Game } from "./game";
import { UI } from "./ui";
import './styles/main.css';

const DOM = UI();
DOM.renderPlayerWeaponOptions();
DOM.renderScoreArea();

const game = Game();
game.playGameLoop();