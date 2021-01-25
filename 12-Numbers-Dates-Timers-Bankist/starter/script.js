'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-01-19T17:01:17.194Z',
    '2021-01-21T23:36:17.929Z',
    '2021-01-22T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const calculateDaysPassed = (dateOne, dateTwo) =>
  Math.abs(dateTwo - dateOne) / (1000 * 60 * 60 * 24);

const formatMovementDate = function (date, locale) {
  const calculateDaysPassed = (dateOne, dateTwo) =>
    Math.round(Math.abs(dateTwo - dateOne) / (1000 * 60 * 60 * 24));

  const passedDays = calculateDaysPassed(new Date(), date);

  if (passedDays === 0) return 'Today';
  if (passedDays === 1) return 'Yesterday';
  if (passedDays <= 7) return `${passedDays} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMovement = new Intl.NumberFormat(acc.locale, {
      style: 'currency',
      currency: acc.currency,
    }).format(mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  const formattedBalance = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(acc.balance);

  labelBalance.textContent = formattedBalance;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const formattedIncomes = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(incomes);

  labelSumIn.textContent = formattedIncomes;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const formattedOut = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(out);

  labelSumOut.textContent = formattedOut;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  const formattedInterest = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(interest);

  labelSumInterest.textContent = formattedInterest;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const minutes = String(Math.trunc(time / 60)).padStart(2, '0');
    const second = String(time % 60).padStart(2, '0');

    // In each call, print the remaining time
    labelTimer.textContent = `${minutes}:${second}`;

    // When 0 seconds left, stop timer and logout
    if (time === 0) {
      clearInterval(logoutTimer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease time 1 sec
    time--;
  };

  // set time 2min
  let time = 120;
  // Call timer everysecond
  tick();

  if (logoutTimer) clearInterval(logoutTimer);
  logoutTimer = setInterval(tick, 1000);

  return logoutTimer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, logoutTimer;

// FAKE LOGIN
/* currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100; */

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Create Current Date
    setInterval(function () {
      const now = new Date();

      const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        /* weekday: 'long', */
      };
      const locale = currentAccount.locale;

      labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
        now
      );
    }, 1000);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Call logout timer
    startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset Logout Timer
    clearInterval(logoutTimer);
    logoutTimer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset Logout Timer
      clearInterval(logoutTimer);
      logoutTimer = startLogoutTimer();
    }, 2500);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/* console.log(23 === 23.0);

// Base 10 - 0 to 9
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Convert string to number
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e32', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

// They're global (old-school)
console.log(parseInt('3px'));
console.log(parseFloat('2.3em'));

// Check if value is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0)); // Infinity not a number

// Check if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite(+'20X')); // NaN
console.log(Number.isFinite(23 / 0)); // Infinity not a number

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0)); */

// MATH AND ROUNDING
/* console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// max
console.log(Math.max(3, 5, 7, 11, 22, 3));
console.log(Math.max(3, 5, 7, 11, '22', 3));
console.log(Math.max(3, 5, 7, 11, '22px', 3));

// min
console.log(Math.min(3, 5, 7, 11, 22, 3));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(1, 6));

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(29.3));

console.log(Math.ceil(23.3));
console.log(Math.ceil(29.3));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.256)); // Remove decimal part

console.log(Math.trunc(-23.256));
console.log(Math.floor(-23.256));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); */

// Remainder Operator
/* console.log(5 % 2);

const isEven = n => n % 2 === 0;

console.log(isEven(23));
console.log(isEven(33));
console.log(isEven(40));
console.log(isEven(80));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (
    row,
    index
  ) {
    if (index % 2 === 0) row.style.backgroundColor = 'orangered';
    if (index % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
 */

// BIG INT (ES2020)
/* console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(4894984894984894894894894863485419848n); // BIG INT Number with n sign.
console.log(BigInt(4894984));

// Operations
console.log(10000n + 10000n);
console.log(8494984894894984894654n * 1000n);

const huge = 894465489489418918918918n;
const num = 23;

console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 16);
console.log(20n === 20);
console.log(20n == 20);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

// console.log(Math.sqrt(16n)); this will not work.

// Divisions
console.log(11n / 3n); // cut-off decimal part
console.log(10 / 3); */

// Creating Dates
/* const now = new Date();
console.log(now);
console.log(new Date('Jan 23 2020')); // 1 year ago with string
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31)); // 10th month have 30 but js will add next day.

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // add 3 days - timestamp

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); // Day of the week. 0 = Sunday
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // timestamp

console.log(new Date(2142246180000));

console.log(Date.now()); // Current timestamp

future.setFullYear(2040);
future.setMonth(1);
future.setDate(1);
console.log(future); */

// Operations with Dates
/* const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));
console.log(+future);

const days1 = calculateDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(`${days1} days passed.`); */

// Internationalizing Numbers
/* const number = 16847984.25;

const options = {
  style: 'currency',
  currency: 'TRY',
};

console.log(`TR: ${new Intl.NumberFormat('tr-TR', options).format(number)}`);
console.log(`US: ${new Intl.NumberFormat('en-US', options).format(number)}`);
console.log(`DE: ${new Intl.NumberFormat('de-DE').format(number)}`);
console.log(`SY: ${new Intl.NumberFormat('ar-SY').format(number)}`);
console.log(
  `${navigator.language}: ${new Intl.NumberFormat(navigator.language).format(
    number
  )}`
);
 */

// TIMERS (async)
/* const ingredients = ['olives', 'cheese'];
const orderPizzaTimer = setTimeout(
  (ingOne, ingTwo) =>
    console.log(`Your ${ingOne} ${ingTwo} pizza is delivered! 🍕`),
  5000,
  ...ingredients
);

console.log('Waiting pizza... 😋'); */

// You can cancel timer with clearTimeout.
/* if (ingredients.includes('spinach')) {
  clearTimeout(orderPizzaTimer);
  console.log('Order canceled cause of spinach');
} */

// Interval (timer9
/* setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000); */
