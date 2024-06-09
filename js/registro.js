const guardarUsuario = document.querySelector("#botonGuardar");
const formulario = document.querySelector("#formularioRegistro");
const yaExiste = document.querySelector("#ya-existe");

const agregarUsuario = () => {
    const usuario = document.querySelector("#usuario").value;
    const contrasena = document.querySelector("#contraseña").value;
    console.log(usuario, contrasena);
  // 1. Obtener el arreglo de usuarios actual (o crearlo si es vacío)
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // 2. Verificar si el usuario ya existe
  const usuarioExistente = usuarios.find((u) => u.user === usuario);

  console.log(usuarioExistente);

  if (usuarioExistente) {
    yaExiste.style.display = 'block';
    yaExiste.textContent = "El usuario ya se encuentra registrado.";
    setTimeout(() => {
        yaExiste.style.display = 'none';
    }, 4000);
    console.error("Error: El usuario ya existe.");
    return;
  }

  // 3. Crear el nuevo objeto usuario
  const nuevoUsuario = {
    user: usuario,
    password: contrasena,
  };

  console.log(nuevoUsuario);

  // 4. Agregar el nuevo usuario al arreglo
  usuarios.push(nuevoUsuario);

  // 5. Actualizar Local Storage con el arreglo actualizado
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  console.log("Usuario agregado correctamente.");
}

guardarUsuario.addEventListener('click', agregarUsuario);

document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    event.preventDefault();
})