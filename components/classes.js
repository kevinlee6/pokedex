class Pokemon {
    constructor(name, id, hp, atk, def, abil, type, photo, moves, height, weight) {
        this.name = name;
        this.id = id;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.abil = abil;
        this.type = type;
        this.photo = photo;
        this.moves = moves;
        this.height = height;
        this.weight = weight;
        this.description = '';
    }
}

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemon = {};
        this.idToName = {};
    }

    all() {
        return Object.values(this.pokemon);
    }

    get(name) {
        return this.pokemon[name];
    }

    add(pokemonObj) {
       this.pokemon[pokemonObj.name] = pokemonObj;
       // Add to ID:Name hash, so user can use optional search by ID in O(1) time instead of potentially cycling through whole Trainer.pokemon hash
       this.idToName[pokemonObj.id] = pokemonObj.name;
    }
}