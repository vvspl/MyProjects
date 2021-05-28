// put your code here
function getFiniteNumbers(arr) {
  return arr.slice().filter((num) => Number.isFinite(num));
}

function getFiniteNumbersV2(arr) {
  return arr.slice().filter((num) => isFinite(num));
}

function getNaN(arr) {
  return arr.slice().filter((num) => Number.isNaN(num));
}

function getNaNV2(arr) {
  return arr.slice().filter((num) => isNaN(num));
}

function getIntegers(arr) {
  return arr.slice().filter((num) => Number.isInteger(num));
}
