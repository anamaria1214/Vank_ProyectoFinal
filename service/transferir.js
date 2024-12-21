import { Transferencia } from "../model/transfer";  
import { Usuario } from "../model/User";
import { CuentaBancaria } from "../model/Account";

let transferencias= []
let cuentas=[]

//Estos objetos se obtienen de la pagina
const usuario= new Usuario();
const cuenta= new CuentaBancaria();

const transferir = document.getElementById("transferir");

function obtenerCuenta(numCuenta) {
    return cuentas.some((cuenta) => cuenta.numeroCuenta === numCuenta);
}

transferir.addEventListener("click", (event) => {
    const cuentaTransferir= document.getElementById("numeroCuenta").value;

    const cuentaATransferir= obtenerCuenta(cuentaTransferir);
    const montoTransferir= document.getElementById("monto").value;
    const motivoTransferir= document.getElementById("motivo").value;

    const transferencia= new Transferencia(usuario.documento, cuentaTransferir, montoTransferir, motivoTransferir);

    cuenta.retirar(monto);
    cuentaATransferir.depositar(monto);
    transferencias.push(transferencia);

});
