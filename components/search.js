const searchBtn = document.getElementById('search-btn');
      
searchBtn.addEventListener('click', e => {
    e.preventDefault();

    if (searchBtn.value === 'FIND') {
        if (inputName.value.length) {
            let target = trainer.get(inputName.value.toLowerCase());
            if (target) {
                changeData(target);
            } else {
                alert('This Pokémon is not available in this Pokédex!')
            }
        } else {
            let pokemonName = trainer.idToName[inputId.value];
            if (pokemonName) {
                changeData(trainer.get(pokemonName));
            } else {
                alert('This ID is not available in this Pokédex!');
            }
        }
    } else {
        if (inputName.value.length) {
            let input = inputName.value.toLowerCase();
            let target = trainer.get(input);
            if (target) {
                changeData(target);
                alert('You already have this Pokémon!');
            } else {
                addPokemon(input);
            }
        } else {
            let pokemonName = trainer.idToName[inputId.value];        
            if (pokemonName) {
                changeData(trainer.get(pokemonName));
                alert('You already have this Pokémon!');
            } else {
                let input = inputId.value;
                addPokemon(input);
            }
        }   
    }
});