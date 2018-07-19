const movesBtn = document.getElementById('moves-btn'),
      moves = document.getElementById('moves');

movesBtn.addEventListener('click', e => {
    moves.classList.contains('hidden') ?
        moves.classList.remove('hidden') :
        moves.classList.add('hidden');
});