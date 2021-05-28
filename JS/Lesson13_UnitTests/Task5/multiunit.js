export function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.slice().reverse();
  }

  reverseArray([2, 3, 4, 5]);

export  const withdraw = (clients, balances, client, amount) => {
    if (balances[clients.indexOf(client)] - amount < 0) return -1;
    // eslint-disable-next-line no-param-reassign
    balances[clients.indexOf(client)] -= amount;
    return balances[clients.indexOf(client)];
  };
  
  withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

export  const getAdults = obj => {
     const newObj = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj){
      if(obj[key] >= 18) newObj[key]=obj[key];
    }
    return newObj;
  };
  
  // examples
  getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
  // getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }