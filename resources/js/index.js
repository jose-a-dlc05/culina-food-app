const form = document.getElementById('login-form');
const loginEmail = document.getElementById('email-input');
const loginPass = document.getElementById('password-input');

// show error input messages
function showError(input, message) {
  input.classList.add('error');
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  small.classList.add('error');
}

// show success outline
function showSuccess(input) {
  if (input.classList.contains('error')) {
    input.classList.remove('error');
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.classList.remove('error');
  }

  input.classList.add('success');
}

// Check if email match
function checkEmailsMatch(input) {
  let response;
  if (input.value.trim() === '') {
    showError(input, `${getFieldName(input).split('-')[0]} is required`);
  } else if (input.value !== sessionStorage.getItem('email-input')) {
    showError(input, 'Please enter correct email.');
  } else {
    showSuccess(input);
    response = true;
  }
  return response;
}

// Check if passwords match
function checkPasswordsMatch(input) {
  let response;
  if (input.value.trim() === '') {
    showError(input, `${getFieldName(input).split('-')[0]} is required`);
  } else if (input.value !== sessionStorage.getItem('password-input')) {
    showError(input, 'Please enter correct password');
  } else {
    showSuccess(input);
    response = true;
  }
  return response;
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Redirect to Home
function redirectHome() {
  window.location.assign('food.html');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkEmailsMatch(loginEmail);
  checkPasswordsMatch(loginPass);

  if (checkEmailsMatch(loginEmail) && checkPasswordsMatch(loginPass)) {
    sessionStorage.setItem('loginstatus', 'yes');
    redirectHome();
  }
});
