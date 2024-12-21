import { Usuario } from "../model/User.js";

// Obtener la lista de usuarios guardados en el localStorage
function getListaUsuarios() {
    const lista = localStorage.getItem("usuarios");
    return lista ? JSON.parse(lista) : []; 
}

function saveListaUsuarios(lista) {
    localStorage.setItem("usuarios", JSON.stringify(lista));
}

let listaUsers = getListaUsuarios();

function existeUsuario(documentoIngresado, correoIngresado) {
    return listaUsers.some((user) => user.documento === documentoIngresado || user.correo === correoIngresado);
}

function contraseñasCoinciden(password, confirmarPassword) {
    return password === confirmarPassword;
}

const registroButton = document.getElementById("registro-button");

registroButton.addEventListener("click", (event) => {
    event.preventDefault(); 

    const documento = document.getElementById("documento").value;
    const correoIngresado = document.getElementById("correo").value;
    const passwordIngresada = document.getElementById("password").value;
    const nombreIngresado = document.getElementById("nombre").value;
    const apellidoIngresado = document.getElementById("apellido").value;
    const telefonoIngresado = document.getElementById("telefono").value;
    const confirmarPassword = document.getElementById("confirm-password").value;

    if (existeUsuario(documento, correoIngresado)) {
        alert("Registro fallido. Ya existe un usuario con ese documento o correo.");
        return; 
    }

    if (!contraseñasCoinciden(passwordIngresada, confirmarPassword)) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    const nuevoUsuario = new Usuario(documento, correoIngresado, passwordIngresada, nombreIngresado, apellidoIngresado, telefonoIngresado);
    
    listaUsers.push(nuevoUsuario);
    saveListaUsuarios(listaUsers);
    alert("Registro exitoso");
});
