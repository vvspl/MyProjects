const calc = (expression) => {
  const [a, operator, b] = expression.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(a) + +b;
      break;
    case '-':
      result = a - b;
      break;
    case '/':
      result = a / b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      return null;
  }
  return `${expression} = ${result}`;
};

const str = '4 * 2';

calc(str);
