/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");



const Game = () => {
    
    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(false);
    const cpu = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(true);

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

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
const Player = () => {
    let hp = 5;

    const takeDamage = () => {
        hp--;
    }

    const getHp = () => {
        return hp;
    }

    const pickWeapon = () => {
        let ran = Math.floor(Math.random() * 3);

        switch (ran) {
            case 0 : return "paper";
            case 1 : return "rock";
            case 2 : return "scissors";
        }
    }

    return {
        getHp,
        pickWeapon,
        takeDamage
    }
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
const UI = () => {

    const renderPlayerWeaponOptions = () => {
        const rock = document.createElement('.div')
        const paper = document.createElement('.div')
        const scissors = document.createElement('.div')

        rock.setAttribute('id', 'rock');
        paper.setAttribute('id', 'paper');
        scissors.setAttribute('id', 'scissors');

        document.appendChild(rock)
        document.appendChild(paper)
        document.appendChild(scissors)
    }

    return{
        renderPlayerWeaponOptions
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



const DOM = (0,_ui__WEBPACK_IMPORTED_MODULE_1__.UI)();
DOM.renderPlayerWeaponOptions();
const game = (0,_game__WEBPACK_IMPORTED_MODULE_0__.Game)();
game.playGameLoop();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOzs7QUFHM0I7QUFDUDtBQUNBLG9CQUFvQiwrQ0FBTTtBQUMxQixnQkFBZ0IsK0NBQU07O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM3Q087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQk87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDSjs7QUFFMUIsWUFBWSx1Q0FBRTtBQUNkO0FBQ0EsYUFBYSwyQ0FBSTtBQUNqQixvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JfcF9zLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vcl9wX3MvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3JfcF9zLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3JfcF9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JfcF9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yX3Bfcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JfcF9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcl9wX3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cblxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgcGxheWVyMSA9IFBsYXllcihmYWxzZSk7XG4gICAgY29uc3QgY3B1ID0gUGxheWVyKHRydWUpO1xuXG4gICAgY29uc3QgcGxheUdhbWVMb29wID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IGNwdVdlYXBvbiA9IGNwdS5waWNrV2VhcG9uKCk7XG4gICAgICAgIGxldCBwbGF5ZXIxV2VhcG9uID0gcGxheWVyMS5waWNrV2VhcG9uKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyMVdlYXBvbilcbiAgICAgICAgY29uc29sZS5sb2coY3B1V2VhcG9uKVxuXG5cbiAgICAgICAgaWYgKHBsYXllcjFXZWFwb24gPT09IFwicm9ja1wiKSB7XG4gICAgICAgICAgICBpZiAoY3B1V2VhcG9uID09PSBcInBhcGVyXCIpIHBsYXllcjEudGFrZURhbWFnZSgpO1xuICAgICAgICAgICAgaWYgKGNwdVdlYXBvbiA9PT0gXCJzY2lzc29yc1wiKSBjcHUudGFrZURhbWFnZSgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllcjFXZWFwb24gPT09IFwicGFwZXJcIikge1xuICAgICAgICAgICAgaWYgKGNwdVdlYXBvbiA9PT0gXCJyb2NrXCIpIGNwdS50YWtlRGFtYWdlKCk7XG4gICAgICAgICAgICBpZiAoY3B1V2VhcG9uID09PSBcInNjaXNzb3JzXCIpIHBsYXllcjEudGFrZURhbWFnZSgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllcjFXZWFwb24gPT09IFwic2Npc3NvcnNcIikge1xuICAgICAgICAgICAgaWYgKGNwdVdlYXBvbiA9PT0gXCJyb2NrXCIpIHBsYXllcjEudGFrZURhbWFnZSgpO1xuICAgICAgICAgICAgaWYgKGNwdVdlYXBvbiA9PT0gXCJwYXBlclwiKSBjcHUudGFrZURhbWFnZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyMS5nZXRIcCgpKVxuICAgICAgICBjb25zb2xlLmxvZyhjcHUuZ2V0SHAoKSlcblxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxuXG4gICAgICAgIGlmIChwbGF5ZXIxLmdldEhwKCkgPT09IDAgfHwgY3B1LmdldEhwKCkgPT09IDApIHJldHVybjtcbiAgICAgICAgZWxzZSBwbGF5R2FtZUxvb3AoKTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHBsYXlHYW1lTG9vcFxuICAgIH1cblxufSIsImV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gICAgbGV0IGhwID0gNTtcblxuICAgIGNvbnN0IHRha2VEYW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgIGhwLS07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SHAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBocDtcbiAgICB9XG5cbiAgICBjb25zdCBwaWNrV2VhcG9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmFuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG5cbiAgICAgICAgc3dpdGNoIChyYW4pIHtcbiAgICAgICAgICAgIGNhc2UgMCA6IHJldHVybiBcInBhcGVyXCI7XG4gICAgICAgICAgICBjYXNlIDEgOiByZXR1cm4gXCJyb2NrXCI7XG4gICAgICAgICAgICBjYXNlIDIgOiByZXR1cm4gXCJzY2lzc29yc1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SHAsXG4gICAgICAgIHBpY2tXZWFwb24sXG4gICAgICAgIHRha2VEYW1hZ2VcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IFVJID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcmVuZGVyUGxheWVyV2VhcG9uT3B0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJy5kaXYnKVxuICAgICAgICBjb25zdCBwYXBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJy5kaXYnKVxuICAgICAgICBjb25zdCBzY2lzc29ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJy5kaXYnKVxuXG4gICAgICAgIHJvY2suc2V0QXR0cmlidXRlKCdpZCcsICdyb2NrJyk7XG4gICAgICAgIHBhcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFwZXInKTtcbiAgICAgICAgc2Npc3NvcnMuc2V0QXR0cmlidXRlKCdpZCcsICdzY2lzc29ycycpO1xuXG4gICAgICAgIGRvY3VtZW50LmFwcGVuZENoaWxkKHJvY2spXG4gICAgICAgIGRvY3VtZW50LmFwcGVuZENoaWxkKHBhcGVyKVxuICAgICAgICBkb2N1bWVudC5hcHBlbmRDaGlsZChzY2lzc29ycylcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHJlbmRlclBsYXllcldlYXBvbk9wdGlvbnNcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aVwiO1xuXG5jb25zdCBET00gPSBVSSgpO1xuRE9NLnJlbmRlclBsYXllcldlYXBvbk9wdGlvbnMoKTtcbmNvbnN0IGdhbWUgPSBHYW1lKCk7XG5nYW1lLnBsYXlHYW1lTG9vcCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==