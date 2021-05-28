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
// function getPrimes(num) {
//   for (let index = 2; index <= num; index += 1) {
//     console.log('STEP_1 '+index);
//     let isPrime = true;
//     for (let number = 2; number < index; number += 1) {
//       console.log('STEP_2 '+index);
//       console.log('STEP_2 '+number);

//       if (index % number === 0) {
//         console.log('number is not prime');
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(index);
//     }
//   }
// }

// test data
// console.log(getPrimes(15));
// console.log(getPrimes(5));


// const squareArray = arr => {
//   if(!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map(num => num * num);
// }
// console.log(squareArray([1,2,3]));

const squareArray = arr=>Array.isArray? arr.map(num=>num*num):null;

// input: number
// output: boolean
function checkIsPrime(number){
  for (let innerNum = 2; innerNum < number; innerNum += 1) {
    if (number % innerNum === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    
    if (checkIsPrime(number)) {
      console.log(number);
    }
  }
}

console.log(getPrimes(15));