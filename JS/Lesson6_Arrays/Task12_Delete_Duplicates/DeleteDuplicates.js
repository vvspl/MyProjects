const removeDuplicates = (array) => {
  if (!Array.isArray(array)) return null;
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) continue;
    else newArray.push(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) array[j] = null;
    }
  }
  return newArray;
};

removeDuplicates([4, 7, 9, 5, 4, 8, 7, 7, 4, 3, 9]);