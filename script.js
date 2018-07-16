// My starter 3 Pokemon
const myPokemonIds = ['59', '130', '149'];

// Instantiate trainer
const kevin = new Trainer('Kevin');

// myPokemonIds.forEach(id => {
//     axios.get(`https://www.pokeapi.co/api/v2/pokemon/${id}`)
//          .then(response => {
//             const data = response.data;
//             console.log(data);

//             // Instantiate Pokemons object to be added to Pokedex
//             const pokemon = new Pokemon(data.name, data.id, data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.abilities.map(x => x.ability.name), data.sprites.front_default);

//             // Add Pokemon to Pokedex
//             kevin.add(pokemon);
//         })
// });

const searchBtn = document.getElementById('search-btn'),
      img = document.getElementById('img'),
      description = document.getElementById('description'),
      inputName = document.getElementById('input-name'),
      inputId = document.getElementById('input-id');

// global var to track pokemon order
let rotation = 0;

searchBtn.addEventListener('click', e => {
    e.preventDefault();
    if (!pokemonIdToName[inputId.value]) {
        alert('This ID is not available in this Pokédex yet!');
    }

    if (!kevin.get(inputName.value)) {
        alert('This Pokémon is not avilable in this Pokédex yet!')
    }
    
    img.setAttribute('src', `${kevin.pokemon.pokemonIdToName[id]}`)
})