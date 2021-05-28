// put your code here
function getParsedIntegers(arr) {
  return arr.map((num) => Number.parseInt(num, 10) );
}

const getParsedIntegersV2 = (arr) => arr.map((num) => parseInt(num, 10));

const getParsedFloats = (arr) => arr.map((num) => Number.parseFloat(num, 10));

const getParsedFloatsV2 = (arr) => arr.map((num) => parseFloat(num, 10));

const arr = [2.4, 55.6, 'zdv', NaN, undefined, '-55.67'];

getParsedIntegers(arr);
