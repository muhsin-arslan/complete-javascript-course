'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnOpenModal =>
  btnOpenModal.addEventListener('click', openModal)
);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();

  window.scrollTo(
    s1Coords.left + window.pageXOffset,
    s1Coords.top + window.pageYOffset
  );

  window.scrollTo({
    left: s1Coords.left + window.pageXOffset,
    top: s1Coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation
/* const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
}); */

// via event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const sectionId = e.target.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
});

/*
// SELECTING, CREATING & DELETING ELEMENTS

// SELECTING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

// Node element - changes are not updated itself
const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));

// HTML collection (not DOM element)  - changes are updated
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

const allButtonsWithClass = document.getElementsByClassName('btn');
console.log(allButtonsWithClass);

// CREATING & INSERTING ELEMENTS
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';

// Cannot be at different places at same time. (DOM elements are unique)
header.prepend(message);
header.append(message); // Move element from prepend to append
header.append(message.cloneNode(true));
header.before(message);
header.after(message);

// DELETE ELEMENTS
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '100%';

console.log(message.style.height);
console.log(message.style.backgroundColor); // We can access inline styles

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) * 2 + 'px';

console.log(getComputedStyle(message).height);

// CSS Variables
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // Absolute url
console.log(logo.getAttribute('src')); // Relative url
console.log(logo.className); // Not just class, it's className

// Non-standard cannot accessible directly
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer'));

logo.alt = 'Beautiful Bank Logo';
console.log(logo.alt);

logo.setAttribute('company', 'Bytech Solution');
console.log(logo.getAttribute('company'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'b');
logo.classList.remove('c', 'b');
logo.classList.toggle('c');
logo.classList.contains('c');

// Overwrite all existing classes (Generaly don't use)
logo.className = 'x';
 */

/* const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

buttonScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();

  window.scrollTo(
    s1Coords.left + window.pageXOffset,
    s1Coords.top + window.pageYOffset
  );

  window.scrollTo({
    left: s1Coords.left + window.pageXOffset,
    top: s1Coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
}); */

/* // Types of Events & Event Handlers
const h1 = document.querySelector('h1');

const alertMe = function (e) {
  alert('addEventListener: Great! You are reading the heading 👓');

  //h1.removeEventListener('mouseenter', alertMe);
};

h1.addEventListener('mouseenter', alertMe);

// 3 seconds later it will remove the mouse enter eventlistener from h1.
setTimeout(() => h1.removeEventListener('mouseenter', alertMe), 3000);

h1.onmouseenter = function (e) {
  alert('onMouseEnter: Great! You are still reading 😅');
};
*/

// Event Propagation: Bubbling and Capturing
// Event Propagation

// rgb(255, 255, 255);
/* const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('I am from link, event happaned at:', e.target);
  console.log('Event attached:', e.currentTarget);
  this.style.backgroundColor = randomColor();

  // Stop Propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('I am from links, event happaned at:', e.target);
  console.log('Event attached:', e.currentTarget);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('I am from nav, event happaned at:', e.target);
  console.log('Event attached:', e.currentTarget);
  this.style.backgroundColor = randomColor();
}); */
