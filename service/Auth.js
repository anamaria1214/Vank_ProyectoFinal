function getListaUsuarios() {
  const lista = localStorage.getItem("usuarios");
  return lista ? JSON.parse(lista) : [];
}

let listaUsers = getListaUsuarios();

const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", (event) => {
  event.preventDefault();

  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  const usuarioEncontrado = listaUsers.find((user) => user.correo === emailInput);

  if (usuarioEncontrado) {
    if (usuarioEncontrado.contrasena === passwordInput) { 
        alert(`¡Bienvenido! Hola, ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`);
        
    } else {
        alert("Error: Contraseña incorrecta. Inténtelo de nuevo.");
    }
  } else {
    alert("Error: Correo no registrado. Inténtelo de nuevo.");
  }
});
