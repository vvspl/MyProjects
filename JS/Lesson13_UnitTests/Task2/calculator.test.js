// eslint-disable-next-line import/no-unresolved
import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
  const result = getSquaredArray([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 4, 9, 16, 25]);
});

it('should get only odd numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of two numbers', () => {
  const result = getSum(7, 7);
  expect(result).toEqual(14);
});
