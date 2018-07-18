let trainer;

startBtn.addEventListener('click', e => {
    e.preventDefault();

    // Remove start, 1s animation
    start.classList.add('fadeout');

    // Remove start element once wobble is complete
    setTimeout(() => {
        document.body.removeChild(start);
    }, 6500);

    // Shake pokeball, 6s total animation
    setTimeout(() => {
        bottomBall.classList.add('wobble-less');
        topBall.classList.add('wobble-more');
    }, 1000);
    setTimeout(() => {
        topBall.classList.remove('wobble-more');
        bottomBall.classList.remove('wobble-less');
    }, 2000)
    setTimeout(() => {
        bottomBall.classList.add('wobble-less');
        topBall.classList.add('wobble-more');
    }, 3000);
    setTimeout(() => {
        topBall.classList.remove('wobble-more');
        bottomBall.classList.remove('wobble-less');
    }, 4000)
    setTimeout(() => {
        bottomBall.classList.add('wobble-less');
        topBall.classList.add('wobble-more');
    }, 5000);

    // Show middle total animation time 1.5s
    setTimeout(() => {
        middle.classList.add('open');
        middle.classList.remove('hidden');
    }, 6500);
    setTimeout(() => {
        pokedex.removeAttribute('style');
        middle.classList.remove('open');
    }, 8000);

    // Instantiate trainer and animations
    trainer = new Trainer(startName.value);
    topLeft.textContent = trainer.name;
    setTimeout(() => {
        // remove wobble first
        topBall.classList.remove('wobble-more');
        bottomBall.classList.remove('wobble-less');

        // show extra stuffs once middle is done going up
        topLeft.classList.add('fadein');
        topLeft.classList.remove('hidden');
        powerContainer.classList.add('fadein');
        powerContainer.classList.remove('hidden');
    }, 7500);
    
    setTimeout(() => {
        topLeft.classList.remove('fadein');
        powerContainer.classList.remove('fadein');
    }, 9500);



    // Starter pokemon
    const myPokemonIds = ['59', '130', '149'];

    // Add starter pokemon to trainer
    myPokemonIds.forEach(id => {
        addPokemon(id);
    });
})