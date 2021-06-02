export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const index = fullName.indexOf(' ');
    this.firstName = fullName.substr(0, index)
    this.lastName = fullName.substr(index+1, fullName.length)
  },
};

user.setFullName('Solomon Kane');
console.log(user.firstName);
console.log(user.lastName);
