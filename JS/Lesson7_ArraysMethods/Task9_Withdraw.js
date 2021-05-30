// Снятие наличных из банкомата
// 'use strict';

const withdraw = (clients, balances, client, amount) => {
  // put your code here
  if (balances[clients.indexOf(client)] - amount < 0) return -1;
  // eslint-disable-next-line no-param-reassign
  balances[clients.indexOf(client)] -= amount;
  return balances[clients.indexOf(client)];
};

// example 1:

// input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

// output
// -1
// и массив balances должен быть [1400, 87, -6]
