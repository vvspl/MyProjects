export class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHi() {
      console.log(`Hi, I am ${this.name}`);
    }
  
    requestNewPhoto(name) {
      console.log(`New photo request was sent for ${this.name}`);
    }
  
    static createEmpty() {
        return new this('', null);
    }
  
    setAge(value) {
      if (value < 0) return false;
      if (value >= 25) {
        console.log(`New photo request was sent for ${this.name}`);
      }
      this.age = value;
      return value;
    }
  }
  
  const user1 = new User('Bob', 32);
  user1.sayHi();
  user1.requestNewPhoto();
  console.log(user1.setAge(27));
  console.log(user1.setAge(-15));
  const user2 = User.createEmpty();
  console.log(user2);
  user2.sayHi();
  user2.name = 'Jane';
  user2.sayHi();
  user2.setAge(25);
  console.log(user2);