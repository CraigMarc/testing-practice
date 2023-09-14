//const sum = require('./sum');
import sum from './function';
console.log(sum(1,2))

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
