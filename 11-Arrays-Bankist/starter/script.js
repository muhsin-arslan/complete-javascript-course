'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (movement, index) {
    const movementType = movement > 0 ? 'deposit' : 'withdrawal';
    const movementRow = `
      <div class="movements__row">
        <div class="movements__type movements__type--${movementType}">${
      index + 1
    } ${movementType}</div>
        <div class="movements__value">${movement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', movementRow);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; */

/* let myArray = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(myArray.slice(2));
console.log(myArray.slice(2, 4)); // End parameter not included.
console.log(myArray.slice(-2)); // Get last elements of array.
console.log(myArray.slice(-1)); // Get last elements of array.
console.log(myArray.slice(1, -2));
console.log(myArray.slice()); // Shallow copy
console.log([...myArray]);

// SPLICE (Change original array, mutate)
// console.log(myArray.splice(2));
myArray.splice(-1);
console.log(myArray);

// Start from 0 and splice 2 element
const newArray = myArray.splice(0, 2);
console.log(myArray);
console.log(newArray);

// REVERSE
myArray = ['a', 'b', 'c', 'd', 'e'];
const mySecondArray = ['h', 'a', 'e', 'y'];

console.log(mySecondArray.reverse());
// Reverse is mutate the original array
console.log(mySecondArray);

// CONCAT (Not mutate original arrays)
const letters = myArray.concat(mySecondArray);
console.log(letters);

// JOIN
console.log(letters.join('-')); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
}

console.log('-------------- FOREACH --------------');
// Foreach can't use break
movements.forEach(function (movement, index, array) {
  if (movement > 0)
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  else console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
});
 */

// FOREACH WITH MAPS AND SETS
// Maps
/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`The ${key} key's value is ${value}`);
});

// Sets
console.log('------ SETS ------');
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD']);

currenciesUnique.forEach(function (value) {
  console.log(`The value is ${value}`);
}); */

// DATA TRANSFORMATIONS (WITH MAP, FILTER AND REDUCE)

const myTestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map
const multipliedArray = myTestArray.map(number => number * 2);
console.log(multipliedArray);

// filter
const filteredArray = myTestArray.filter(number => number > 5);
console.log(filteredArray);

// reduce
const reducedArray = myTestArray.reduce(number => number);
console.log(reducedArray);
