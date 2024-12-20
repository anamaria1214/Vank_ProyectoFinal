import { Transferencia } from "../model/transfer";  
import { Usuario } from "../model/User";

let transferencias= []

const usuario= new Usuario();

const transferir = document.getElementById("transferir");

transferir.addEventListener("click", (event) => {
    const cuentaTransferir= document.getElementById("numeroCuenta").value;
    const montoTransferir= document.getElementById("monto").value;
    const motivoTransferir= document.getElementById("motivo").value;

    const transferencia= new Transferencia(usuario.documento, cuentaTransferir, montoTransferir, motivoTransferir);

    transferencias.push(transferencia);

});
