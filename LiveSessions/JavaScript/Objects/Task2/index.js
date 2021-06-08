// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1.create new obj
// 2. iterate arrays and add key-value to the obj

// function buildObject(keysList, valuesList) {
// put you code here
// const obj = {};
// for(let index = 0; index< keysList.length; index+=1){
// const key = keysList[index];
// const value = valuesList[index];

// console.log(`key is  ${key}`);
// console.log(`value is  ${value}`);

// Object.assign(obj, {[key]:value});
// obj = {...obj, [key]:value}
//   }
//   return obj;
// }

// // test data 1
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
// console.log(result);

// // test data 1
// const keys1 = [];
// const values1 = [];
// const result1 = buildObject(keys1, values1);
// console.log(result1);

// function buildObject(keysList, valuesList) {
//   // put you code here
//   return keysList.reduce((acc, key, index, arr) => {
//     console.log(`Step ${index}`);
//     console.log('acc is', acc);

//     const value = valuesList[index];
//     return Object.assign(acc, { [key]: value });
//     // return  {...acc, [key]: valuesList[index] });
//   }, {});
// }

// option 3 - etalon
const buildObject = (keysList, valuesList) =>
keysList.reduce((obj, key, index) => ({...obj, [key]: valuesList[index] }), {});



// test data 1
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);

// test data 1
const keys1 = [];
const values1 = [];
const result1 = buildObject(keys1, values1);
console.log(result1);

// keys
// input 
// output
Object.keys()

// value
Object.values();
