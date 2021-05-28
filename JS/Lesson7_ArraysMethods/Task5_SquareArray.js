// Проверка на входящий массив. Возведение всех эл-тов массива в квадрат
function squareArray(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.map((item) => item * item);
}

squareArray([2, 3, 4, 5]);
