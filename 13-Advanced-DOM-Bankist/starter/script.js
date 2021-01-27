'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContents = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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
    if (sectionId !== '#')
      document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component \\

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Active Tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Active content area
  const activeContent = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );

  tabsContents.forEach(tabContent =>
    tabContent.classList.remove('operations__content--active')
  );
  activeContent.classList.add('operations__content--active');
});

// Menu Fade Animation \\
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.nav__logo');

    siblings.forEach(sibling => {
      if (sibling !== link) sibling.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

// Passing "argument" to event handler \\
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky Navigation
// const initialCoordinatesOfSection1 = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   if (window.scrollY > initialCoordinatesOfSection1.top)
//     nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Stick Navigation with Intersection Observer API \\
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal Sections \\
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  sectionObserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

// Lazy Loading Images \\
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImage = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  imageObserver.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(image => imageObserver.observe(image));

// Slider \\
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let currentSlide = 0;
let maxSlide = slides.length;

const createDots = function () {
  slides.forEach((_, index) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slideNumber) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideNumber)}%)`;
  });
};

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) currentSlide = 0;
  else currentSlide++;
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) currentSlide = maxSlide - 1;
  else currentSlide--;
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const initSlide = function () {
  createDots();
  activateDot(0);
  goToSlide(0);
};

initSlide();

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
  e.key === 'ArrowLeft' && previousSlide();
  e.key === 'ArrowRight' && nextSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
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

// DOM TRAVERSING
// const h1 = document.querySelector('h1');

// Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'black';

// Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)'; // Itself

// Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (element) {
//   if (element !== h1) element.style.transform = 'scale(0.5)';
// });

// Intersaction Observer API
// const observerCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

// LIFECYCLE DOM EVENTS
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree was builded.', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

/* window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = ''; // We're not available to edit message anymore cause of abuses.
}); */
