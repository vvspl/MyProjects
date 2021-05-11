const uniqueCount = (array) => {
  if (!Array.isArray(array)) return null;
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
   // let flag = false;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        array[j] = null;
       // flag = true;
      }
      //if (j === array.length - 1 && flag === true) array[i] = null;
    }
    if (array[i] !== null) newArray.push(array[i]);
  }
  return newArray.length;
};

uniqueCount([3, 6, 7, 8, 7, 6, 3, 4, 2, 3, 7, 8, 3]);
