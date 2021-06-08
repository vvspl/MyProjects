const mapArrayElements = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] = callback(arr[i]);
  }
  return newArr;
};

const arr = [5, 4, 7, 9, 1, 2, 4];
const increase = (arrElement, index, entireArr) => arrElement + 3;
mapArrayElements(arr, increase);
