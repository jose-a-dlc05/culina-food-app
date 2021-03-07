const form = document.getElementById('reset-form');
const loginEmail = document.getElementById('email-input');
const submitBtn = document.getElementById('submit-btn');

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

// Validate email input
function isValidEmail(input) {
  let response = false;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value).toLowerCase())) {
    console.log(re.test(String(input).toLowerCase()));
    showSuccess(input);
    response = true;
  } else {
    showError(input, 'Email is not valid');
  }
  return response;
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

// Redirect to Verification Page
function redirectVerification() {
  window.location.assign('index.html');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkEmailsMatch(loginEmail);

  if (checkEmailsMatch(loginEmail)) {
    redirectVerification();
  }
});
