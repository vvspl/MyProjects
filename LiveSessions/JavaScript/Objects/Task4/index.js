// https://gromcode.com/courses/javascript-full/tasks/3337
// 2 objects
// boolean

// algo
// 1. check keys length
// 2. check every key-value, if not equal => false
// 3.

function compareObjects(obj1, obj2) {
  const arr1 = Object.keys(obj1).concat(Object.values(obj1));
  const arr2 = Object.keys(obj2).concat(Object.values(obj2));
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

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
