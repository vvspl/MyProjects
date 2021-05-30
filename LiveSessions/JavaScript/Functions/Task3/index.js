// How to work on tech tasks. Step by step guide
// 1. Learn requirement
// 2. Create step by step algo (& input/output for funtions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1. Iterate numbers from 2 to N
// 2. check if number is prime
// 2.1 iterate numbers from 2 number (10)
// 2.2 if number is divided by any other - not prime
// 1
// 2 - true
// 3 - true
// 4 - false
// ......
// ......

// input - number
// output - undefined
function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    let isPrime = true;
    for (let number = 2; number < index; number += 1) {
      if (index % number === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(index);
    }
  }
}

console.log(getPrimes(15));
