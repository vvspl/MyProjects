// Выбрать имена всех жителей
const getPeople = obj => {
  // put your code here
  const newArr = [];
  Object.values(obj).forEach(innerArr=>innerArr.forEach(innerObj=>newArr.push(innerObj.name)));
  // const val = Object.values(obj);
  // for(let i=0; i<val.length; i+=1){
  //   let a = val[i];
  //   a.forEach(el=>newArr.push(el.name))
    // for (let j=0; j<a.length; j++){
    //   newArr.push(a[j].name);
    // }
  // }
  return console.log(newArr);
};

const rooms = {
  room1:[{name: 'Jack'}, {name: 'Andrey'}],
  room2:[{name: 'Ola'}, {name: 'Jenya'}],
  room3:[{name: 'Kolya'}, {name: 'Jenya'}],
}

getPeople(rooms);
