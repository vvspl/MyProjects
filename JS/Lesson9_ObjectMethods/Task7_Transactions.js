const getTotalRevenue = transactions => {
  // put your code here
  let sum = 0;
  transactions.forEach(obj=>{sum+=obj.amount});
  return sum;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
