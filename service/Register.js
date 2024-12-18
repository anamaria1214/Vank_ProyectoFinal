import { Usuario } from "../model/User";

let listaUsers = [];

const documento = prompt("Ingrese su id:");
const correoIngresado = prompt("Ingrese su correo:");
const passwordIngresada = prompt("Ingrese su contraseña:");
const nombreIngresado = prompt("Ingrese su nombre:");
const apellidoIngresado = prompt("Ingrese su apellido:");
const direccionIngresado = prompt("Ingrese su dirección:");
const telefonoIngresado = prompt("Ingrese su teléfono:");

const usuario1= new Usuario(documento, correoIngresado, passwordIngresada, nombreIngresado, apellidoIngresado, direccionIngresado, telefonoIngresado);

function existeUsuario(correoIngresado){
    if(listaUsers.find((user) => user.correo === correoIngresado)===undefined){
        return false;
    }else{
        return true;
    }
}

if(!existeUsuario(correoIngresado)){
    listaUsers.push(usuario1);
    alert("Registro exitoso");
}else{
    alert("Registro fallido. Usuario ya existente");
}
