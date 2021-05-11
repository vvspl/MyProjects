//sorting Array ascending
function sortAsc(arr) {
  if (!Array.isArray(arr)) return null;
  let flag = true;
  let count = 0;
  let newArr = [];
  for (let num of arr) {
    // copiing of input Array
    newArr.push(num);
  }
  while (flag) {
    let arrIndex = 0;
    let max = newArr[0];
    for (let i = 1; i < newArr.length - count; i += 1) {
      // findind of max element
      if (newArr[i] > max) {
        max = newArr[i];
        arrIndex = i;
      }
    }
    count += 1;
    newArr[arrIndex] = newArr[newArr.length - count]; //swapping last and max elements
    newArr[newArr.length - count] = max;
    if (count === arr.length) flag = false;
  }
  return newArr;
}

//sorting Array descending
function sortDesc(arr) {
  if (!Array.isArray(arr)) return null;
  let flag = true;
  let count = 1;
  let newArr = [];
  for (let num of arr) {
    newArr.push(num); // copiing of input Array
  }
  while (flag) {
    let arrIndex = 0;
    let max = newArr[newArr.length - 1];
    for (let i = count - 1; i < newArr.length; i += 1) {
      // findind of max element
      if (newArr[i] >= max) {
        max = newArr[i];
        arrIndex = i;
      }
    }
    newArr[arrIndex] = newArr[count - 1]; //swapping first and max elements
    newArr[count - 1] = max;
    count += 1;
    if (count === arr.length) flag = false;
  }
  return newArr;
}

sortDesc([7, 7, 54, 67, 0, -8, 43, 0, 15, 2, 64, -7, -9, 23, 16]);
