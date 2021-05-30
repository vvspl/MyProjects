const superRound = (num, accuracy) => {
  const multiplier = Math.pow(10, accuracy);
  const arr = [];
  arr.push(Math.floor(num * multiplier) / multiplier);
  arr.push(Math.round(num * multiplier) / multiplier);
  arr.push(Math.ceil(num * multiplier) / multiplier);
  arr.push(Math.trunc(num * multiplier) / multiplier);
  arr.push(+num.toFixed(accuracy));
  return arr;
};

superRound(7.567834, 4);
