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
export {
    capitalize,
    reverse,
    calculator,
    caesar,
    analyzeArray
};