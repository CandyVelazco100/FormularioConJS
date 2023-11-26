function saludo(){
  window.alert("Mensaje de prueba");
}

function mostrarInformacion() {
  // Obtener referencias a los elementos del formulario
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  var zipcode = document.getElementById("zipcode").value;
  var country = document.getElementById("country").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var languages = document.querySelectorAll('input[name="leng"]:checked');
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var pwVerified = document.getElementById("pwVerified").value;
  var comments = document.getElementById("comments").value;

  // Construir un mensaje con la información del formulario
  var mensaje = "Información del formulario:\n\n" +
      "Nombre: " + name + "\n" +
      "Apellidos: " + lastName + "\n" +
      "Edad: " + age + "\n" +
      "Dirección: " + address + "\n" +
      "Código Postal: " + zipcode + "\n" +
      "País: " + country + "\n" +
      "Género: " + gender + "\n" +
      "Lenguajes Favoritos: " + obtenerLenguajesSeleccionados(languages) + "\n" +
      "Teléfono: " + phone + "\n" +
      "Correo Electrónico: " + email + "\n" +
      "Contraseña: " + password + "\n" +
      "Verificar Contraseña: " + pwVerified + "\n" +
      "Comentarios: " + comments;

  // Mostrar el mensaje en una alerta
  alert(mensaje);
}

function obtenerLenguajesSeleccionados(languages) {
  var selectedLanguages = [];
  for (var i = 0; i < languages.length; i++) {
      selectedLanguages.push(languages[i].value);
  }
  return selectedLanguages.join(", ");
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("theForm");
  const nameInput = document.getElementById("name");
  const lastNameInput = document.getElementById("lastName");
  const ageInput = document.getElementById("age");
  const zipcodeInput = document.getElementById("zipcode");
  const countrySelect = document.getElementById("country");
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const langInputs = document.querySelectorAll('input[name="leng"]');
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const pwVerifiedInput = document.getElementById("pwVerified");

  form.addEventListener("submit", function(event) {
    let valid = true;

    // Validación del nombre
    if (nameInput.value.trim() === "") {
      valid = false;
      document.getElementById("nameError").textContent = "El nombre es obligatorio.";
    } else {
      document.getElementById("nameError").textContent = "";
    }

    // Validación de los apellidos
    if (lastNameInput.value.trim() === "") {
      valid = false;
      document.getElementById("lastError").textContent = "Los apellidos son obligatorios.";
    } else {
      document.getElementById("lastError").textContent = "";
    }

    // Validación de la edad
    const age = parseInt(ageInput.value, 10);
    if (isNaN(age) || age < 1 || age > 120) {
      valid = false;
      document.getElementById("ageError").textContent = "La edad debe estar entre 1 y 120.";
    } else {
      document.getElementById("ageError").textContent = "";
    }

    // Validación del código postal
    const zipcode = zipcodeInput.value.trim();
    if (!/^\d{5}$/.test(zipcode)) {
      valid = false;
      document.getElementById("zipcodeError").textContent = "El código postal debe contener exactamente cinco dígitos numéricos.";
    } else {
      document.getElementById("zipcodeError").textContent = "";
    }

    // Validación del país
    if (countrySelect.value === "") {
      valid = false;
      document.getElementById("countryError").textContent = "Selecciona un país.";
    } else {
      document.getElementById("countryError").textContent = "";
    }

    // Validación del género
    let genderSelected = false;
    for (const genderInput of genderInputs) {
      if (genderInput.checked) {
        genderSelected = true;
        break;
      }
    }
    if (!genderSelected) {
      valid = false;
      document.getElementById("genderError").textContent = "Selecciona un género.";
    } else {
      document.getElementById("genderError").textContent = "";
    }

    // Validación del lenguaje favorito
    let langSelected = false;
    for (const langInput of langInputs) {
      if (langInput.checked) {
        langSelected = true;
        break;
      }
    }
    if (!langSelected) {
      valid = false;
      document.getElementById("lengError").textContent = "Selecciona al menos un lenguaje favorito.";
    } else {
      document.getElementById("lengError").textContent = "";
    }

    // Validación del teléfono
    const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (phoneNumber.length < 1 || !phonePattern.test(phoneInput.value)) {
      valid = false;
      document.getElementById("phoneError").textContent = "El teléfono es obligatorio.";
    } else {
      document.getElementById("phoneError").textContent = "";
    }

    // Validación del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
      valid = false;
      document.getElementById("emailError").textContent = "Ingresa un correo electrónico válido.";
    } else {
      document.getElementById("emailError").textContent = "";
    }

    // Validación de la contraseña
    if (passwordInput.value.length < 6 || passwordInput.value.length > 8) {
      valid = false;
      document.getElementById("passwordError").textContent = "La contraseña debe tener entre 6 y 8 caracteres.";
    } else {
      document.getElementById("passwordError").textContent = "";
    }

    // Validación de la verificación de contraseña
    if (passwordInput.value !== pwVerifiedInput.value) {
      valid = false;
      document.getElementById("pwVerifiedError").textContent = "Las contraseñas no coinciden.";
    } else {
      document.getElementById("pwVerifiedError").textContent = "";
    }

    if (!valid) {
      event.preventDefault(); // Evitar el envío del formulario si hay errores
    }

    if(valid){
      mostrarInformacion();
    }
  });
});

