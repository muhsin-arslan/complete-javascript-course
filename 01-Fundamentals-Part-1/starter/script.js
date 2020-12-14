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

function CalculateBmi(mass = 0, height = 0) {
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
