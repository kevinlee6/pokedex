class Pokemon {
    constructor(name, id, hp, atk, def, abil, photo) {
        this.name = name;
        this.id = id;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.abil = abil;
        this.photo = photo;
    }
}

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemon = {};
    }

    all() {
        return this.pokemon;
    }

    get(name) {
        return this.pokemon[name];
    }

    add(pokemonObj) {
       this.pokemon[pokemonObj.name] = pokemonObj;
    }
}


const myPokemonIds = ['59', '130', '149'],
      pokemonIdToName = {};
const kevin = new Trainer('Kevin');

myPokemonIds.forEach(id => {
    axios.get(`https://www.pokeapi.co/api/v2/pokemon/${id}`)
         .then(response => {
            const data = response.data;
            console.log(data);
            const pokemon = new Pokemon(data.name, data.id, data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.abilities.map(x => x.ability.name), data.sprites.front_default);

            // Add to ID:Name hash, so user can use optional search by ID in O(1) time instead of potentially cycling through whole Trainer.pokemon hash
            pokemonIdToName[pokemon.id] = pokemon.name;

            // Add Pokemon to Pokedex
            kevin.add(pokemon);
        })
});