// 'use strict';
// function printMessage(country, city) {
//   console.log(this);
//   console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
// }
// const user = {
//   firstName: 'Andrey',
//   age: 111,
//   tempFunc: 'some secret data',
// };

// bind option 1
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Ukraine', 'London');

// bind option 2
// printMessage.bind(user)('Ukraine', 'London'); // вызов в одну строку
// printMessageBinded();

// input obj
// output function

// bind option 3
// const printMessageBinded = printMessage.bind(user, 'Ukraine');
// printMessageBinded('London');

// input -
// output: func
export function bind(func, context, ...args) {
  console.log(args);

  // input: arg1, ...
  // output: anything
  return function (...funcArgs) {
      console.log('func is called');
    return func.call(context, ...args, ...funcArgs);
  };
}

// test data
function sum(c, d) {
    console.log('context is: ', this);
    // eslint-disable-next-line prefer-rest-params
    console.log('arguments is:', arguments);
  return this.a + this.b + c + d;
}

const context = {
  a: 100,
  b: 40,
};

// 1
const sumBinded = bind(sum, context, 10, 30);
console.dir(sumBinded);
console.dir(sumBinded());

// 2
const sumBinded2 = bind(sum, context, 10);
console.dir(sumBinded2);
console.dir(sumBinded2(30));

// 3
const sumBinded3 = bind(sum, context);
console.dir(sumBinded3);
console.dir(sumBinded3(10, 30));
