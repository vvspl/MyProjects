// class Car {
//     year = '1990';
//     color;
//     constructor (brand){
//         this.carname = brand;
//         this.color = 'red';
//     }
// }

// const car1 = new Car('Audi');
// console.log(car1.carname, car1.color, car1.year);

// const arr = [1, 5,-6, 5, 7];
// const myMap = (arr, callback) =>{
// let newArr= [];
// for (let i=0; i<arr.length; i++){
//     newArr.push(callback(arr[i]));
// }
// return newArr;
// }

// const multiply = (number) =>{
//     return number*2;
// }

// console.log(myMap(arr, multiply));

const duplicate = [1,2,3,4,56,7];

// const arr2 = (arr1, arr2)=>[...arr1, ...arr2];

// console.log(arr2(duplicate, duplicate));

// console.log(duplicate.concat(duplicate));


console.log(Math.max(...duplicate));

