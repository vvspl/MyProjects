import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should check empty array', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should try a string value', () => {
  const result = getMinSquaredNumber('Some string');
  expect(result).toEqual(null);
});

it('should getMinSquaredNumber', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
