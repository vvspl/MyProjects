/*Задание 2
Напишите функцию, которая возвращает минимальный элемент массива
*/


getMin([2,4,5,7,9,4,1,16]);

/*Вариант1

function getMin(arr){
let min = arr[0];
for(let i=1; i<arr.length; i++){
  if (min>arr[i]) min=arr[i];
}
return min;
}
*/

//Вариант 2
function getMin(arr){
    let min = Math.min.apply(Math, arr);
    return min;
}