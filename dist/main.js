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
/* harmony export */   caesar: () => (/* binding */ caesar),
/* harmony export */   calculator: () => (/* binding */ calculator),
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   reverse: () => (/* binding */ reverse),
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
//import './styles.css';

function sum(a, b) {
    return a + b;
}
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
    

    if (/[a-z]/.test(string[i]) == true && shift > 122 ) {
        shift = (shift - 122) + 96
    }

    if (/[A-Z]/.test(string[i]) == true && shift > 90 ) {
        shift = (shift - 90) + 64
        
    }


   
    arr.push(String.fromCharCode(shift))
}
else {arr.push(string[i])}

}
return arr.join('')
}





//export default sum;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQixtQkFBbUI7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBOzs7Ozs7QUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RpbmctcHJhY3RpY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdGluZy1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVzdGluZy1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3RpbmctcHJhY3RpY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0aW5nLXByYWN0aWNlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmZ1bmN0aW9uIHN1bShhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBiO1xufVxuLy9jYXBpdGFsaXplIHN0cmluZ1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcblxuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxuXG59XG5cbi8vcmV2ZXJzZSBzdHJpbmdcbmZ1bmN0aW9uIHJldmVyc2Uoc3RyaW5nKSB7XG5cbiAgICBsZXQgYXJyID0gW11cblxuICAgIGZvciAobGV0IGkgPSBzdHJpbmcubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgICAgICBhcnIucHVzaChzdHJpbmdbaV0pXG4gICAgfVxuICAgIHJldHVybiBhcnIuam9pbihcIlwiKVxufVxuXG4vL2NhbGN1bGF0b3JcbmNvbnN0IGFkZCA9IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgcmV0dXJuIGZpcnN0ICsgc2Vjb25kXG59XG5cbmNvbnN0IHN1YnRyYWN0ID0gZnVuY3Rpb24gKGZpcnN0LCBzZWNvbmQpIHtcbiAgICByZXR1cm4gZmlyc3QgLSBzZWNvbmRcbn1cblxuY29uc3QgbXVsdGlwbHkgPSBmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdCAqIHNlY29uZFxufVxuXG5jb25zdCBkaXZpZGUgPSBmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdCAvIHNlY29uZFxufVxuXG5jb25zdCBjYWxjdWxhdG9yID0ge1xuICAgIGFkZCxcbiAgICBzdWJ0cmFjdCxcbiAgICBkaXZpZGUsXG4gICAgbXVsdGlwbHksXG4gIH07XG5cblxuLy9DYWVzYXIgY2lwaGVyXG5cbmZ1bmN0aW9uIGNhZXNhcihpbmRleCwgc3RyaW5nKSB7XG5cbmxldCByZWdleCA9IC9bYS16QS1aXS9cbmxldCBhcnIgPSBbXVxuXG5mb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuaWYgKHJlZ2V4LnRlc3Qoc3RyaW5nW2ldKSA9PSB0cnVlKSB7XG5cbiAgICBsZXQgc2hpZnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKSArIGluZGV4XG4gICAgXG5cbiAgICBpZiAoL1thLXpdLy50ZXN0KHN0cmluZ1tpXSkgPT0gdHJ1ZSAmJiBzaGlmdCA+IDEyMiApIHtcbiAgICAgICAgc2hpZnQgPSAoc2hpZnQgLSAxMjIpICsgOTZcbiAgICB9XG5cbiAgICBpZiAoL1tBLVpdLy50ZXN0KHN0cmluZ1tpXSkgPT0gdHJ1ZSAmJiBzaGlmdCA+IDkwICkge1xuICAgICAgICBzaGlmdCA9IChzaGlmdCAtIDkwKSArIDY0XG4gICAgICAgIFxuICAgIH1cblxuXG4gICBcbiAgICBhcnIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHNoaWZ0KSlcbn1cbmVsc2Uge2Fyci5wdXNoKHN0cmluZ1tpXSl9XG5cbn1cbnJldHVybiBhcnIuam9pbignJylcbn1cblxuXG5cblxuXG4vL2V4cG9ydCBkZWZhdWx0IHN1bTtcbmV4cG9ydCB7XG4gICAgc3VtLFxuICAgIGNhcGl0YWxpemUsXG4gICAgcmV2ZXJzZSxcbiAgICBjYWxjdWxhdG9yLFxuICAgIGNhZXNhcixcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9