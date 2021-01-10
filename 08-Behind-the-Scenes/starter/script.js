'use strict';

/* function calculateAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;

  function printAge() {
    const output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var isMillenial = true;
      const millenialMessage = `You are a millenial, ${firstName}`;
      console.log(millenialMessage);

      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3));
    }

    // var (isMillenial) variable declerations are function scoped, ignored block scoped.
    console.log(isMillenial);
    //add(2, 3); // Can not call outside of scope.
  }

  printAge();
  return age;
}

const firstName = 'Muhsin';
calculateAge(1993); */

/* const muhsin = {
  year: 1993,
  calculateAge: function () {
    console.log(new Date().getFullYear() - this.year);
  },
};

const jason = {
  year: 1980,
};

muhsin.calculateAge();

jason.calculateAge = muhsin.calculateAge;
jason.calculateAge();

const x = muhsin.calculateAge;
//x(); */

/* const person = {
  firstName: 'Muhsin',
  birthYear: 1993,
  calculateAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },

  greet: () =>
    console.log(
      `Hello, I'm ${this.firstName} and I'm ${this.calculateAge} years old.`
    ),
};

person.greet(); */

const person = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedPerson = person;
marriedPerson.lastName = 'Davis';

console.log('Before marriage:', person);
console.log('After marriage:', marriedPerson);

// Copying objects
const person2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Copy of first level
const marriedPerson2 = Object.assign({}, person2);
marriedPerson2.lastName = 'Davis';
console.log('Before marriage:', person2);
console.log('After marriage:', marriedPerson2);

// Both of them have 4 family members
// Deeply nested object
marriedPerson2.family.push('Marry');
marriedPerson2.family.push('Michael');
console.log('Before marriage:', person2);
console.log('After marriage:', marriedPerson2);
