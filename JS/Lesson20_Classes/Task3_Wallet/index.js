export class Wallet {
  constructor() {
    this._balance = 0;
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._balance - amount < 0) {
      console.log('No enough funds');
      return;
    }
    this._balance -= amount;
  }
}

const transaction1 = new Wallet();
console.log(transaction1.getBalance());
transaction1.deposit(45);
console.log(transaction1.getBalance());
transaction1.withdraw(20);
console.log(transaction1.getBalance());
transaction1.withdraw(100);
