function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = '';

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
}
function destroyBoxes(amount) {
  boxesContainer.innerHTML = '';
}

const boxesContainer = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputAmount = document.querySelector('input');

createButton.addEventListener('click', function () {
  const amount = inputAmount.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputAmount.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }

  destroyButton.addEventListener('click', function () {
    destroyBoxes(amount);
  });
});
