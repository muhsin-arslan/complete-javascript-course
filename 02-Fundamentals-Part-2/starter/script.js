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
const numberOne = 10;
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
