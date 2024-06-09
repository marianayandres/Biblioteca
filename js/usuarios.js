const usuario = document.querySelector("#user");
const password = document.querySelector("#password");
const acceder = document.querySelector("#acceder");
const credencialesIncorrectas = document.querySelector("#bad-credentials");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const login = () => {
  const usuarioValue = usuario.value;
  const passwordValue = password.value;

  const matchingCredential = usuarios.find((usuario) => {
    return usuario.user === usuarioValue && usuario.password === passwordValue;
  });

  if (matchingCredential) {
    // console.log("Credenciales encontradas:", matchingCredential);
    window.location.href = "../home.html";
  } else {
    credencialesIncorrectas.style.display = 'block';
    credencialesIncorrectas.textContent = "Credenciales no encontradas.";
    setTimeout(() => {
        credencialesIncorrectas.style.display = 'none';
    }, 4000);
    console.log("Credenciales no encontradas.");
  }
};

acceder.addEventListener("click", login);