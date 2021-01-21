'use strict';

// Default Parameter for Function
/* const bookings = [];

const createBooking = function (
  flightNumber,
  pessengerAmount = 1,
  unitPrice = 199 * pessengerAmount
) {
  const booking = {
    flightNumber,
    pessengerAmount,
    unitPrice: unitPrice * pessengerAmount,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 3);
createBooking('LH144', 5, 155);
createBooking('LH123', undefined, 100); */

// Passing Argument - Value vs Reference
/* const flightNumber = 'AZ123';
const muhsin = {
  fullName: 'Muhsin Arslan',
  passport: 2411223377442,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'AZ999';
  passenger.fullName = `Mr. ${passenger.fullName}`;

  if (passenger.passport === 2411223377442) alert('Check in');
  else alert('Wrong passport');
};

checkIn(flightNumber, muhsin);
console.log(flightNumber);
console.log(muhsin);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(muhsin);
checkIn(flightNumber, muhsin);
 */

// Functions Accepting Callback Functions
/* const oneWord = function (word) {
  return word.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (word) {
  const [firstWord, ...otherWords] = word.split(' ');
  return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

// Higher Order Function
const transformer = function (word, fn) {
  console.log(`Original string: ${word}`);
  console.log(`Transformed string: ${fn(word)}`);
  console.log(`The string was transformed by ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// Callbacks are used commonly in JavaScript
const highFive = function () {
  console.log('👋🏻');
};

document.body.addEventListener('click', highFive);

['Jonas', 'Marta', 'Martin'].forEach(highFive);
 */

// Functions Returning Functions
/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greetWithHey = greet('Hey');
greetWithHey('Muhsin');
greetWithHey('Michael');

const greetWithHello = greet('Hello');
greetWithHello('Jessie');
greetWithHello('Jina');

greet('Hi')('Mossie');

const greetWithHeyArrow = greetArrow('Hey');
greetWithHeyArrow('Mehmet');
greetArrow('Hello')('Hussein'); */

// The call and apply Methods
/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${flightNumber} flight. ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
  },
};

lufthansa.book(239, 'Muhsin Arslan');
lufthansa.book(635, 'Jean Cristoph');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; */

// Don't work
/* book(23, 'Sarah Williams'); */

// CALL & APPLY METHOD
/* book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 225, 'Marry Callie');
console.log(lufthansa); */

// Apply Method
/* const flightData = [583, 'George Callie'];
book.apply(eurowings, flightData);
console.log(eurowings);

const flightData2 = [777, 'Cherie Wolkang'];
book.call(lufthansa, ...flightData2);
console.log(lufthansa); */

// BIND METHOD
/* const bookForEuroWings = book.bind(eurowings);
bookForEuroWings(23, 'Lucia Mocha');
bookForEuroWings(99, 'Kelly Nelson'); */

// With default parameter
/* const bookForEuroWings23 = book.bind(eurowings, 23);
bookForEuroWings23('Jason Leppard');
bookForEuroWings23('Seniora Gomez'); */

// With Event Listeners
/* lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}; */

// Without bind this keyword will point the button html element.
/* document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); */

// Partial Application
/* const addTax = (taxRate, value) => value + taxRate * value;
console.log(addTax(0.18, 200));

const addVAT = addTax.bind(null, 0.27);
console.log(addVAT(183)); */

// Challange
/* const taxCalculation = taxRatio => value => value + taxRatio * value;

const taxCalculationForVAT = taxCalculation(0.27);
console.log(taxCalculationForVAT(183));
console.log(taxCalculation(0.27)(183)); */

// Challange #1

/* const poll = {
  question: 'What is your favorite programming language?',
  options: ['0:Javascript', '1:Python', '2:Rust', '3:C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let answerListString = '\n';

    for (const option of this.options) {
      answerListString += option + '\n';
    }

    const answer = prompt(
      `${this.question}\n\nOptions are: ${answerListString}\n(Write option number)`
    );
    const isAnswerValid = answer >= 0 && answer <= 3;

    if (isAnswerValid) {
      this.answers[answer]++;
    }
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string')
      console.log(`The poll results are: ${this.answers.join(',')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
*/

// Immediately Invoked Function Expressions (IIFE)
// That one is normal
/* const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again.');
})();

// IIFE Arrow
(() => console.log('This will also never run again.'))();
 */

// Closures
/* const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker); */

// Closure Examples
// Example 01
/* let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// re-assigned by h
h();
f();
console.dir(f); */

// Example 2
/* const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // This timer method can access variables via Closures
  setTimeout(function () {
    console.log(`We'are now boarding all ${n} passengers.`);
    console.log(`They're 3 groups, each will ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// 283. line
const perGroup = 1000;
boardPassengers(180, 3); */

// Challange #02
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', () => (header.style.color = 'blue'));
})();
