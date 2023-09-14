/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analyzeArray: () => (/* binding */ analyzeArray),
/* harmony export */   caesar: () => (/* binding */ caesar),
/* harmony export */   calculator: () => (/* binding */ calculator),
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   reverse: () => (/* binding */ reverse)
/* harmony export */ });
//import './styles.css';

//capitalize string
function capitalize(string) {

    return string[0].toUpperCase() + string.slice(1)

}


//reverse string
function reverse(string) {

    let arr = []

    for (let i = string.length; i >= 0; i--) {
        arr.push(string[i])
    }
    return arr.join("")
}

//calculator
const add = function (first, second) {
    return first + second
}

const subtract = function (first, second) {
    return first - second
}

const multiply = function (first, second) {
    return first * second
}

const divide = function (first, second) {
    return first / second
}

const calculator = {
    add,
    subtract,
    divide,
    multiply,
};


//Caesar cipher

function caesar(index, string) {

    let regex = /[a-zA-Z]/
    let arr = []

    for (let i = 0; i < string.length; i++) {
        if (regex.test(string[i]) == true) {

            let shift = string.charCodeAt(i) + index


            if (/[a-z]/.test(string[i]) == true && shift > 122) {
                shift = (shift - 122) + 96
            }

            if (/[A-Z]/.test(string[i]) == true && shift > 90) {
                shift = (shift - 90) + 64

            }



            arr.push(String.fromCharCode(shift))
        }
        else { arr.push(string[i]) }

    }
    return arr.join('')
}

//analyze array

function analyzeArray(array) {

    const average = array => array.reduce((a, b) => a + b) / array.length;

    const length = array.length

    const min = Math.min.apply(null, array)

    const max = Math.max.apply(null, array);

    return { average: average(array), min: min, max: max, length: length }

}




//export default sum;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhOztBQUViOzs7OztBQUtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGluZy1wcmFjdGljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0aW5nLXByYWN0aWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0aW5nLXByYWN0aWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVzdGluZy1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rlc3RpbmctcHJhY3RpY2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuLy9jYXBpdGFsaXplIHN0cmluZ1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcblxuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxuXG59XG5cblxuLy9yZXZlcnNlIHN0cmluZ1xuZnVuY3Rpb24gcmV2ZXJzZShzdHJpbmcpIHtcblxuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IHN0cmluZy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGFyci5wdXNoKHN0cmluZ1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGFyci5qb2luKFwiXCIpXG59XG5cbi8vY2FsY3VsYXRvclxuY29uc3QgYWRkID0gZnVuY3Rpb24gKGZpcnN0LCBzZWNvbmQpIHtcbiAgICByZXR1cm4gZmlyc3QgKyBzZWNvbmRcbn1cblxuY29uc3Qgc3VidHJhY3QgPSBmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdCAtIHNlY29uZFxufVxuXG5jb25zdCBtdWx0aXBseSA9IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgcmV0dXJuIGZpcnN0ICogc2Vjb25kXG59XG5cbmNvbnN0IGRpdmlkZSA9IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgcmV0dXJuIGZpcnN0IC8gc2Vjb25kXG59XG5cbmNvbnN0IGNhbGN1bGF0b3IgPSB7XG4gICAgYWRkLFxuICAgIHN1YnRyYWN0LFxuICAgIGRpdmlkZSxcbiAgICBtdWx0aXBseSxcbn07XG5cblxuLy9DYWVzYXIgY2lwaGVyXG5cbmZ1bmN0aW9uIGNhZXNhcihpbmRleCwgc3RyaW5nKSB7XG5cbiAgICBsZXQgcmVnZXggPSAvW2EtekEtWl0vXG4gICAgbGV0IGFyciA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocmVnZXgudGVzdChzdHJpbmdbaV0pID09IHRydWUpIHtcblxuICAgICAgICAgICAgbGV0IHNoaWZ0ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSkgKyBpbmRleFxuXG5cbiAgICAgICAgICAgIGlmICgvW2Etel0vLnRlc3Qoc3RyaW5nW2ldKSA9PSB0cnVlICYmIHNoaWZ0ID4gMTIyKSB7XG4gICAgICAgICAgICAgICAgc2hpZnQgPSAoc2hpZnQgLSAxMjIpICsgOTZcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKC9bQS1aXS8udGVzdChzdHJpbmdbaV0pID09IHRydWUgJiYgc2hpZnQgPiA5MCkge1xuICAgICAgICAgICAgICAgIHNoaWZ0ID0gKHNoaWZ0IC0gOTApICsgNjRcblxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgYXJyLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShzaGlmdCkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IGFyci5wdXNoKHN0cmluZ1tpXSkgfVxuXG4gICAgfVxuICAgIHJldHVybiBhcnIuam9pbignJylcbn1cblxuLy9hbmFseXplIGFycmF5XG5cbmZ1bmN0aW9uIGFuYWx5emVBcnJheShhcnJheSkge1xuXG4gICAgY29uc3QgYXZlcmFnZSA9IGFycmF5ID0+IGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gYXJyYXkubGVuZ3RoO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoXG5cbiAgICBjb25zdCBtaW4gPSBNYXRoLm1pbi5hcHBseShudWxsLCBhcnJheSlcblxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGFycmF5KTtcblxuICAgIHJldHVybiB7IGF2ZXJhZ2U6IGF2ZXJhZ2UoYXJyYXkpLCBtaW46IG1pbiwgbWF4OiBtYXgsIGxlbmd0aDogbGVuZ3RoIH1cblxufVxuXG5cblxuXG4vL2V4cG9ydCBkZWZhdWx0IHN1bTtcbmV4cG9ydCB7XG4gICAgY2FwaXRhbGl6ZSxcbiAgICByZXZlcnNlLFxuICAgIGNhbGN1bGF0b3IsXG4gICAgY2Flc2FyLFxuICAgIGFuYWx5emVBcnJheVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=