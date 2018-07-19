const pokemonList = document.getElementById('pokemon-list'),
      mainDisplay = document.getElementById('main-display'),
      filterBtn = document.getElementById('filter-btn'),
      pokedexArr = document.getElementsByClassName('pokedex'),
      pokedexBtn = document.getElementById('pokemon-list-btn');

pokedexBtn.addEventListener('click', e => {
    if (pokemonList.classList.contains('hidden')) {
        pokemonList.classList.remove('hidden');
        pokedexBtn.classList.add('is-clicked');
        mainDisplay.classList.add('hidden');
    } else {
        pokemonList.classList.add('hidden');
        pokedexBtn.classList.remove('is-clicked');
        mainDisplay.classList.remove('hidden');
    }
});

// Append to div
for (let i = 1; i < 803; i++) {
    let content = document.createElement('p');
    content.setAttribute('id', `pokedex-${i}`);
    content.classList.add('false');
    content.classList.add('clickable');
    content.classList.add('pokedex');

    content.addEventListener('click', e => {
        if (content.classList.contains('false') && !isPokemonMaster) {
            // if it doesn't exist and user tries to find
            alert("You don't have that Pokémon yet!");
        } else if (content.classList.contains('false') && isPokemonMaster) {
            // if it doesn't exist and users tries to add
            addPokemon(i);
            pokemonList.classList.add('hidden');
            mainDisplay.classList.remove('hidden');
            pokedexBtn.classList.remove('is-clicked');
        } else if (!content.classList.contains('false') && isPokemonMaster) {
            // if it exists and user tries to add
            alert("You already have that pokemon!");
            changeData(trainer.get(trainer.idToName[i]));
        } else {
            // if it exists and user tries to find
            changeData(trainer.get(trainer.idToName[i]));
            pokemonList.classList.add('hidden');
            mainDisplay.classList.remove('hidden');
            pokedexBtn.classList.remove('is-clicked');
        }
    });

    let stringI = String(i);
    while (stringI.length !== 3) {
        stringI = '0' + stringI;
    }
    content.textContent = `${stringI}: ???`;
    pokemonList.appendChild(content);
}

let filtered = false;
filterBtn.addEventListener('click', e => {
    filtered = !filtered;
    if (filtered) {
        filterBtn.classList.add('is-clicked');
        for (let i of pokedexArr) {
            if (i.classList.contains('false')) {
                i.classList.add('hidden');
            }
        }
    } else {
        filterBtn.classList.remove('is-clicked');
        for (let i of pokedexArr) {
            i.classList.remove('hidden');
        }
    }
});