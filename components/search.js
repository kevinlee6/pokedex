const searchBtn = document.getElementById('search-btn');
      
searchBtn.addEventListener('click', e => {
    e.preventDefault();

    if (inputName.value.length) {
        let target = trainer.get(inputName.value.toLowerCase());
        if (target) {
            changeData(target);
        } else {
            alert('This Pokémon is not avilable in this Pokédex!')
        }
    } else {
        let pokemonName = trainer.idToName[inputId.value];
        if (pokemonName) {
            changeData(trainer.get(pokemonName));
        } else {
            alert('This ID is not available in this Pokédex!');
        }
    }
})