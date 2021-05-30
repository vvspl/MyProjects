const getRandomNumbers = (length, from, to) => {
  // put your code here
  const min = Math.ceil(from);
  const max = Math.floor(to);
  const arr = [];
  if (min >= max) return null;
  for (let i = 0; i < length; i++) {
    arr.push(Math.round(getRandomArbitrary(min, max)));
  }
  return arr;
};

// examples
getRandomNumbers(5, 1.4, 1.8); // ==> [2, 2, 2, 3, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
