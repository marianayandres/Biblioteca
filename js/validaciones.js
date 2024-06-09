function ValidateName(){

    var elemento = document.getElementById('nombre');
    var valor = elemento.value;
    var expRegular = /^[A-Za-z]+(\s[A-Za-z]+)*$/;

    if(valor !== '' && expRegular.test(valor)){
        // elemento.style.backgroundColor = 'white';
        elemento.className = '';
    }

    else{
        // elemento.style.backgroundColor = 'red';
        elemento.className = 'error';
    }
}

function ValidateLastname(){
    var elemento = document.getElementById('apellido');
    var valor = elemento.value;
    var expRegular = /^[A-Za-z]+(\s[A-Za-z]+)*$/;

    if(valor !== '' && expRegular.test(valor)){
        // elemento.style.backgroundColor = 'white';
        elemento.className = '';
    }

    else{
        // elemento.style.backgroundColor = 'red';
        elemento.className = 'error';
    }
}

function ValidateDocument(){

    var elemento = document.getElementById('cedula');
    var valor = elemento.value;
    var expRegular = /^\d{6,11}$/;

    /* Si elemento no esta vacio */
    if(valor !== '' && expRegular.test(valor)){
        // elemento.style.backgroundColor = 'white';
        elemento.className = '';
    }

    else{
        // elemento.style.backgroundColor = 'red';
        elemento.className = 'error';
    }
}

function ValidateCode(){

    var elemento = document.getElementById('codigoEmpleado');
    var valor = elemento.value;
    var expRegular = /^4\d{4}$/;

    /* Si elemento no esta vacio */
    if(valor !== '' && expRegular.test(valor)){
        // elemento.style.backgroundColor = 'white';
        elemento.className = '';
    }

    else{
        // elemento.style.backgroundColor = 'red';
        elemento.className = 'error';
    }
}

function ValidateUsuary(){

    var elemento = document.getElementById('usuario');
    var valor = elemento.value;
    var expRegular = /^[a-zA-Z0-9]{3,}$/;

    /* Si elemento no esta vacio */
    if(valor !== '' && expRegular.test(valor)){
        // elemento.style.backgroundColor = 'white';
        elemento.className = '';
    }

    else{
        // elemento.style.backgroundColor = 'red';
        elemento.className = 'error';
    }
}

function ValidatePassword(){

    
    var elemento = document.getElementById('contraseña');
    var valor = elemento.value;
    var expRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*$?])[A-Za-z\d*$?]{5,8}$/;
  
    /* Si elemento no esta vacio */
    if(valor !== '' && expRegular.test(valor)){
        // elemento.style.backgroundColor = 'white';
        elemento.className = '';
    }

    else{
        // elemento.style.backgroundColor = 'red';
        elemento.className = 'error';
    }
}

// Obtén una referencia al botón
const botonGuardar = document.getElementById('botonGuardar');

// Agrega un evento de clic al botón
botonGuardar.addEventListener('click', function() {
  // Obtén los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const codigoEmpleado = document.getElementById('codigoEmpleado').value;
  const correoElectronico = document.getElementById('correoElectronico').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('contraseña').value;

  // Crea un objeto con los datos
  const datosRegistro = {
    nombre,
    apellido,
    codigoEmpleado,
    correoElectronico,
    fechaNacimiento,
    usuario,
    contraseña
  };

  // Convierte el objeto a formato JSON
  const datosJSON = JSON.stringify(datosRegistro);

  // Guarda los datos en el almacenamiento local
  localStorage.setItem('datosRegistro', datosJSON);
 
  // Muestra un mensaje de éxito
  alert('Los datos se han guardado correctamente.');
});





