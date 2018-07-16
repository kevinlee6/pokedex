const searchBtn = document.getElementById('search-btn'),
      inputName = document.getElementById('input-name'),
      inputId = document.getElementById('input-id');
      
searchBtn.addEventListener('click', e => {
    e.preventDefault();
    let target;

    if (inputName.value.length) {
        if (trainer.get(inputName.value)) {
            target = trainer.get(inputName.value);
            changeData(target);
        } else {
            alert('This Pokémon is not avilable in this Pokédex yet!')
        }
    } else {
        let name = trainer.idToName[inputId.value];
        if (name) {
            changeData(name);
        } else {
            alert('This ID is not available in this Pokédex yet!');
        }
    }
})