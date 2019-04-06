// Start script
import Pokedex from './Pokedex.js';
import animate from './startAnimation.js';
import eventListeners from './eventListeners.js';
import makeList from './pokemonList.js';

let counter;

document.getElementById('start-form').addEventListener('submit', e => {
  e.preventDefault();
  const startForm = document.getElementById('start-form');
  const topLeft = document.getElementById('top-left');

  const name = startForm.getElementsByTagName('input')[0].value;
  animate();
  topLeft.textContent = name;

  // Instantiate Pokedex
  const pokedex = new Pokedex(name);
  eventListeners(pokedex, counter);
  makeList(pokedex);
});
