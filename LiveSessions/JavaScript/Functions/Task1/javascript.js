function getSenseOfLife() {
  return 42;
}
// ===================
function getSquared(num) {
  const res = num * num;
  return res;
}

function getSquared2(num) {
  return num * num;
}

function greeting(age) {
  console.log('I am ' + age + ' years old');
}

const greetingResult = greeting(100);
console.log(greetingResult);
// ================
const someFunc = () => {};

const mult = (num1, num2) => {
  const result = num1 * num2;
  return result;
};

// short option
// const mult2 = (num1, num2) => {
//   return num1 * num2;
// };

// short option
const mult3 = (num1, num2) => num1 * num2;

// =============
const greetingExpression = function (age) {
  console.log('I am ' + age + ' years old');
};
greetingExpression(50);

const square = (num = 0) => num * num;
console.log(square());
