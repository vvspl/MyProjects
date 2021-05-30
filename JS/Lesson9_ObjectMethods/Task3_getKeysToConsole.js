// Вывести в консоль все ключи объекта
const getKeys = (obj) => Object.keys(obj).forEach((param) => console.log(param));

const obj = {
  qwerty: 1,
  asdfgh: 2,
  zxcvbn: 3,
};

getKeys(obj);
