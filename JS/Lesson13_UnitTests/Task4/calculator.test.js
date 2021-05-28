import { calc } from './calculator.js';

it('should check + operation', () => {
  const result = calc('1 + 2');
  expect(result).toEqual(3);
});

it('should check - operation', () => {
    const result = calc('3 - 1');
    expect(result).toEqual(2);
  });

  it('should check * operation', () => {
    const result = calc('3 * 2');
    expect(result).toEqual(6);
  });

  it('should check / operation', () => {
    const result = calc('9 / 3');
    expect(result).toEqual(3);
  });

  it('should work if not string', () => {
    const result = calc(5 - 2);
    expect(result).toEqual(3);
  });
