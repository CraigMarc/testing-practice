
//import sum from './index';
import {
  sum,
  capitalize,
  reverse,
} from "./index";


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  

  test('check if first letter is capital', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('check if string is reversed', () => {
    expect(reverse('real')).toBe('laer');
  });

