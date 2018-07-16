const startBtn = document.getElementById('start-btn'),
      startName = document.getElementById('start-name'),
      start = document.getElementById('start');

const img = document.getElementById('img'),
      description = document.getElementById('description');

let trainer;

startBtn.addEventListener('click', e => {
    e.preventDefault();
    // Starter pokemon
    const myPokemonIds = ['59', '130', '149'];

    // Instantiate trainer
    trainer = new Trainer(startName.value);

    // Add starter pokemon to trainer
    myPokemonIds.forEach(id => {
        axios.get(`https://www.pokeapi.co/api/v2/pokemon/${id}`).then(response => {
                const data = response.data;
                console.log(data);
    
                // Instantiate Pokemons object to be added to Pokedex
                const pokemon = new Pokemon(data.name, data.id, data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.abilities.map(x => x.ability.name), data.sprites.front_default);
    
                // Add Pokemon to Pokedex
                trainer.add(pokemon);

                axios.get(`https://www.pokeapi.co/api/v2/pokemon-species/${id}/`).then(response => {
                    const data = response.data;

                    pokemon.description = data.flavor_text_entries[2].flavor_text;

                    img.setAttribute('src', trainer.pokemon.arcanine.photo);

                    description.textContent = trainer.pokemon.arcanine.description;
                });
            });
    });

    // Remove start
    document.body.removeChild(start);

    // Show middle
    document.getElementById('middle').classList.remove('hidden');
})