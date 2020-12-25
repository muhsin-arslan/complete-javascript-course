"use strict";

/* let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive 🚗"); */

// const interface = "Test";
// const private = 534;

// Function

/* function logger() {
  console.log("My name is Muhsin.");
} */

// Calling - Running - Invoking the function
/* logger();
logger();

function makeJuice(apples, oranges) {
  let juice = "";

  if (apples > 0 && oranges > 0)
    juice = `Mixed Juice has made with ${apples} apples and ${oranges} oranges. 🍊🍎🥤`;
  else if (apples > 0)
    juice = `Apple Juice has made with ${apples} apples. 🍎🥤`;
  else if (oranges > 0)
    juice = `Orange Juice has made with ${oranges} oranges. 🍊🥤`;

  return juice;
}

const myAppleJuice = makeJuice(5);
const myOrangeJuice = makeJuice(0, 3);
const myMixedJuice = makeJuice(3, 4);

console.log(myAppleJuice);
console.log(myOrangeJuice);
console.log(myMixedJuice);
 */

// Function Declaration
/* function calculateAgeOne(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
const studentAge = calculateAgeOne(2000);
console.log(studentAge);

// Function Expression
const calculateAgeTwo = function (birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};
const teacherAge = calculateAgeTwo(1975);
console.log(teacherAge);

// Arrow Function
const calculateAgeThree = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};
const parentAge = calculateAgeThree(1969);
console.log(parentAge);

// Arrow Function 2
const calculateAgeFour = (birthYear) => new Date().getFullYear() - birthYear;
const brotherAge = calculateAgeFour(1993);
console.log(brotherAge);

// Arrow Function with Multiple Parameters
const calculateSumOfTwoNumber = (numberOne, numberTwo) => numberOne + numberTwo;
const mySumResult = calculateSumOfTwoNumber(5, 13);
console.log(mySumResult);
 */

// Function in Function (My Basic Calculator)
/* const numberOne = 10;
const numberTwo = 20;
const calculationProcess = "*";

const sumCalculation = (numberOne, numberTwo) => numberOne + numberTwo;
const minusCalculation = (numberOne, numberTwo) => numberOne - numberTwo;
const divideCalculation = (numberOne, numberTwo) => numberOne / numberTwo;
const multiplyCalculation = (numberOne, numberTwo) => numberOne * numberTwo;

const simpleCalculator = function (numberOne, numberTwo, calculationProcess) {
  let result;

  switch (calculationProcess) {
    case "+":
      result = sumCalculation(numberOne, numberTwo);
      break;
    case "-":
      result = minusCalculation(numberOne, numberTwo);
      break;
    case "/":
      result = divideCalculation(numberOne, numberTwo);
      break;
    case "*":
      result = multiplyCalculation(numberOne, numberTwo);
      break;

    default:
      break;
  }

  return result;
};

const myResult = simpleCalculator(numberOne, numberTwo, calculationProcess);
console.log(myResult);
 */

// Arrays
/* const friends = ["John", "Michael", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]);
console.log(`I have ${friends.length} friends.`);

friends[3] = "Drake";
console.log(friends);

const years = new Array(1993, 2001, 2005);
console.log(years);
console.log(years[years.length - 1]); // Last item of array.

const firstName = "Nick";
const lastName = "Star";
const age = new Date().getFullYear() - 2007;
const person = [firstName, lastName, age, friends];
console.log(person);

// Exercise
const calculateAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const birthYears = [2010, 1993, 1996, 1988];
const age01 = calculateAge(birthYears[0]);
const age02 = calculateAge(birthYears[1]);
const age03 = calculateAge(birthYears[birthYears.length - 1]);

console.log(age01, age02, age03);

const ages = [
  calculateAge(birthYears[0]),
  calculateAge(birthYears[1]),
  calculateAge(birthYears[birthYears.length - 1]),
];

console.log(ages); */

// Array Methods

// Add
/* const friends = ["Michael", "John", "Jason"];
const friendsLength = friends.push("Jay");
console.log(friends);
console.log(`I have ${friendsLength} friends.`);

friends.unshift("Harry");
console.log(friends);

// Remove
const removedFriend = friends.pop(); // Last
console.log(`${removedFriend} is removed from my friend list. ❌`);
console.log(friends);

const removedAnotherFriend = friends.shift(); // First
console.log(`${removedAnotherFriend} is also removed from my friend list. ❌`);
console.log(friends);

console.log(
  `John is at position ${friends.indexOf("John") + 1} at my friend list ⭐`
);

// Include
const checkFriendIsExists = function (friendName) {
  const isExists = friends.includes(friendName);

  if (isExists) console.log(`${friendName} is in your friend list. ✅`);
  else console.log(`${friendName} is not in your friend list. ⛔`);
};

const firstFriendToFind = checkFriendIsExists("Michael");
const secondFriendToFind = checkFriendIsExists("Peter"); */

// Challange 02
/* const calculateTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : 0.2);
const calculateTotal = (bill, tip) => bill + tip;

const bills = [125, 555, 44];
const tips = [
  calculateTip(bills[0]),
  calculateTip(bills[1]),
  calculateTip(bills[2]),
];
const totals = [
  calculateTotal(bills[0], tips[0]),
  calculateTotal(bills[1], tips[1]),
  calculateTotal(bills[2], tips[2]),
];

console.log(bills);
console.log(tips);
console.log(totals);
 */

// Objects

const personArray = [
  "Michael",
  "Dunky",
  new Date().getFullYear() - 1990,
  "Basketball player",
  ["Michael Jordan", "Kobe Bryant", "Derrick Rose"],
];
console.log(personArray);

const personObject = {
  firstName: "Michael",
  lastName: "Dunky",
  age: new Date().getFullYear() - 1990,
  job: "basketball player",
  friends: ["Michael Jordan", "Kobe Bryant", "Derrick Rose"],
};

console.log(personObject);
console.log(`This is ${personObject["firstName"]}.`);

console.log(
  `${personObject.firstName} ${personObject.lastName} is a ${personObject.job} and have ${personObject.friends.length}`
);

// Compute property name, dot acceessor not allowed that
const nameKey = "Name";
console.log(personObject["first" + nameKey]);
console.log(personObject["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about person. Choose between firstName, lastName, age, job, friends"
);

personObject.location = "Japan";
personObject["twitterUsername"] = "@japanese.dunky";

// Will be undefined, cause dot operator do not allowe compute property name
// console.log(personObject.interestedIn);

// This one will work.
console.log(
  personObject[interestedIn] === undefined
    ? "There is no information"
    : personObject[interestedIn]
);
