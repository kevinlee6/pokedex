// Content specific to a component will be located in its respective component
let isPokemonMaster = false;

// Dynamic content; might not be full list
const img = document.getElementById('img'),
  description = document.getElementById('description'),
  id = document.getElementById('id'),
  name = document.getElementById('name'),
  type1 = document.getElementById('type1'),
  type2 = document.getElementById('type2'),
  hp = document.getElementById('hp'),
  atk = document.getElementById('atk'),
  def = document.getElementById('def'),
  abil = document.getElementById('abil'),
  moves = document.getElementById('moves'),
  height = document.getElementById('height'),
  weight = document.getElementById('weight');

// Static content; might not be full list
const startBtn = document.getElementById('start-btn'),
  startName = document.getElementById('start-name'),
  start = document.getElementById('start'),
  topLeft = document.getElementById('top-left'),
  powerContainer = document.getElementById('power-container'),
  middle = document.getElementById('middle'),
  pokedex = document.getElementById('pokedex'),
  topBall = document.getElementById('half-circle-top'),
  bottomBall = document.getElementById('half-circle-bottom');

// Functions in this file: changeData, addPokemon, and setTypeCSS
const changeData = pokemon => {
  id.textContent = pokemon.id;
  name.textContent = pokemon.name.toUpperCase();
  type1.textContent = pokemon.type[0].toUpperCase();
  setTypeCSS(type1);

  if (pokemon.type[1]) {
    type2.textContent = pokemon.type[1].toUpperCase();
    setTypeCSS(type2);
  } else {
    type2.textContent = '';
    type2.classList.remove(type2.classList[0]);
  }

  img.setAttribute('src', pokemon.photo);

  description.textContent = pokemon.description;

  hp.textContent = `HP: ${pokemon.hp}`;
  hp.style.width = `${pokemon.hp / 2.55}%`;

  atk.textContent = `ATTACK: ${pokemon.atk}`;
  atk.style.width = `${pokemon.atk / 1.9}%`;

  def.textContent = `DEFENSE: ${pokemon.def}`;
  def.style.width = `${pokemon.def / 2.3}%`;

  abil.textContent = `${pokemon.abil.map(x => x.toUpperCase()).join(' | ')}`;

  moves.innerText = '';
  for (let i of pokemon.moves) {
    let move = document.createElement('li');
    move.innerText = i.toUpperCase();
    moves.appendChild(move);
  }

  height.innerText = `${pokemon.height / 10}m`;

  weight.innerText = `${pokemon.weight / 10}kg`;
};

const addPokemon = async pNameOrInput => {
  const errFn = () => {
    alert('There is no such Pokémon! Or there is a network error.');
    searchBtn.classList.remove('loading');
    searchBtn.value = isPokemonMaster ? 'ADD' : 'FIND';
  };
  // Hide searchBtn while fetching data from API
  searchBtn.classList.add('loading');
  searchBtn.value = 'LOADING';

  // Not the same as Trainer.add function
  // Dynamically adds Pokemon to Pokedex/Trainer Obj from API
  const data = await fetch(
    `https://www.pokeapi.co/api/v2/pokemon/${pNameOrInput}/`
  ).catch(errFn);
  const pJson = await data.json();
  const pokemon = new Pokemon(
    pJson.name,
    pJson.id,
    pJson.stats[5].base_stat,
    pJson.stats[4].base_stat,
    pJson.stats[3].base_stat,
    pJson.abilities.map(x => x.ability.name),
    pJson.types.map(x => x.type.name),
    pJson.sprites.front_default,
    pJson.moves.map(x => x.move.name),
    pJson.height,
    pJson.weight
  );

  trainer.add(pokemon);
  // Add Pokemon to Pokedex
  const pokeId = document.getElementById(`pokedex-${pokemon.id}`);
  pokeId.classList.remove('false');
  let stringId = String(pokemon.id);
  while (stringId.length !== 3) {
    stringId = '0' + stringId;
  }

  pokeId.textContent = `${stringId}: ${pokemon.name.toUpperCase()}`;

  const descriptionData = await fetch(
    `https://www.pokeapi.co/api/v2/pokemon-species/${pNameOrInput}/`
  ).catch(errFn);
  const descriptionJson = await descriptionData.json();
  const descriptionArr = descriptionJson.flavor_text_entries;

  const i = descriptionArr.findIndex(el => el.language.name === 'en');
  const errorMessage = 'There is no description available for this Pokémon.';
  pokemon.description =
    i < 0 || i >= descriptionArr.length
      ? errorMessage
      : descriptionArr[i].flavor_text;
  changeData(trainer.get(pokemon.name));
  searchBtn.classList.remove('loading');
  searchBtn.value = isPokemonMaster ? 'ADD' : 'FIND';
};

function setTypeCSS(type) {
  let typeClass = type.classList;
  typeClass.remove(typeClass[0]);
  typeClass.add(type.textContent.toLowerCase());
}
