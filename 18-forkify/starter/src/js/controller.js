import * as model from './model.js';
import recipeView from './views/recipeView.js';

// import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const renderSpinner = function (parentElement) {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;

  parentElement.innerHTML = '';
  parentElement.insertAdjacentHTML('afterbegin', markup);
};

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    renderSpinner(recipeContainer);

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, showRecipe)
);
