'use strict';

/* // CONSTRUCTOR
const Person = function (fullName, lastName, birthYear, title) {
  // Instance properties
  this.fullName = fullName;
  this.birthYear = birthYear;
  this.lastName = lastName;
  this.title = title;

  //! Never do this
  //this.getFullname = () => `${this.fullName} ${this.lastName}`;
  //this.calculateAge = () => new Date().getFullYear() - this.birthYear;
};

const student = new Person('Muhsin', 'Arslan', 1993, 'Student');
console.log(student);

const teacher = new Person('Matilda', 'Geek', 1984, 'Teacher');
console.log(teacher);

const manager = new Person('Michael', 'Jason', 1962, 'Manager');
console.log(manager);

const kelly = 'Kelly';

console.log(student instanceof Person);
console.log(kelly instanceof Person);

// console.log(student.getFullname());
// console.log(student.calculateAge());

// PROTOTYPES
Person.prototype.getFullName = function () {
  return `${this.fullName} ${this.lastName}`;
};

Person.prototype.getAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

//NOTE: functions are came from prototype so every object don't contains function itself.
console.log(student.getFullName());
console.log(student.getAge());

console.log(teacher.getFullName());
console.log(teacher.getAge());
console.log(manager.getAge());

console.log(student.__proto__);
console.log(student.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(student));
console.log(Person.prototype.isPrototypeOf(teacher));

//NOTE Person.prototype not prototype of itself. It is prototype of objects which ones are created from it.
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(student.species, teacher.species, manager.species);
console.log(student.hasOwnProperty('fullName'));
console.log(student.hasOwnProperty('species')); */

// CHALLANGE #01

/* const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.brand} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.brand} going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate(); */

// ES6 Class
// Class Expression
// const Person = class{}

// Class Declaration
/* class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Functions will be added to prototype
  calculateAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

const jessica = new Person('Jessica', 1990);
jessica.calculateAge();
console.log(jessica); */

/* const account = {
  owner: 'Muhsin',
  movements: [200, 300, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

// Write like property
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // INSTANCE METHODS
  // Functions will be added to prototype
  calculateAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Set a property that already exists.
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else alert(`${name} is not full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  // STATIC METHODS
  static hey() {
    console.log('Hello there 🙋🏻‍♂️🙋🏻‍♀️');
    console.log(this);
  }
}

const jessica = new Person('Jessica Davis', 1990);
const walter = new Person('Walter White', 1989);

console.log(walter.fullName);
console.log(walter._fullName);

Person.hey(); */

// OBJECT.CREATE
/* const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const person = Object.create(PersonProto);
console.log(person);
person.name = 'Muhs,n';
person.birthYear = 1993;
person.calcAge();

console.log(person.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1997);
console.log(sarah);
sarah.calcAge(); */

// CODING CHALLANGE #02
/* class Car {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.model} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.model} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford.speed); */

/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calculateAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, department) {
  Person.call(this, firstName, birthYear);
  this.department = department;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I'm study ${this.department}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
mike.introduce();
mike.calculateAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

// Both of them true cause of inheritance
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); */

// CHALLANGE #03
const Car = function (model, speed) {
  this.model = model;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.model} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.model} going at ${this.speed} km/h`);
};

const EV = function (model, speed, battery) {
  Car.call(this, model, speed);
  this.battery = battery;
};

// Link prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (percent) {
  this.battery = percent;
};

// Overwrited
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.battery--;
  console.log(
    `${this.model} going at ${this.speed} km/h, with a charge of ${this.battery}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(40);
console.log(tesla);
tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
