
function summ(from, to, printer) {
  console.log(from);
  console.log(to);
  console.log(printer);
  // put your code here
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }

  printer(sum);
}

function printResult(res) {
  // put your code here
  console.log('Result is here: ' + res);
}

// test
const result = summ(5, 15, printResult);
console.log(result);
// =============================


