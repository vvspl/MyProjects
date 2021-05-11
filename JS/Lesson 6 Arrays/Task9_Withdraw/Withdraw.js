function withdraw(clients, balances, client, amount) {
  let index = 0;
  for (let i = 0; i <= clients.length; i += 1) {
    if (clients[i] === client) index = i;
  }
  if (balances[index] - amount >= 0) {
    balances[index] -= amount;
    return balances[index];
  }
  return -1;
}

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);