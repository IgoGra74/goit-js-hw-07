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
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputAmount = document.querySelector('input');
const controls = document.querySelector('#controls');

createButton.classList.add('js-create-btn');
destroyButton.classList.add('js-destroy-btn');
inputAmount.classList.add('js-input-amount');

const wrapperDiv = document.createElement('div');
wrapperDiv.appendChild(controls);
wrapperDiv.appendChild(boxesContainer);

const goBack = document.querySelector('p');
goBack.insertAdjacentElement('afterend', wrapperDiv);

wrapperDiv.classList.add('js-input-boxes');

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
