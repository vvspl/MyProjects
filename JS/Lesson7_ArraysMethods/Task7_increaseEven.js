// Проверка на входящий массив. Увеличение всех четных эл-тов на delta
function increaseEvenEI(arr, delta) {
  if (!Array.isArray(arr)) return null;
  return arr.map((item) => (item % 2 === 0 ? (item += delta) : item));
}

increaseEvenE1([2, 3, 4, 5], 3);
