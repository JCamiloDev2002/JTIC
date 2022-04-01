function sendMail(params){
    var tempParams = {
        cliente: document.getElementById("nombre").value,
       
        mensaje: document.getElementById("mensaje").value,
        servicio: document.getElementById("servicio").value,
        fecha_rese: document.getElementById("fecha_rese").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
        npersonas: document.getElementById("npersonas").value,
        hora: document.getElementById("hora").value,
    };
    
    emailjs.send("service_eatizmh","template_tvcz3ks",tempParams)
    .then(function(res){
        console.log("success",res.status);
    })
}
function sendMail1(params){
  var tempParams = {
      cliente: document.getElementById("nombre").value,
      mensaje: document.getElementById("mensaje").value,
      //productos: document.getElementById("productos").value,
      fecha_rese: document.getElementById("fecha_rese").value,
      correo: document.getElementById("correo").value,
      telefono: document.getElementById("telefono").value,
      direccion: document.getElementById("direccion").value,
      
  };
  
  emailjs.send("service_eatizmh","template_tvcz3ks",tempParams)
  .then(function(res){
      console.log("success",res.status);
  })
}

// Hay muchas formas de elegir un nodo DOM; aquí obtenemos el formulario y, a continuación, el campo de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.
/*const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('correo');
const emailError = document.querySelector('#correo + span.error');

email.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (email.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

  if(!email.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    showError();
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else if(email.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
  }

  // Establece el estilo apropiado
  emailError.className = 'error activo';
}*/