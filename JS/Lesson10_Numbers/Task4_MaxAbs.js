const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr.map((num) => Math.abs(num)));
};

const a = [-67, 0, 1, -8, 56, null];

getMaxAbsoluteNumber(a);
