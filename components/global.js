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
      abil = document.getElementById('abil');

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
};

function addPokemon(pID, data) {
    // Not the same as Trainer.add function
    // Dynamically adds Pokemon to Pokedex/Trainer Obj from API
    // pID is pokemon ID and data is response.data from parent ajax call

    // Instantiate Pokemons object to be added to Pokedex
    const pokemon = new Pokemon(data.name, data.id, data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.abilities.map(x => x.ability.name), data.types.map(x=>x.type.name), data.sprites.front_default);
    
    // Add Pokemon to Pokedex
    trainer.add(pokemon);

    axios.get(`https://www.pokeapi.co/api/v2/pokemon-species/${pID}/`).then(response => {
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
    }).then(() => changeData(trainer.get(pokemon.name)));
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