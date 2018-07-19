// Content specific to a component will be located in its respective component

// Dynamic content; might not be full list
const img = document.getElementById('img'),
      description = document.getElementById('description'),
      id = document.getElementById('id'),
      name = document.getElementById('name');
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
function changeData(pokemon) {
    id.textContent = pokemon.id;

    name.textContent = pokemon.name.toUpperCase();

    type1.textContent = pokemon.type[0].toUpperCase();
    setTypeCSS(type1);

    if (pokemon.type[1]){
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

    abil.textContent = `${pokemon.abil.map(x=>x.toUpperCase()).join(' | ')}`;

    moves.innerText = '';
    for (let i of pokemon.moves) {
        let move = document.createElement('li');
        move.innerText = i.toUpperCase();
        moves.appendChild(move);
    }

    height.innerText = `${pokemon.height/10}m`;

    weight.innerText = `${pokemon.weight/10}kg`;
};

function addPokemon(pNameOrInput) {
    // Hide searchBtn while fetching data from API
    searchBtn.classList.add('loading');
    searchBtn.value = 'LOADING';

    // Not the same as Trainer.add function
    // Dynamically adds Pokemon to Pokedex/Trainer Obj from API
    let pokemon;
    axios.get(`https://www.pokeapi.co/api/v2/pokemon/${pNameOrInput}`)
        .then(response => {
            const data = response.data;
            // Instantiate Pokemons object to be added to Pokedex
            pokemon = new Pokemon(data.name, data.id, data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.abilities.map(x => x.ability.name), data.types.map(x=>x.type.name), data.sprites.front_default, data.moves.map(x=>x.move.name), data.height, data.weight);
        
            // Add Pokemon to Pokedex
            trainer.add(pokemon);
        }).then(() => {
            // Get pokemon description
            axios.get(`https://www.pokeapi.co/api/v2/pokemon-species/${pNameOrInput}/`)
                .then(response => {
                const data2 = response.data.flavor_text_entries;
                let i = 0;

                for (i; i < data2.length; i++) {
                    if (data2[i].language.name === 'en') {
                        break;
                    }
                }

                if (i === data2.length) {
                    pokemon.description = 'There is no description available for this Pokémon.'
                } else {
                    pokemon.description = data2[i].flavor_text;
                }
            }).then(() => {
                changeData(trainer.get(pokemon.name));
            }).then(() => {
                searchBtn.classList.remove('loading');
                searchBtn.value = isPokemonMaster ? 'ADD' : 'FIND'
            });
        }).catch(error => {
            alert('There is no such Pokémon! Or there is a network error.');
            searchBtn.classList.remove('loading');
            searchBtn.value = isPokemonMaster ? 'ADD' : 'FIND'
        }
    );
}

function setTypeCSS(type) {
    let typeClass = type.classList;
    typeClass.remove(typeClass[0]);

    switch (type.textContent) {
        case ('NORMAL'):
            typeClass.add('normal');
            break;
        case ('FIGHTING'):
            typeClass.add('fighting');
            break;
        case ('FLYING'):
            typeClass.add('flying');
            break;
        case ('POISON'):
            typeClass.add('poison');
            break;
        case ('GROUND'):
            typeClass.add('ground');
            break;
        case ('ROCK'):
            typeClass.add('rock');
            break;
        case ('BUG'):
            typeClass.add('bug');
            break;
        case ('GHOST'):
            typeClass.add('ghost');
            break;
        case ('STEEL'):
            typeClass.add('steel');
            break;
        case ('FIRE'):
            typeClass.add('fire');
            break;
        case ('WATER'):
            typeClass.add('water');
            break;
        case ('GRASS'):
            typeClass.add('grass');
            break;
        case ('ELECTRIC'):
            typeClass.add('electric');
            break;
        case ('PSYCHIC'):
            typeClass.add('psychic');
            break;
        case ('ICE'):
            typeClass.add('ice');
            break;
        case ('DRAGON'):
            typeClass.add('dragon');
            break;
        case ('DARK'):
            typeClass.add('dark');
            break;
        case ('FAIRY'):
            typeClass.add('fairy');
            break;
    }
}