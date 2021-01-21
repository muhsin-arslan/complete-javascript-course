'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(obj) {
    console.log(obj);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* restaurant.orderDelivery({
  time: '22:30',
  address: 'This is an address',
  mainIndex: 2,
  starterIndex: 2,
}); */

// Destructuring Object
/* const { nameOfRestaurant, openingHours, categories } = restaurant;
console.log(nameOfRestaurant, openingHours, categories); */

/*
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default Values
const { mainMenu: menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); */

// Mutating Variables
/* let a = 111;
let b = 999;
console.log(a, b);
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objects
const { sat } = openingHours;
const {
  fri: { open, close },
} = openingHours;
console.log(sat);
console.log(open, close); */

/* 
// Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

// Switching Variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 3, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */

// SPREAD OPERATOR
/* const myArray = [7, 8, 9];
const badNewArray = [1, 2, myArray[0], myArray[1], myArray[2]];
const goodNewArray = [1, 2, ...myArray];

console.log(myArray);
console.log(badNewArray);
console.log(goodNewArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); */

// Copy Array
/* const mainMenuCopy = [...restaurant.mainMenu]; */

// Join Arrays
/* const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu); */

// Itterables: arrays, strings, maps, sets. NOT: objects
/* const firstName = 'Michael';
const letters = [...firstName, ' ', 's'];
console.log(letters); */

// Real world example
/* const ingredients = [
  prompt("Let's make pasta: Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients); */

// Objects (ES 2018)
/* const newRestaurant = { foundedIn: 1997, ...restaurant, founder: 'Jason' };
console.log(newRestaurant);

const copyOfRestaurant = { ...restaurant };
copyOfRestaurant.name = "Muhsin's Grave";
console.log(copyOfRestaurant); */

// Rest
/* const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, others);

const add = function (...numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }

  console.log(sum);
};

add(4, 7, 8, 9, 12, 15);
add(3, 2, 1, 6, 1);
add(1, 5);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
 */

// FOR OF LOOP
/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

console.clear();

for (const [index, item] of menu.entries())
  console.log(`${index + 1}: ${item}`);

console.log([...menu.entries()]);
 */

/*  
// OBJECT KEYS
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

for (const day in properties) console.log(day);

// OBJECT VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

// OBJECT Entries
const entries = Object.entries(restaurant.openingHours);
for (const [day, { open, close }] of entries)
  console.log(`On ${day} we open at: ${open} and close at ${close}`);
 */

// SETS
/* console.log(new Set('Hello'));

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete('Risotto');
console.log(ordersSet);

ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example (Also it has case sensitivity)
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'waiter'];
const positions = [...new Set(staff)];
console.log(positions);

const uniquePositionCount = new Set(staff).size;
console.log(uniquePositionCount);

const firstName = 'Michael';
const firstName2 = 'Allice';
console.log(`${firstName} have ${new Set(firstName2).size} unique letters`);
 */

// MAPS
/* const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian, Pizzeria', 'Vegeterial', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are available')
  .set(false, 'We are closed.');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 7;
const isOpen = rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(isOpen);

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest.has(2));
console.log(rest.size);
// rest.clear();
console.log(rest.size); */

// Heap difference
/* const arrayForMap = [1, 2];
rest.set(arrayForMap, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);

console.log(rest.get(arrayForMap)); */

/* const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again 😢'],
]);

console.log(question); */

// Convert object to map
/* console.log(Object.entries(restaurant.openingHours));
const hourMap = new Map(Object.entries(restaurant.openingHours));
console.log(hourMap); */

// Quiz App
/* console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value} `);
}

const answer = Number(prompt('Your answer?'));
console.log(answer);
const isAnswerCorrect = answer === question.get('correct') ? true : false;
console.log(question.get(isAnswerCorrect)); */

// Convert map to array
/* console.log(...question);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
 */

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1 - Array of unique events
const events = [...new Set(gameEvents.values())];
console.log(...events);

// 2 - Unfair Yellow Card From 64.min
gameEvents.delete(64);

// 3 - Print string: "An event happened, on avarage, every 9 minutes."
const gameEventMinutes = [...gameEvents.keys()];

console.log(
  `An event happened, on avarage every ${
    gameEventMinutes[gameEventMinutes.length - 1] / gameEvents.size
  } minutes`
);

// 4 - Loop over the events and log them to the console with first half or second half.
for (const [eventTime, eventName] of gameEvents) {
  const eventNotification = `${
    eventTime <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'
  } ${eventTime}: ${eventName}`;

  console.log(eventNotification);
}

const myString =
  'This is just another email for my company website. This email is awesome.';

console.log(myString.replace('email', 'blog post'));

console.log(myString.replace(/email/g, 'blog post'));

console.log(myString.includes('another'));
