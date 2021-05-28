const numbersList1 = [1, 2, 3, 4, 5];

// input - none
// output - number (deleted element)
const res = numbersList1.pop();

console.log(res);
console.log(numbersList1);

const numbersList2 = [1, 2, 3, 4, 5];

// input - number
// output - number
const pushRes = numbersList2.push(111);

console.log(pushRes);
console.log(numbersList2);

const numbersList3 = [1, 2, 3, 4, 5];

// const shiftRes = numbersList3(shiftRes);

// input  -none
// output - number

// console.log(shiftRes);
console.log(numbersList3);
// ===========
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input: callback, object(optional)
// output: array

// callback input: element of array(opt), index, array (opt)
// callback output: boolean
// function filterCallback(element, index, array){
//     console.log("Step # "+index);
//     console.log("element is "+element);
//     console.log("array is "+array);
//     if (element>5) return  true;
//     return false;
// }

// function filterCallback(element){
//         return (element>5);
//     }

// const bigNumbers = anotherNumbersList.filter(filterCallback);
// console.log(anotherNumbersList);
// console.log(bigNumbers);

const bigNumbers = anotherNumbersList.filter((element) => element > 5);
console.log(anotherNumbersList);
console.log(bigNumbers);

function filterCallback(element, index, array) {
  if (element > 5 && index % 2 !== 0) return true;
  return false;
}

// inside filter callback will be called like
// function filterCallback(element, index)

const evenPositions = anotherNumbersList.filter((el, index) => el > 5 && index % 2 !== 0);
console.log(evenPositions);
