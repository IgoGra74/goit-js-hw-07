const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', updateNameOutput);

function updateNameOutput() {
  const inputValue = nameInput.value.trim();

  nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}

updateNameOutput();

const titleOne = document.querySelector('h1');
const wrapperDiv = document.createElement('div');

wrapperDiv.appendChild(nameInput);
wrapperDiv.appendChild(titleOne);

document.body.appendChild(wrapperDiv);

wrapperDiv.classList.add('js-text-field');
titleOne.classList.add('js-title-one');
