// Проверка на входящий массив. Реверс всех эл-тов массива
function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.slice().reverse();
}

reverseArray([2, 3, 4, 5]);
