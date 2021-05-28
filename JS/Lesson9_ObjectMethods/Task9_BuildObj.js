function buildObject(keysList, valuesList) {
  // put you code here
  const newObj = {};
  for (let i = 0; i < keysList.length; i += 1) {
    const a = keysList[i];
    const b = valuesList[i];
    newObj[a] = b;
  }
  return console.log(newObj);
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }

buildObject(keys, values);
