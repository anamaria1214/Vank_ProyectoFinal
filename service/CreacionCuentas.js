import { CuentaBancaria } from "../model/Account";
import { EstadoCuenta } from "../model/enums/EstadoCuenta";
import { Usuario } from "../model/User";

let cuentas= [];
const usuario= new Usuario();

function generarNumeroCuenta() {
    const numeroCuenta = Math.floor(10000000 + Math.random() * 90000000);
    return numeroCuenta.toString();
}

const crearCuentaButtton= document.getElementById("crear-cuenta");

crearCuentaButtton.addEventListener("click", (event) => {
    const tipoCuenta= document.getElementById("tipoCuenta").value;
    const cuentaBancaria= new CuentaBancaria(generarNumeroCuenta(), tipoCuenta, 0, usuario.documento ,EstadoCuenta.Activa);
    cuentas.push(cuentaBancaria); 
    });