power.addEventListener('click', e => {
    if (!trainer) return;

    if (middle.classList.contains('hidden')) {
        middle.classList.add('open');
        middle.classList.remove('hidden');
        setTimeout(() => middle.classList.remove('open'), 2000);
    } else {
        middle.classList.add('close');
        setTimeout(() => {
            middle.classList.remove('close');
            middle.classList.add('hidden');
        }, 600);
    }
});