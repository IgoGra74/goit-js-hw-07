const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

emailInput.classList.add('js-email-input');
passwordInput.classList.add('js-password-input');

const formLabels = document.querySelectorAll('.login-form label');
const wrapperDiv = document.createElement('div');

formLabels.forEach(label => {
  label.classList.add('js-form-label');
  wrapperDiv.appendChild(label);
});

loginForm.prepend(wrapperDiv);

wrapperDiv.classList.add('js-labels');

const formBtn = document.querySelector('button');
formBtn.classList.add('js-form-btn');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
});
