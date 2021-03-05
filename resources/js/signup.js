// Sign Up Form
const form = document.getElementById('signup-form');
const contactInput = document.getElementById('contact-input');
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
// Validate user input
// function checkUserInput(input) {
//   let response = false;
//   const re = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
//   if (re.test(input.value.trim())) {
//     showSuccess(input);
//     response = true;
//   } else {
//     showError(input, 'User input is not valid');
//   }
//   return response;
// }

// Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (contactInput.value === '') {
    showError(contactInput, 'Valid email or phone required');
  } else {
    showSuccess(contactInput);
  }
});
