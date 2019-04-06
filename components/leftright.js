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
  if (
    !trainer ||
    document.activeElement === inputName ||
    document.activeElement === inputId
  )
    return;

  // set the counter
  const arr = trainer.all();
  setCounter(arr);

  if (--counter < 0) counter = arr.length - 1;
  changeData(arr[counter]);
});

right.addEventListener('click', e => {
  if (
    !trainer ||
    document.activeElement === inputName ||
    document.activeElement === inputId
  )
    return;

  // set the counter
  const arr = trainer.all();
  setCounter(arr);

  if (++counter >= arr.length) counter = 0;
  changeData(arr[counter]);
});

window.addEventListener('keydown', e => {
  if (e.keyCode === 37) left.click();
  else if (e.keyCode === 39) right.click();
});
