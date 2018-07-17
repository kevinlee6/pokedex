function changeData(pokemon) {
    idAndName.textContent = `${pokemon.id} · ${pokemon.name.toUpperCase()}`;

    type.textContent = pokemon.type.map(x=>x.toUpperCase()).join(' / ');

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