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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const sortedMovements = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  sortedMovements.forEach(function (movement, index) {
    const movementType = movement > 0 ? 'deposit' : 'withdrawal';
    const movementRow = `
      <div class="movements__row">
        <div class="movements__type movements__type--${movementType}">${
      index + 1
    } ${movementType}</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', movementRow);
  });
};

const calculateAndDisplayBalance = function (account) {
  account.balance = account.movements.reduce(
    (previousMovement, currentMovement) => previousMovement + currentMovement
  );

  labelBalance.textContent = `${account.balance}€`;
};

const calculateAndDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(movement => movement > 0)
    .reduce(
      (previousMovement, currentMovement) => previousMovement + currentMovement,
      0
    );

  const out = account.movements
    .filter(movement => movement < 0)
    .reduce(
      (previousMovement, currentMovement) => previousMovement + currentMovement,
      0
    );

  const interest = account.movements
    .filter(movement => movement > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce(
      (previousInterest, currentInterest) => previousInterest + currentInterest,
      0
    );

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(out)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUi = function (account) {
  // Display movements
  displayMovements(currentAccount.movements);

  // Display balance
  calculateAndDisplayBalance(currentAccount);

  // Display summary
  calculateAndDisplaySummary(currentAccount);
};

// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent from form submitting.
  e.preventDefault();

  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and show welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear login input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // Clear focus of pin input.

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    account => account.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUi(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const isUserValid =
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin;

  if (isUserValid) {
    const indexOfAccount = accounts.findIndex(
      account => account.username === currentAccount.username
    );
    accounts.splice(indexOfAccount, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  const anyDeposit = currentAccount.movements.some(
    movement => movement >= amount * 0.1
  );

  if (amount > 0 && anyDeposit) {
    currentAccount.movements.push(amount);

    updateUi(currentAccount);
  }

  inputLoanAmount.val = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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
/* const myTestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map
const multipliedArray = myTestArray.map(number => number * 2);
console.log(multipliedArray);

// filter
const filteredArray = myTestArray.filter(number => number > 5);
console.log(filteredArray);
 */

// reduce
/* const myTestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -5];
const reducedArray = myTestArray.reduce(
  (previous, current, index, array) => previous + current
);
console.log(reducedArray); */

// maximum value
/* const maximumValue = account1.movements.reduce(
  (previousMovement, currentMovement) => {
    if (previousMovement > currentMovement) return previousMovement;
    else return currentMovement;
  },
  account1.movements[0]
);

console.log(maximumValue); */

// chaining
/* const euroToUsd = 1.1;

const totalDepositAsUsd = account1.movements
  .filter(movement => movement > 0)
  .map(movement => movement * euroToUsd)
  .reduce(
    (previousMovement, currentMovement) => previousMovement + currentMovement,
    0
  );

console.log(totalDepositAsUsd);
 */

// FIND
// return first element in array
/* console.log(account1.movements.find(movement => movement < 0));
console.log(accounts.find(account => account.username === 'js')); */

// SOME AND EVERY
/* 
// Equality with includes
console.log(account1.movements.includes(-130));
// Condition with some
console.log(account1.movements.some(movement => movement === -130));

const anyDeposit = account1.movements.some(movement => movement > 0);
console.log(anyDeposit);

// EVERY (if all of elements in array in condition)
console.log(account1.movements.every(movement => movement > 0));
console.log(account4.movements.every(movement => movement > 0)); 
*/

// FLAT AND FLATMAP
/* const myAnotherArray = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(myAnotherArray.flat());

const myDeepArray = [
  [
    [1, 2],
    [3, 4],
  ],
  [5, 7],
  8,
  9,
];
console.log(myDeepArray.flat()); // flat is one level deep default is 1
console.log(myDeepArray.flat(2)); // 2 level nesting

const accountMovements = accounts.map(account => account.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce(
  (previousMovement, currentMovement) => previousMovement + currentMovement
);
console.log(overalBalance);

const overalBalance2 = accounts
  .map(account => account.movements)
  .flat()
  .reduce(
    (previousMovement, currentMovement) => previousMovement + currentMovement,
    0
  );
console.log(overalBalance2);

//Flatmap (Only 1 level nesting)
const overalBalance3 = accounts
  .flatMap(account => account.movements)
  .reduce(
    (previousMovement, currentMovement) => previousMovement + currentMovement,
    0
  );
console.log(overalBalance3); */

// Sorting Arrays
// Strings
/* const owners = ['Jonas', 'Muhsin', 'Ahmet', 'Zayn'];
console.log(owners.sort()); // Mutate the original array
console.log(owners); */

// Numbers (sorting based on strings)
/* const luckyNumbers = [1, 5, 33, 13, -5, -3];
console.log(luckyNumbers); */
// console.log(luckyNumbers.sort()); This will not work cause of default based on strings

// return < 0 => A,B (keep order)
// return > 0 => B,A (switch order)

// Ascending numbers
/* luckyNumbers.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
}); */
/* luckyNumbers.sort((a, b) => a - b);
console.log(luckyNumbers); */

// Descending numbers
/* luckyNumbers.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
}); */
/* luckyNumbers.sort((a, b) => b - a);
console.log(luckyNumbers); */

// More ways to Array filling
const myXArray = new Array(7);
console.log(myXArray);

myXArray.fill(1, 3, 5);
console.log(myXArray);

myXArray.fill(23, 2, 6); // value, startIndex, endIndex for filling.
console.log(myXArray);

// Array from
const mySweetArray = Array.from({ length: 7 }, () => 1);
console.log(mySweetArray);

const myCookieArray = Array.from({ length: 7 }, (_, index) => index + 1);
console.log(myCookieArray);

labelBalance.addEventListener('click', function () {
  // Nodelist to array with Array.from via first parameter
  // second parameter is a mapping function
  const movementsUi = Array.from(
    document.querySelectorAll('.movements__value'),
    element => Number(element.textContent.replace('€', ''))
  );

  console.log(movementsUi);
  console.log(
    `Movement's total is: ${movementsUi.reduce(
      (previousMovementValue, currentMovementValue) =>
        previousMovementValue + currentMovementValue,
      0
    )}`
  );
});
