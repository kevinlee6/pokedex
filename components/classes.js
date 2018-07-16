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
        this.pokemonIdToName = {};
    }

    all() {
        return this.pokemon;
    }

    get(name) {
        return this.pokemon[name];
    }

    add(pokemonObj) {
       this.pokemon[pokemonObj.name] = pokemonObj;
       // Add to ID:Name hash, so user can use optional search by ID in O(1) time instead of potentially cycling through whole Trainer.pokemon hash
       this.pokemonIdToName[pokemonObj.id] = pokemonObj.name;
    }
}