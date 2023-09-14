
//import sum from './index';
import {
  
  capitalize,
  reverse,
  calculator,
  caesar,
  analyzeArray
} from "./index";




//capitalize string test

test('check if first letter is capital', () => {
  expect(capitalize('hello')).toBe('Hello');
});

//reverse string test

test('check if string is reversed', () => {
  expect(reverse('real')).toBe('laer');
});

//calculator tests
test('check if adds', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('check if subtracts', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('check if multiplies', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test('check if divides', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

//ceasar tests

test('check if shifts', () => {
  expect(caesar(2, 'ab')).toBe('cd');
});

test('check if shifts past z', () => {
  expect(caesar(1, 'az')).toBe('ba');
});

test('works with numbers and char', () => {
  expect(caesar(1, 'a.z1')).toBe('b.a1');
});

test('works with upper and lower cases', () => {
  expect(caesar(2, 'Ab')).toBe('Cd');
});

//analyze array

test('test analyze array for correct object', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    "average": 4,
    "min": 1,
    "max": 8,
    "length": 6
});
});