// const students = ['Yulia', 'Jenia', 'Vlad', 'Tom', 'Roman'];

// input: callback, object(opt)
// output: array
// callback:
// input: element of array, index(opt), array(opt)
// output: modified element
// function mapCallback(el){
//   return ('Hello, '+el);
// }

// const greeting = students.map(mapCallback);
// console.log(greeting);

// const mapCallback = el=>'Hello, '+el;

// const greeting = students.map(mapCallback);
// console.log(greeting);

// const greeting = students.filter(el =>{
//   if (el==='Roman'){
//     return false;
//   }
//   return true;
// })
// .map(el=>{el => 'Hello ${el}');
// log(greeting);

// const greeting = students.filter(el => el==='Roman').map(el => 'Hello,'+el);
//   log(greeting);

const transactions = [5, 8, 10, -4, 33, 220, 555, 41];
// input : callback, initial value(opt), object(opt)
// output: number

// function reduceCallback(acc, el, index, array) {
//   console.log('Step #' + index);
//   console.log('el ' + el);
//   console.log('acc ' + acc);

//   if (el > 100) {
//     acc += el;
//   }
//   return acc;
// }

// const transactionSum = transactions.reduce(reduceCallback, 0);

function reduceCallback(acc, el, index, array) {
  console.log('Step #' + index);
  console.log('el ' + el);
  console.log('acc ' + acc);

  if (el > 100) {
    acc.push(el);
  }
  return acc;
}

const bigTransactions = transactions.reduce(reduceCallback, []);


// const bigTransactions = transactions.reduce((acc, el) => {
//   if (el> 100){
//   acc.push(el);
// }
// return acc;

// }
// );

// console.log(bigTransactions);
// console.log(transactions);