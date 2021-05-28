function compareObjects(obj1, obj2) {
  // put your code here
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  const obj1Vals = Object.values(obj1);
  const obj2Vals = Object.values(obj2);
  if (!(obj1Keys.length === obj2Keys.length)) return false;
  for(let i=0; i<obj1Keys.length; i+=1){
    if(!((obj1Keys[i]===obj2Keys[i])&&(obj1Vals[i]===obj2Vals[i]))) return false;
  }
  return true;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true