// https://gromcode.com/courses/javascript-full/tasks/3337
// https://gromcode.com/users/6702/solutions/165074

// 2 objects
// boolean

// algo
// 1. check keys length
// 2. check every key-value, if not equal => false

// Alexander
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) return false;
  // option 1// return keys1.every((key, index) => key === keys2[index] && obj1[key] === obj2[key]);
  // option 2 //return !keys1.some((key => obj1[key] !== obj2[key]);
  // option 3
//   return keys1.every(key => obj1[key] === obj2[key]);

// }

// option 4
// function compareObjects(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
//   return Object.keys(obj1).every(key => obj1[key] === obj2[key]);

// }

// Anastacia
const compareObjects = (obj1, obj2) =>
  Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every(elem => obj1[elem] === obj2[elem]);

// Eugeniy
// bad
// function compareObjects(obj1, obj2) {
//   // TODO
//   const length = Object.keys(obj1);
  
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
//   const obj1Arr = Object.entries(obj1).flat();
//   const obj2Arr = Object.entries(obj2).flat();
  
//   // very bad
//   for (let index = 0; index < obj1Arr.length; index += 1) {
//     // bad
//     if (obj1Arr[index] !== obj2Arr[index]) {
//       return false;
//     }
//   }
//   return true;
// }



// // Vlad
// function compareObjects(obj1, obj2) {
// // very bad
//   const arr1 = Object.keys(obj1).concat(Object.values(obj1));
//   const arr2 = Object.keys(obj2).concat(Object.values(obj2));
//   if (arr1.length !== arr2.length) return false;

//   // very bad
//   for (let i = 0; i < arr1.length; i += 1) {
//     // bad
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
