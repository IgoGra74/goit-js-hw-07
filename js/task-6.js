const boxesContainer = document.querySelector('#boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputAmount = document.querySelector('input');
const controls = document.querySelector('#controls');

createButton.classList.add('js-create-btn');
destroyButton.classList.add('js-destroy-btn');
inputAmount.classList.add('js-input-amount');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  boxesContainer.innerHTML = '';

  const amount = parseInt(inputAmount.value);

  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    inputAmount.value = '';

    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      boxesContainer.appendChild(box);
      size += 10;
      box.classList.add('js-boxes-item');
    }
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', function () {
  createBoxes();
});

destroyButton.addEventListener('click', function () {
  destroyBoxes();
});
