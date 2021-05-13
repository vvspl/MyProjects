/* Функция, фильтрующая входящий массив и возвращающая новый массив из чисел, которые делятся на 3 */
const getSpecialNumbers = (arr) => arr.filter((num) => num % 3 === 0);

getSpecialNumbers([1, 3, 4, 5, 6, 9, 8, 7, 12]);
