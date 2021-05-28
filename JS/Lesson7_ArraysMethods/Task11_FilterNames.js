// Фильтр имен в массиве строк, которые содержат text и длина больше 5
const filterNames = (arr, text) => arr.filter((str) => str === text && str.length > 5);

filterNames(['qwerty', 'ggsswt', 'qwerty', '3arghthk'], '3arghthk');
