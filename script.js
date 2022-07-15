const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("mail");
// const emailError = document.querySelector('#mail + span.error');
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const pwConfirm = document.getElementById("pwConfirm");

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";
  }
  emailError.className = "error active";
}

country.addEventListener("input", function (event) {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showCountryError();
  }
});

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a country name.";
  } else if (country.validity.typeMismatch) {
    countryError.textContent =
      "Entered value needs to be a country (real or invented).";
  }
  countryError.className = "error active";
}

zipcode.addEventListener("input", function (event) {
  if (zipcode.validity.valid) {
    zipcodeError.textContent = "";
    zipcodeError.className = "error";
  } else {
    showZipCodeError();
  }
});

function showZipCodeError() {
  if (zipcode.validity.valueMissing) {
    zipCodeError.textContent = "You need to enter a zip code.";
  } else if (zipcode.validity.typeMismatch) {
    zipCodeError.textContent = "Entered value needs to be a number.";
  }
  zipCodeError.className = "error active";
}

password.addEventListener("input", function (event) {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showPasswordError();
  }
});

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.typeMismatch) {
    passwordError.textContent = "Entered value needs to be a password.";
  }
  passwordError.className = "error active";
}

pwConfirm.addEventListener("input", function (event) {
  if (pwConfirm.validity.valid) {
    pwConfirm.textContent = "";
    pwConfirm.className = "error";
  } else {
    showpwConfirmError();
  }
});

// .setCustomValidity("Passwords Don't Match")

function showpwConfirmError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.typeMismatch) {
    passwordError.textContent = "Entered value needs to be a password.";
  }
  passwordError.className = "error active";
}

form.addEventListener("submit", function (event) {
  //check if all are valid
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}
