'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
            </div>
        </article>
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMessage) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
};

/*
const getCountryData = function (countryName) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.eu/rest/v2/name/${countryName}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    const html = `
        <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
            </div>
        </article>
      `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

const getCountryAndNeighbour = function (countryName) {
  // STEP: Ajax Call for Main
  const mainRequest = new XMLHttpRequest();
  mainRequest.open(
    'GET',
    `https://restcountries.eu/rest/v2/name/${countryName}`
  );
  mainRequest.send();

  mainRequest.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    //STEP: Render Main Country
    renderCountry(data);

    //STEP: Get Neighbour Country
    const [neighbour] = data.borders;
    if (!neighbour) return;

    //STEP: Ajax Call for Neighbour
    const neighbourRequest = new XMLHttpRequest();
    neighbourRequest.open(
      'GET',
      `https://restcountries.eu/rest/v2/alpha/${neighbour}`
    );
    neighbourRequest.send();

    neighbourRequest.addEventListener('load', function () {
      const neighbourData = JSON.parse(this.responseText);
      renderCountry(neighbourData, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
//NOTE callback function in other callback function (first: main country inside of it, second one neighbour country);
getCountryAndNeighbour('turkey'); */

// Promises and Fetch API
/* const mainCountryRequest = fetch(
  'https://restcountries.eu/rest/v2/name/portugal'
);

const getCountryAndNeighbour = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(([data]) => {
      renderCountry(data);
      return data;
    })
    .then(data => {
      const [neighbour] = data.borders;
      fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'));
    });
};

const getCountryAndNeighbour2 = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(
      response => {
        console.log(response);
      }
      // error => alert(error) // Chain based error catch (rejected promise)
    )
    .then(([data]) => {
      renderCountry(data);

      const neighbour = data.borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      // Global error catch (rejected promise)
      renderError(`Something went wrong ⛔ ${error.message}. Try again.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const getCountryAndNeighbour3 = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country was not found.'
  )
    .then(([data]) => {
      renderCountry(data);

      const neighbour = data.borders[0];

      if (!neighbour) throw new Error(`Not found any neighbour`);

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country was not found.'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      // Global error catch (rejected promise)
      renderError(`Something went wrong ⛔ ${error.message}. Try again.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryAndNeighbour2('turkey');
});

getCountryAndNeighbour3('turkey'); */

// PROMISIFYING setTimeout
/* const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('After 2 seconds i waited for 1 seconds.')); */

// PROMISIFYING geoLocation API
/* const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos)); */

//TITLE: CONSUMING PROVISES WITH ASYNC / AWAIT
/* const whereAmI = async function (country) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${country}`
  );
  const result = await response.json();
  renderCountry(result[0]);
};

whereAmI('portugal');
console.log('FIRST'); */
