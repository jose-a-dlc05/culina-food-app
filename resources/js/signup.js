// Sign Up Form
const form = document.getElementById('signup-form');
const contactInput = document.getElementById('email-input');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');

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

// Validate emailinput
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

// Check required fields
function checkRequired(inputArray) {
  let response = false;
  inputArray.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input).split('-')[0]} is required`);
    } else {
      showSuccess(input);
      response = true;
    }
  });
  return response;
}

// check the length of input
function checkLength(input, min, max) {
  let response = false;
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input).split('-')[0]} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input).split('-')[0]} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
    response = true;
  }
  return response;
}

// Returns capitalized input id name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Checks if all inputs successful
function addStorageItems(inputArray) {
  if (
    checkRequired([usernameInput, contactInput, passwordInput]) &&
    checkLength(usernameInput, 3, 15) &&
    checkLength(passwordInput, 6, 25) &&
    isValidEmail(contactInput)
  ) {
    inputArray.forEach(function (input) {
      sessionStorage.setItem(input.id, input.value);
      sessionStorage.setItem('loginstatus', 'yes');
    });
    redirectVerification();
  }
}

// Redirect to Verification Page
function redirectVerification() {
  window.location.assign('index.html');
}

// Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  addStorageItems([usernameInput, contactInput, passwordInput]);
});

// TODO: Fix username required and length feature
