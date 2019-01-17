const movesBtn = document.getElementById('moves-btn');

movesBtn.addEventListener('click', e => {
  moves.classList.contains('hidden')
    ? moves.classList.remove('hidden')
    : moves.classList.add('hidden');
});
