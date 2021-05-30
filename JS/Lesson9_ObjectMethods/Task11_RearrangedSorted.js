const getCustomersList = (obj) => {
  // put your code here
  const objKeys = Object.keys(obj);
  const objVals = Object.values(obj);
  const arr = [];
  for (let i = 0; i < objKeys.length; i += 1) {
    const newObj = {};
    newObj.id = objKeys[i];
    arr.push(Object.assign(newObj, objVals[i]));
  }
  return arr.sort((a, b)=>a.age - b.age);
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Ani',
    age: 34,
  },
};

getCustomersList(customers);
