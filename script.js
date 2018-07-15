class Pokemon {
    constructor(name, hp, atk, def, abil, photo) {
        this.name = name;
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

let myPokemonIds = ['59', '130', '149'];
const kevin = new Trainer('Kevin');

myPokemonIds.forEach(id => {
    axios.get(`https://www.pokeapi.co/api/v2/pokemon/${id}`)
         .then(response => {
            const data = response.data;
            console.log(data);
            const pokemon = new Pokemon(data.name, data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.abilities.map(x => x.ability.name), data.sprites.front_default);
            
            kevin.add(pokemon);
        })
});