/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users(){
      return this._users;
  }

  getUserNames(){
      return this._users.map(obj=>obj.name);
  }

  getUserIds(){
    return this._users.map(obj=>obj.id);
}

getUserNameById(param) {
    return this._users.filter(obj=>obj.id===param).map(obj=>obj.name).toString();
}

}

// examples
const user1 = new User('1', 'Tom', '123');
const user2 = new User('2', 'Ann', '523');
const user3 = new User('3', 'Bill', '5123');
const user4 = new User('5', 'Jack', '1523');

// получить свойства можем
console.log(user1.id); // ===> '1'
console.log(user2.name); // ===> 'Ann'
console.log(user3.sessionId); // ===> 'session-id'


const repository = new UserRepository([user1, user2, user3, user4]);
console.log(repository.getUserNames());
console.log(repository.getUserIds());
console.log(repository.getUserNameById('3'));

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
