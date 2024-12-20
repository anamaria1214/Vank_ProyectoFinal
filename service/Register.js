import { Usuario } from "../model/User";

let listaUsers = [];

function existeUsuario(correoIngresado){ 
    if(listaUsers.find((user) => user.correo === correoIngresado)===undefined || listaUsers.find((user) => user.documento)===undefined){
        return false;
    }else{
        return true;
    }
}

const registroButton = document.getElementById("registro-button");
registroButton.addEventListener("click", (event) => {

    const documento = document.getElementById("documento").value;
    const correoIngresado = document.getElementById("correo").value;
    const passwordIngresada = document.getElementById("password").value;
    const nombreIngresado = document.getElementById("nombre").value;
    const apellidoIngresado = document.getElementById("apellido").value;
    const telefonoIngresado = document.getElementById("telefono").value;

    const confirmarPassword = document.getElementById("confirm-password").value;

    const usuario1= new Usuario(documento, correoIngresado, passwordIngresada, nombreIngresado, apellidoIngresado, telefonoIngresado);

    if(!existeUsuario(correoIngresado)){
        if(confirmarPassword===passwordIngresada){
            listaUsers.push(usuario1);
            alert("Registro exitoso");
        }else{
            alert("Las contraseñas no coinciden");
        }
    }else{
        alert("Registro fallido. Usuario ya existente");
    }

});

