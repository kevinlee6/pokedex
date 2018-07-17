const select = document.getElementById('select'),
      inputName = document.getElementById('input-name'),
      inputId = document.getElementById('input-id');

select.addEventListener('change', e => {
    if (inputId.classList.contains('hidden')) {
        inputId.classList.remove('hidden');
        inputName.classList.add('hidden');
        inputName.value = '';
    } else {
        inputName.classList.remove('hidden');
        inputId.classList.add('hidden');
        inputId.value = '';
    }
});