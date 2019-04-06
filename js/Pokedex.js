import Pokemon from './Pokemon.js';

const starterIds = [59, 130, 149];

export default class {
  constructor(name) {
    this.name = name;
    this.pokemonByName = {};
    this.pokemonById = {};
    this.isPokemonMaster = false;

    // DOM elements
    const id = id => document.getElementById(id);
    this.img = id('img');
    this.description = id('description');
    this.id = id('id');
    this.name = id('name');
    this.type1 = id('type1');
    this.type2 = id('type2');
    this.hp = id('hp');
    this.atk = id('atk');
    this.def = id('def');
    this.abil = id('abil');
    this.moves = id('moves');
    this.height = id('height');
    this.weight = id('weight');
    this.powerContainer = id('power-container');
    this.searchBtn = id('search-btn');

    starterIds.forEach(id => this.add(id));
  }

  extractData(json) {
    const {
      name,
      id,
      stats,
      abilities,
      types,
      sprites,
      moves,
      height,
      weight,
    } = json;
    return {
      name,
      id,
      hp: stats[5].base_stat,
      atk: stats[4].base_stat,
      def: stats[3].base_stat,
      abil: abilities.map(x => x.ability.name),
      type: types.map(x => x.type.name),
      photo: sprites.front_default,
      moves: moves.map(x => x.move.name),
      height,
      weight,
    };
  }

  async fetchPokemon(pNameOrInput) {
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pNameOrInput}/`
    );
    const json = await pokemon.json();
    const data = this.extractData(json);
    return new Pokemon(data);
  }

  async fetchDescription(pNameOrInput) {
    const description = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pNameOrInput}/`
    );
    const json = await description.json();
    const data = json.flavor_text_entries;
    const noDescription = 'There is no description available for this Pokémon.';
    const target = data.find(el => el.language.name === 'en');
    return target ? target.flavor_text : noDescription;
  }

  add(pNameOrInput) {
    // Hide searchBtn while fetching data from API
    this.searchBtn.classList.add('loading');
    this.searchBtn.value = 'LOADING';

    Promise.all([
      this.fetchPokemon(pNameOrInput),
      this.fetchDescription(pNameOrInput),
    ])
      .then(([pokemon, description]) => {
        pokemon.description = description;
        this.pokemonByName[pokemon.name] = pokemon;
        this.pokemonById[pokemon.id] = pokemon;
        const pokeId = document.getElementById(`pokedex-${pokemon.id}`);
        pokeId.classList.remove('false');

        let stringId = pokemon.id.toString();
        while (stringId.length !== 3) {
          stringId = '0' + stringId;
        }

        pokeId.textContent = `${stringId}: ${pokemon.name.toUpperCase()}`;
        this.changeData(pokemon);
      })
      .catch(err => {
        alert('There is no such Pokémon! Or there is a network error.');
      })
      .finally(() => {
        this.searchBtn.classList.remove('loading');
        this.searchBtn.value = this.isPokemonMaster ? 'ADD' : 'FIND';
      });
  }

  setTypeCSS(type) {
    const typeClass = type.classList;
    typeClass.remove(typeClass[0]);
    typeClass.add(type.textContent.toLowerCase());
  }

  changeData(pokemon) {
    this.id.textContent = pokemon.id;
    this.name.textContent = pokemon.name.toUpperCase();
    this.type1.textContent = pokemon.type[0].toUpperCase();
    this.setTypeCSS(type1);

    if (pokemon.type[1]) {
      this.type2.textContent = pokemon.type[1].toUpperCase();
      this.setTypeCSS(type2);
    } else {
      this.type2.textContent = '';
      this.type2.classList.remove(type2.classList[0]);
    }

    this.img.setAttribute('src', pokemon.photo);

    this.description.textContent = pokemon.description;

    this.hp.textContent = `HP: ${pokemon.hp}`;
    this.hp.style.width = `${pokemon.hp / 2.55}%`;

    this.atk.textContent = `ATTACK: ${pokemon.atk}`;
    this.atk.style.width = `${pokemon.atk / 1.9}%`;

    this.def.textContent = `DEFENSE: ${pokemon.def}`;
    this.def.style.width = `${pokemon.def / 2.3}%`;

    this.abil.textContent = `${pokemon.abil
      .map(x => x.toUpperCase())
      .join(' | ')}`;

    this.moves.innerText = '';
    for (const el of pokemon.moves) {
      const move = document.createElement('li');
      move.innerText = el.toUpperCase();
      this.moves.appendChild(move);
    }

    this.height.innerText = `${pokemon.height / 10}m`;

    this.weight.innerText = `${pokemon.weight / 10}kg`;
  }
}
