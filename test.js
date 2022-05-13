/*
Form Validation
*/
const emailCheck = document.querySelector('#email-form');

// Check if email is valid Function
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// ShowError & ShowSuccess Functions
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
};

// Check Email Function 
const checkEmail = () => {
  let valid = false;
  const email = emailCheck.value.trim();
  if (!isRequired(email)) {
      showError(emailCheck, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
      showError(emailCheck, 'Email is not valid.')
  } else {
      showSuccess(emailCheck);
      valid = true;
  }
  return valid;
};

// Event Listener Function
const mainForm = document.querySelector('#main-form');

mainForm.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  let isEmailValid = checkEmail();

  let isFormValid = isEmailValid;
});