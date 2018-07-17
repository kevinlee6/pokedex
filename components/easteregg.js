let easteregg = document.getElementById('pokemon-master'),
    topHalf = document.getElementById('half-circle-top');

easteregg.addEventListener('click', e => {
    if (isPokemonMaster) {
        topHalf.classList.remove('master-ball');
        searchBtn.value = 'FIND';
        isPokemonMaster = false;
    } else {
        topHalf.classList.add('master-ball');
        searchBtn.value = 'ADD';
        isPokemonMaster = true;
    }
});