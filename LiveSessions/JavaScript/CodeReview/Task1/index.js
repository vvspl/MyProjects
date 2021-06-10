// option 1
const withdraw = (clients, balances, client, amount) => {
    // put your code here
    const index = clients.indexOf(client)

    if (balances[index] < amount) return -1;
      // eslint-disable-next-line no-param-reassign
      balances[index] -= amount;
      return balances[index]; 
  };

  // option 2 very bad
//   const withdraw = (clients, balances, client, amount) => {
//     let rest = 0;

//     // don't use forEach
//     clients.forEach((name, index) => {
//         // very bad
//       if (name===client) {
//         rest = balances[index] - amount;
//       }
//     });
//     if (rest < 0) {
//       return -1;
//     }
//     return rest;
//   };



  // example 1:

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
const bal = [1400, 87, -6];
console.log(bal);
// output
// 37
// и массив balances должен быть [1400, 37, -6]
