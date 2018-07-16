const searchBtn = document.getElementById('search-btn'),
      img = document.getElementById('img'),
      description = document.getElementById('description'),
      inputName = document.getElementById('input-name'),
      inputId = document.getElementById('input-id');

// global var to track pokemon order
let rotation = 0;

searchBtn.addEventListener('click', e => {
    e.preventDefault();
    if (!trainer.pokemonIdToName[inputId.value]) {
        alert('This ID is not available in this Pokédex yet!');
    }

    if (!trainer.get(inputName.value)) {
        alert('This Pokémon is not avilable in this Pokédex yet!')
    }
    
    img.setAttribute('src', `${trainer.pokemon.pokemonIdToName[id]}`)
})