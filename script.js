class Pokemon {
    constructor(hp, atk, def, abil) {
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.abil = abil;
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
       pokemon[pokemonObj.name] = pokemonObj;
    }
}