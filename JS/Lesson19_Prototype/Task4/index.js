const user = {
  firstName: 'John',
  lastName : 'Doe',
  get fullName() {
    return (`${this.firstName} ${this.lastName}`);
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' '); // деструктуризация
    // const arr = name.split(' ');  // вариант2
    // this.firstName = arr[0];
    // this.lastName = arr[1];
  }
}

export default user;

user.fullName = 'Solomon Kane';
console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);