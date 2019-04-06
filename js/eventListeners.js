export default pokedex => {
  // Search event listener
  const searchBtn = document.getElementById('search-btn');
  const inputField = document.getElementById('input');

  searchBtn.addEventListener('click', e => {
    e.preventDefault();
    const input = inputField.value.toLowerCase();
    const pokemon = pokedex.pokemonByName[input] || pokedex.pokemonById[input];

    if (pokemon) {
      pokedex.changeData(pokemon);
      if (searchBtn.value !== 'FIND') {
        alert('You already have this Pokémon!');
      }
    } else {
      if (searchBtn.value === 'FIND') {
        alert('This Pokémon is not available in this Pokédex!');
      } else {
        pokedex.add(input);
      }
    }
  });

  // Add easter egg listener
  const easteregg = document.getElementById('pokemon-master');
  const topHalf = document.getElementById('half-circle-top');

  easteregg.addEventListener('click', () => {
    if (pokedex.isPokemonMaster) {
      topHalf.classList.remove('master-ball');
      searchBtn.value = 'FIND';
      pokedex.isPokemonMaster = false;
    } else {
      topHalf.classList.add('master-ball');
      searchBtn.value = 'ADD';
      pokedex.isPokemonMaster = true;
    }
  });

  // Moves event listener
  const movesBtn = document.getElementById('moves-btn');

  movesBtn.addEventListener('click', e => {
    moves.classList.contains('hidden')
      ? moves.classList.remove('hidden')
      : moves.classList.add('hidden');
  });

  // Power button event listener
  const power = document.getElementById('power');
  const middle = document.getElementById('middle');

  power.addEventListener('click', e => {
    if (middle.classList.contains('hidden')) {
      middle.classList.add('open');
      middle.classList.remove('hidden');
      setTimeout(() => middle.classList.remove('open'), 2000);
    } else {
      middle.classList.add('close');
      setTimeout(() => {
        middle.classList.remove('close');
        middle.classList.add('hidden');
      }, 600);
    }
  });

  // TODO : Binary search to maintain order of pokemon
  // const left = document.getElementById('left')
  // const right = document.getElementById('right');
};
