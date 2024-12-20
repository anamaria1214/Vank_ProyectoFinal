import { Usuario } from "../model/User.js";
// import { CuentaBancaria } from "../model/Account";
// import { EstadoCuenta } from "../model/enums/EstadoCuenta";
// import { TipoCuenta } from "../model/enums/TipoCuenta";

function getListaUsuarios() {
    const lista = localStorage.getItem("usuarios");
    return lista ? JSON.parse(lista) : []; 
}

function saveListaUsuarios(lista) {
    localStorage.setItem("usuarios", JSON.stringify(lista));
}

let listaUsers = getListaUsuarios();

function existeUsuario(correoIngresado) {
    return listaUsers.some((user) => user.correo === correoIngresado) || listaUsers.find((user) => user.documento)===undefined;
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

    const usuario1= new Usuario(documento, correoIngresado, passwordIngresada, nombreIngresado, apellidoIngresado, telefonoIngresado);

    if(!existeUsuario(correoIngresado)){
        if(confirmarPassword===passwordIngresada){
            listaUsers.push(usuario1);
            alert("Registro exitoso");
        }else{
            alert("Las contraseñas no coinciden");
        }
    }else{
        const usuario1 = new Usuario(
            documento,
            correoIngresado,
            passwordIngresada,
            nombreIngresado,
            apellidoIngresado,
            telefonoIngresado
        );

        if (!existeUsuario(correoIngresado)) {
            listaUsers.push(usuario1); 
            saveListaUsuarios(listaUsers); 
            console.log("Usuarios actualizados:", listaUsers);
            alert("Registro exitoso");
        } else {
            alert("Registro fallido. Usuario ya existente");
        }
        
    }
});
