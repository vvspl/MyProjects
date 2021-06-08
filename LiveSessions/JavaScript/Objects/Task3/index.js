// input: obj
// output: obj[]

// algo
// 1. Object.enties
// 2. map array -> object
// 3. sort

// option 1
// const getCustomersList = obj =>{
// Object.entries(obj).map(arrEl => {
//     console.log(arrEl);

//     const el0 = arrEl[0]
//     const el1 = arrEl[1]

//     console.log(el0);
//     console.log(el1);

//     const res = {...el1, id: el0};
//     console.log(res);
//     return res;
// });
// }

// option 2
// const getCustomersList = obj =>{
//    return Object.entries(obj).map(arrEl => {
//         console.log(arrEl);

//         const el0 = arrEl[0]
//         const el1 = arrEl[1]
//         return {...el1, id: el0};

//     }).sort((a, b) => {
//         return a.age - b.age;
//     });
//     };

// option 3
const getCustomersList = (obj) =>
  Object.entries(obj)
    .map(([id, customerObj]) => ({ ...customerObj, id }))
    .sort((a, b) => a.age - b.age);

// test
const arr = [1, 3];
const [el1, el2] = arr;
console.log(el1, el2);

// test data
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Mark',
    age: 7,
  },
  'customer-id-4': {
    name: 'Roma',
    age: 25,
  },
};

console.log(getCustomersList(customers));

