/*Задание 3
Напишите функцию, которая фильтрует массив, оставляя только парные числа
*/


getEven([2,4,5,7,9,4,1,16]);
/* Вариант 1
function getEven(arr){
  let result = [];
  for (let i=0; i<arr.length; i++){
    if(arr[i]%2===0) result.push(arr[i]);
  }
  return result;
}
*/

// Вариант 2
function getEven(arr){
    let result = arr.filter(item => item%2===0);
    return result;
}