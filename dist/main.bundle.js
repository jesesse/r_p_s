/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const Game = () => {
    
    const player1 = Player(false);
    const cpu = Player(true);

    const playRound = () => {
        if (player1.hp === 0 || cpu.hp === 0) alert("game over");

        let cpuWeapon = cpu.pickWeapon();

        console.log(cpuWeapon);

    }

    return{
        playRound
    }

}

const Player = () => {
    let hp = 5;

    const takeDamage = () => {
        hp--;
    }

    const pickWeapon = () => {
        let ran = Math.floor(Math.random() * 3);

        switch (ran) {
            case 0 : return "paper";
            case 1 : return "rock";
            case 3 : return "scissors";
        }
    }

    return {
        hp,
        pickWeapon,
        takeDamage
    }
}

let game = Game();
game.playRound();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JfcF9zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgcGxheWVyMSA9IFBsYXllcihmYWxzZSk7XG4gICAgY29uc3QgY3B1ID0gUGxheWVyKHRydWUpO1xuXG4gICAgY29uc3QgcGxheVJvdW5kID0gKCkgPT4ge1xuICAgICAgICBpZiAocGxheWVyMS5ocCA9PT0gMCB8fCBjcHUuaHAgPT09IDApIGFsZXJ0KFwiZ2FtZSBvdmVyXCIpO1xuXG4gICAgICAgIGxldCBjcHVXZWFwb24gPSBjcHUucGlja1dlYXBvbigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGNwdVdlYXBvbik7XG5cbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHBsYXlSb3VuZFxuICAgIH1cblxufVxuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gICAgbGV0IGhwID0gNTtcblxuICAgIGNvbnN0IHRha2VEYW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgIGhwLS07XG4gICAgfVxuXG4gICAgY29uc3QgcGlja1dlYXBvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJhbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuXG4gICAgICAgIHN3aXRjaCAocmFuKSB7XG4gICAgICAgICAgICBjYXNlIDAgOiByZXR1cm4gXCJwYXBlclwiO1xuICAgICAgICAgICAgY2FzZSAxIDogcmV0dXJuIFwicm9ja1wiO1xuICAgICAgICAgICAgY2FzZSAzIDogcmV0dXJuIFwic2Npc3NvcnNcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhwLFxuICAgICAgICBwaWNrV2VhcG9uLFxuICAgICAgICB0YWtlRGFtYWdlXG4gICAgfVxufVxuXG5sZXQgZ2FtZSA9IEdhbWUoKTtcbmdhbWUucGxheVJvdW5kKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9