import { reverseArray, withdraw, getAdults } from './multiunit.js';

it('should check reverse operation', () => {
  const result = reverseArray([2, 3]);
  expect(result).toEqual([3, 2]);
});

it('should check reverse operation', () => {
  const result = reverseArray([2, 3, 4, 5]);
  expect(result).toEqual([5, 4, 3, 2]);
});

it('should check if to put string value', () => {
  const result = reverseArray('Some string');
  expect(result).toEqual(null);
});

it('should get the amount after withdraw', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should check reverse operation', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});
