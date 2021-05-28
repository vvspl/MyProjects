const getTotalPrice = (arr) => {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return ('$' + Math.floor(sum * 100) / 100);
};

const a = [-5, 5.4, 4.546, 76.8588];
getTotalPrice(a);
