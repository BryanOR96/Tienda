document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  
  // Obtener los valores del formulario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Realizar validaciones o procesar los datos enviados
  // Aquí puedes agregar tu lógica personalizada
  
  // Ejemplo de mostrar los datos ingresados en la consola
  console.log("Nombre: " + name);
  console.log("Correo electrónico: " + email);
  console.log("Contraseña: " + password);
  
  // Restablecer el formulario
  document.getElementById("registration-form").reset();
});



