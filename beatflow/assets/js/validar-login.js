// Define regular expressions
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/;
const nameRegex = /^[a-zA-Z ]+$/;
const userRegex = /^[a-zA-Z0-9_-]{3,}$/;

// Define validation function
function validate(element, regex) {
  // Get the value of the field
  const value = element.value;

  // Validate the value
  return regex.test(value);
}

// Define login validation function
function validateLoginForm() {
  // Access form elements
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Check for empty fields
  if (email.value === "" || password.value === "") {
    alert("Por favor, complete todos los campos.");
    return false;
  }

  // Validate fields
  if (!validate(email, emailRegex)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false;
  }
  if (!validate(password, passwordRegex)) {
    alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un dígito.");
    return false;
  }

  // Return true if validations pass
  return true;
}

// Define register validation function
function validateRegisterForm() {
  // Access form elements
  const nameR = document.getElementById("nameR");
  const emailR = document.getElementById("emailR");
  const user = document.getElementById("user");
  const passwordR = document.getElementById("passwordR");

  // Check for empty fields
  if (nameR.value === "" || emailR.value === "" || user.value === "" || passwordR.value === "") {
    alert("Por favor, complete todos los campos.");
    return false;
  }

  // Validate fields
  if (!validate(emailR, emailRegex)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false;
  }
  if (!validate(passwordR, passwordRegex)) {
    alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un dígito.");
    return false;
  }
  if (!validate(nameR, nameRegex)) {
    alert("El nombre completo debe contener al menos un espacio.");
    return false;
  }
  if (!validate(user, userRegex)) {
    alert("El usuario debe tener al menos 3 caracteres.");
    return false;
  }

  // Return true if validations pass
  return true;
}

// Attach validation to forms
document.getElementById("form_login").onsubmit = validateLoginForm;
document.getElementById("form_register").onsubmit = validateRegisterForm;
