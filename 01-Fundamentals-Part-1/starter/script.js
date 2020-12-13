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
function CalculateBmi(mass = 0, height = 0) {
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
console.log("Is John has higher BMI? " + isJohnHasHigherBmi);
