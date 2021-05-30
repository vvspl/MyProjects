// Сумма элементов массива
const sum = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((previous, next) => previous + next);
};
// const sum = euros.reduce((total, amount) => total + amount);

sum([3,3,5,6]);