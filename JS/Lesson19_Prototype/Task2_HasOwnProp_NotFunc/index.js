
export const getOwnProps = (obj) =>
  // eslint-disable-next-line no-prototype-builtins
  Object.keys(obj).filter((key) => obj.hasOwnProperty(key) && typeof obj[key] !== 'function');

// Test data
const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(getOwnProps(user));
