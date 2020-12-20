/* let js = "amazing";
if (js === "amazing") alert("Javascript is FUN!");
console.log(20 + 10 + 33);

let firstName = "Muhsin";
console.log(firstName);

let country = "Turkey";
let continent = "Europe";
let population = 70000000;

console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population);
 */

/* const ageOfStudent = 25;
const ageOfTeacher = 35;
const currentYear = 2020;
console.log("Student birth year is " + (currentYear - ageOfStudent));
console.log("Teacher birth year is " + (currentYear - ageOfTeacher));
console.log(typeof ageOfStudent);
console.log(ageOfTeacher > ageOfStudent);
console.log(ageOfTeacher == ageOfTeacher);
console.log(ageOfTeacher === ageOfStudent);

const mainValue = 5;
const powerValue = 3;
console.log(mainValue ** powerValue);

let numberOne = 111;
let numberTwo = 222;
let resultOfMultiply = numberOne * numberTwo;
console.log(resultOfMultiply);
 */

// Challange 01
/* function CalculateBmi(mass = 0, height = 0) {
  return mass / height ** 2;
}

let markMass = 95;
let markHeight = 1.88;
let markBmi = CalculateBmi(markMass, markHeight);

let johnMass = 85;
let johnHeight = 1.76;
let johnBmi = CalculateBmi(johnMass, johnHeight);

const isMarkHasHigherBmi = markBmi > johnBmi;
const isJohnHasHigherBmi = johnBmi > markBmi;

console.log("Mark's BMI is: " + markBmi);
console.log("John's BMI is: " + johnBmi);
console.log("Is Mark has higher BMI? " + isMarkHasHigherBmi);
console.log("Is John has higher BMI? " + isJohnHasHigherBmi); */

/* const firstName = "Muhsin";
const job = "Software Engineer";
const birthYear = 1993;
const currentYear = 2020;
const age = currentYear - birthYear;

const greeting = `I'm ${firstName} and I'm ${age} years old ${job}.`;
console.log(greeting);

console.log(`Multiple
line
string.`); */

/* const age = 12;
const driverAgeLimit = 18;

if (age >= driverAgeLimit) {
  console.log(`You can take driver license. 🚗`);
} else {
  console.log(
    `You can't take driver license. Come back ${
      driverAgeLimit - age
    } years later. 😢`
  );
} */

// Challange 02

/* function CalculateBmi(mass = 0, height = 0) {
  return mass / height ** 2;
}

let markMass = 80;
let markHeight = 1.75;
let markBmi = CalculateBmi(markMass, markHeight);

let johnMass = 80;
let johnHeight = 1.75;
let johnBmi = CalculateBmi(johnMass, johnHeight);

if (markBmi > johnBmi) {
  console.log(
    `Mark's BMI is ${markBmi} and higher than
    John's BMI (${johnBmi})`
  );
} else if (johnBmi > markBmi) {
  console.log(
    `John's BMI is ${johnBmi} and higher than
    Mark's BMI (${johnBmi})`
  );
} else {
  console.log(`John's BMI ${johnBmi} and
  Mark's BMI (${johnBmi}) are equal.`);
}
 */

/* 
// Type Conversion
const birthYearFromInput = "1991";
const birthYear = Number(birthYearFromInput);
console.log(birthYearFromInput, birthYear);

const countOfItem = 5;
const countOfItemAsString = String(countOfItem);
console.log(countOfItem, countOfItemAsString);

// Type Coercian
const ageOfUser = 26;
const countOfApple = 33;
const greetingMessage = "Hello, I'm";

console.log("I have " + countOfApple + " apples in my basket.");
console.log(`${greetingMessage} ${ageOfUser} old.`);
console.log("25" - "25" + 10);
console.log("25" + 25 + 10);
console.log("25" / "25" + 10);
console.log("25" ** "2");
console.log("25" < "10");
console.log("25" >= "10");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 1 + 5 + "3");
console.log("1" + "5" - 5 + "5"); */

/* 
// 5 Falsy Values are: 0, '', undefined, null, NaN
const falsyValueOne = 0;
const falsyValueTwo = "";
const falsyValueThree = undefined;
const falsyValueFour = null;
const falsyValueFive = NaN;

console.log(
  Boolean(falsyValueOne),
  Boolean(falsyValueTwo),
  Boolean(falsyValueThree),
  Boolean(falsyValueFour),
  Boolean(falsyValueFive)
);

console.log(Boolean(1), Boolean("Hello")); */

/* 
// Equality Operators

console.log(18 === 18);
console.log(18 === "18");
console.log(18 == 18);
console.log(18 == "18");

const favoriteNumber = Number(prompt("What is your favorite number?"));
console.log(typeof favoriteNumber, favoriteNumber);

if (favoriteNumber === 23) {
  console.log("23 is great number!");
} */

// Challange 03

/* function CalculateAvarageOfTeam(scores) {
  let totalScore = 0;

  scores.forEach((score) => {
    totalScore = totalScore + score;
  });

  return totalScore / scores.length;
}

const dolphinTeamScores = [100, 100, 100];
const dolphinTeamScoreAvarage = CalculateAvarageOfTeam(dolphinTeamScores);
console.log(dolphinTeamScoreAvarage);

const koalasTeamScores = [100, 100, 100];
const koalasTeamScoreAvarage = CalculateAvarageOfTeam(koalasTeamScores);
console.log(koalasTeamScoreAvarage); */

// STANDARD
/* if (dolphinTeamScoreAvarage > koalasTeamScoreAvarage)
  console.log("Dolphin team is won!");
else if (koalasTeamScoreAvarage > dolphinTeamScoreAvarage)
  console.log("Koalas team is won!");
else console.log("It's draw!"); */

/* // BONUS 1
if (
  dolphinTeamScoreAvarage > koalasTeamScoreAvarage &&
  dolphinTeamScoreAvarage >= 100
)
  console.log("Dolphin team is won!");
else if (
  koalasTeamScoreAvarage > dolphinTeamScoreAvarage &&
  koalasTeamScoreAvarage >= 100
)
  console.log("Koalas team is won!");
else if (
  dolphinTeamScoreAvarage === koalasTeamScoreAvarage &&
  dolphinTeamScoreAvarage >= 100 &&
  koalasTeamScoreAvarage >= 100
)
  console.log("It's draw!"); */

// BONUS 2
/* if (
  dolphinTeamScoreAvarage > koalasTeamScoreAvarage &&
  dolphinTeamScoreAvarage >= 100
)
  console.log("Dolphin team is won the trophy! 🏆");
else if (
  koalasTeamScoreAvarage > dolphinTeamScoreAvarage &&
  koalasTeamScoreAvarage >= 100
)
  console.log("Koalas team is won the trophy! 🏆");
else if (
  dolphinTeamScoreAvarage === koalasTeamScoreAvarage &&
  dolphinTeamScoreAvarage >= 100 &&
  koalasTeamScoreAvarage >= 100
)
  console.log("Both of them are won the trophy! 🏆🏆");
else if (dolphinTeamScoreAvarage <= 100 && koalasTeamScoreAvarage <= 100)
  console.log("There is no trophy for teams. 😭"); */

// Switch Statement
/* 
const day = "sunday";

switch (day) {
  case "monday": // day === monday
    console.log("Plan course streaming.");
    console.log("Go to meetup.");
    break;
  case "tuesday":
    console.log("Workout for basketball match.");
    break;
  case "wednesday":
  case "thursday":
    console.log("Watch coding videos.");
    break;
  case "friday":
    console.log("Code the project.");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy with the weekend.");
    break;
  default:
    console.log("Invalid day name");
    break;
} */

// Ternary Operator

/* const age = 21;

age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink juice 🥤");

const drink = age >= 18 ? "wine 🍷" : "juice 🥤";

console.log(`I like to drink ${drink}`); */

// Coding Challange 04

const bill = 50;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(
  `The bill was $${bill}, the tip was $${tip} and the total is $${total}`
);
