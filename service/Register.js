import { Usuario } from "../model/User";
import { CuentaBancaria } from "../model/Account";
import { EstadoCuenta } from "../model/enums/EstadoCuenta";
import { TipoCuenta } from "../model/enums/TipoCuenta";

let listaUsers = [];
let cuentas= [];

function existeUsuario(correoIngresado){
    if(listaUsers.find((user) => user.correo === correoIngresado)===undefined){
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

    const usuario1= new Usuario(documento, correoIngresado, passwordIngresada, nombreIngresado, apellidoIngresado, telefonoIngresado);

    if(!existeUsuario(correoIngresado)){
        listaUsers.push(usuario1);
        //Cuando el cliente se registra, se le asigna una cuenta de débito ¿?
        //const cuenta= new CuentaBancaria(usuario1.telefono, TipoCuenta.Debito, 0, usuario1.documento, EstadoCuenta.Activa);
        //cuentas.push(cuenta);
        alert("Registro exitoso");
    }else{
        alert("Registro fallido. Usuario ya existente");
    }

});

