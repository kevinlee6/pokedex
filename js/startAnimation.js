export default async () => {
  const id = id => document.getElementById(id);
  const start = id('start');
  const pokedex = id('pokedex');
  const middle = id('middle');
  const topBall = id('half-circle-top');
  const topLeft = id('top-left');
  const bottomBall = id('half-circle-bottom');
  const mainContainer = document.getElementsByClassName('main-container')[0];
  const powerContainer = document.getElementById('power-container');

  const delay = (cb, t) =>
    new Promise(resolve =>
      setTimeout(() => {
        cb();
        resolve();
      }, t)
    );

  const addWobble = () => {
    bottomBall.classList.add('wobble-less');
    topBall.classList.add('wobble-more');
  };

  const removeWobble = () => {
    topBall.classList.remove('wobble-more');
    bottomBall.classList.remove('wobble-less');
  };

  start.classList.add('fadeout');

  for (let i = 0; i < 3; i++) {
    await delay(addWobble, 1000);
    await delay(removeWobble, 1000);
  }

  mainContainer.removeChild(start);
  pokedex.style.height = '100%';
  pokedex.classList.add('slide-up');
  middle.classList.add('open');
  middle.classList.remove('hidden');

  await delay(() => {
    middle.classList.remove('open');
  }, 1500);

  topLeft.classList.add('fadein');
  topLeft.classList.remove('hidden');
  powerContainer.classList.add('fadein');
  powerContainer.classList.remove('hidden');

  await delay(() => {
    topLeft.classList.remove('fadein');
    powerContainer.classList.remove('fadein');
  }, 1000);
};
