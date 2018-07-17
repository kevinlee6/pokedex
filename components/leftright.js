const left = document.getElementById('left'),
      right = document.getElementById('right');
// global counter var that will track arr pointer;
let counter;

function setCounter(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name.textContent.toLowerCase()) {
            counter = i;
            break;
        }
    }
}

left.addEventListener('click', e => {
    if (!trainer) return;
    // set the counter
    const arr = trainer.all();
    setCounter(arr);

    if (--counter < 0) counter = arr.length-1;
    changeData(arr[counter]);
})

right.addEventListener('click', e => {
    if (!trainer) return;
    // set the counter
    const arr = trainer.all();
    setCounter(arr);

    if (++counter >= arr.length) counter = 0;
    changeData(arr[counter]);
})