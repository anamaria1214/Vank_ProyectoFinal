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
      localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));

      handleLoginSuccess(usuarioEncontrado);
    } else {
      showError("Contraseña incorrecta. Inténtelo de nuevo.");
    }
  } else {
    showError("Correo no registrado. Inténtelo de nuevo.");
  }
});

function handleLoginSuccess(usuario) {
  const welcomeMessage = document.createElement("div");
  welcomeMessage.textContent = `¡Bienvenido, ${usuario.nombre} ${usuario.apellido}!`;
  welcomeMessage.style.position = "fixed";
  welcomeMessage.style.top = "20px";
  welcomeMessage.style.left = "50%";
  welcomeMessage.style.transform = "translateX(-50%)";
  welcomeMessage.style.backgroundColor = "#4caf50";
  welcomeMessage.style.color = "white";
  welcomeMessage.style.padding = "10px 20px";
  welcomeMessage.style.borderRadius = "5px";
  welcomeMessage.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
  welcomeMessage.style.zIndex = "1000";

  document.body.appendChild(welcomeMessage);

  setTimeout(() => {
    welcomeMessage.remove();
    window.location.href = "./principal.html"; 
  }, 2000); 
}

function showError(message) {
  const errorMessage = document.createElement("div");
  errorMessage.textContent = message;
  errorMessage.style.position = "fixed";
  errorMessage.style.top = "20px";
  errorMessage.style.left = "50%";
  errorMessage.style.transform = "translateX(-50%)";
  errorMessage.style.backgroundColor = "#f44336";
  errorMessage.style.color = "white";
  errorMessage.style.padding = "10px 20px";
  errorMessage.style.borderRadius = "5px";
  errorMessage.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
  errorMessage.style.zIndex = "1000";

  document.body.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, 2000);
}
