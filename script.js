const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const zipcode = document.getElementById("zipcode");
const zipcodeError = document.querySelector("#zipcode + span.error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const pwConfirm = document.getElementById("pwConfirm");
const pwConfirmError = document.querySelector("#pwConfirm + span.error");

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
  } else if (country.validity.patternMismatch) {
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
    zipcodeError.textContent = "You need to enter a zip code.";
  } else if (zipcode.validity.patternMismatch) {
    zipcodeError.textContent = "Entered value needs to be a number.";
  } else if (zipcode.validity.tooShort) {
    zipcodeError.textContent = "Zipcode needs to be 5 numbers.";
  }
  zipcodeError.className = "error active";
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
  } else if (password.validity.tooShort) {
    passwordError.textContent = "Password needs include at least 6 characters.";
  }
  passwordError.className = "error active";
}

pwConfirm.addEventListener("input", function (event) {
  pwConfirm.setCustomValidity("");
  if (password.value !== pwConfirm.value) {
    pwConfirm.setCustomValidity("Passwords don't match.");
    showpwConfirmError();
  } else if (pwConfirm.validity.valid) {
    pwConfirmError.textContent = "";
    pwConfirmError.className = "error";
  } else {
    showpwConfirmError();
  }
});

function showpwConfirmError() {
  if (pwConfirm.validity.valueMissing) {
    pwConfirmError.textContent = "You need to enter a password.";
  } else if (pwConfirm.validity.tooShort) {
    pwConfirmError.textContent =
      "Password needs include at least 6 characters.";
  } else if (pwConfirm.validity.customError) {
    pwConfirmError.textContent = "Passwords don't match.";
  }
  pwConfirmError.className = "error active";
}

form.addEventListener("submit", validateForm);
function validateForm(e) {
  const form = e.target,
    field = Array.from(form.elements);
  field.forEach((i) => {
    if (i.checkValidity()) {
      i.parentElement.classList.remove("invalid");
    } else {
      i.parentElement.classList.add("invalid");
    }
  });
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }
}
