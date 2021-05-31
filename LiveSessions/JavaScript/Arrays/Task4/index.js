// input num, num, num ... numN
// output num
function multiply(...args) {
  // pseudo array
  // console.log(arguments);
  // for (let el of arguments){
  // console.log(el);
  // }

  // rest operator
  console.log(args);
  let mult = 1;
  for (let i = 0; i < args.length; i+=1) {
    mult *= args[i];
  }
  console.log(mult);
}

multiply(2, 5, 10);

// const array =  [1,3,4,5,6];
// console.log(...array);
// const arrayCopy = [...array];
// console.log(arrayCopy);
// ==========
// const arr = [4,2,3,11,-22,-10]
// input callback
// output array

// callback
// input el1, el2
// output number

// const sortRes = arr.sort(el1,el2)=>{
  // el1>el2
  // el1<el2
  // el1===el2
//   return el1-el2;
// }

// console.log(sortRes);
