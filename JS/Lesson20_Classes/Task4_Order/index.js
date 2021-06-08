export class Order {
  constructor(price, city, type) {
    this.id = String(Math.random());
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) return true;
    return false;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') return true;
    return false;
  }
}

const order1 = new Order(2500, 'Lviv', 'Sell');
console.log(order1.checkPrice());
order1.confirmOrder();
console.log(order1.isValidType());
console.log(order1);
