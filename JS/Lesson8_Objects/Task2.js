/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const concatProps = (obj) => {
  // put your code here
  const arr = [];
  for (const key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

// examples
concatProps({ name: 'John Doe', age: 17, interest: 'football' }); // ==> ['John Doe', 17, 'football']
