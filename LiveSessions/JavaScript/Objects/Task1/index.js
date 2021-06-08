/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// const obj ={};
// obj.name = 'Hello';

// console.log(obj);

// =====

// const newObj = new Object();
// newObj.id = 1001;
// console.log(newObj);

// =======
// ToDo with objects:
// 1. add properties, build object
// 2. Filter object

// input obj, key (number, string etc)
// // output
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data
const newObj = { address: 'Kiev' };
const key = 'personName';
const value = 'Denis';
const res1 = addPropertyV1(newObj, key, value);
console.log(res1);

const res2 = addPropertyV1({ address: 'Kiev', count: 4 }, 'key', '78');
console.log(res2);

function addPropertyV2(obj, key, value) {
  // input obj, ...sources
  // output: obj
  const sourseObj = { [key]: value };
  return Object.assign(obj, sourseObj);
}

const obj1 = { user: 'Bob' };
const obj2 = { class: '5-B' };
console.log(addPropertyV2(obj1, 'class', '5-D'));
console.log(addPropertyV2(obj2, 'school', '55'));

// V3
function addPropertyV3(obj, key, value) {
  const sourceObj = { [key]: value };
  return Object.assign({}, obj, sourceObj);
}
const obj_1 = { user: 'Bob' };
const obj_2 = { class: '5-B' };
console.log(addPropertyV3(obj_1, 'age', 37));
// test data
const obj4 = { name: 'Test', surname: 'User', adress: 'Kiev' };
console.log(addPropertyV3(obj4, 'address', 'Lviv'));
console.log(obj4);

// V3
function addPropertyV4(obj, key, value) {
  const newObj = {...obj, [key]:value};
  return newObj;
}

// test data
const obj5 = { name: '!!!', surname: 'User', adress: 'Kiev' };
console.log(addPropertyV3(obj5, 'address', 'Lviv'));
console.log(obj5);
