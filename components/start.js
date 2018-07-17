const startBtn = document.getElementById('start-btn'),
      startName = document.getElementById('start-name'),
      start = document.getElementById('start');

// Divs involved with dynamic content
const img = document.getElementById('img'),
      description = document.getElementById('description'),
      id = document.getElementById('id'),
      name = document.getElementById('name');
      type1 = document.getElementById('type1'),
      typeConditional = document.getElementById('type-conditional'),
      type2 = document.getElementById('type2'),
      hp = document.getElementById('hp'),
      atk = document.getElementById('atk'),
      def = document.getElementById('def'),
      abil = document.getElementById('abil');

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
    
                addPokemon(id, data);
            });
    });

    // Remove start
    document.body.removeChild(start);

    // Show middle
    document.getElementById('middle').classList.remove('hidden');
})