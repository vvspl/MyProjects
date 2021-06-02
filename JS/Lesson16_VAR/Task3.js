export function createArrayOfFunctions(num) {
  const arr = [];
  if (!num) return [];
  if (!isFinite(num)) return null;

  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}

createArrayOfFunctions();
