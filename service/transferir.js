import { Transferencia } from "../model/Transfer.js";  
import { Usuario } from "../model/User.js";
import { CuentaBancaria } from "../model/Account.js";

let transferencias = [];
let cuentas = [];

const usuario = new Usuario();
const cuenta = new CuentaBancaria();

function obtenerCuentasDesdeLocalStorage() {
    return JSON.parse(localStorage.getItem("cuentas")) || [];
}

function obtenerCuentaPorNumero(numCuenta) {
    return cuentas.find(cuenta => cuenta.numeroCuenta === numCuenta);
}

const transferirButton = document.getElementById("transferir");

transferirButton.addEventListener("click", (event) => {
    event.preventDefault(); 

    const cuentaDestinoNumero = document.getElementById("numeroCuenta").value;
    const montoTransferir = parseFloat(document.getElementById("monto").value);
    const motivoTransferir = document.getElementById("motivo").value;

    cuentas = obtenerCuentasDesdeLocalStorage();

    const cuentaData = JSON.parse(localStorage.getItem("cuentaActual"));
    const cuentaActual = new CuentaBancaria(
        cuentaData.numeroCuenta,
        cuentaData.tipoCuenta,
        cuentaData.saldo,
        cuentaData.documentoUsuario,
        cuentaData.estado
    );

    const cuentaDestino = obtenerCuentaPorNumero(cuentaDestinoNumero);

    if (!cuentaDestino) {
        alert("La cuenta de destino no existe.");
        return;
    }

    const cuentaDestinoData = JSON.parse(localStorage.getItem("cuentas")).find(cuenta => cuenta.numeroCuenta === cuentaDestinoNumero);
    const cuentaDestinoObj = new CuentaBancaria(
        cuentaDestinoData.numeroCuenta,
        cuentaDestinoData.tipoCuenta,
        cuentaDestinoData.saldo,
        cuentaDestinoData.documentoUsuario,
        cuentaDestinoData.estado
    );

    if (cuentaActual.saldo < montoTransferir) {
        alert("Saldo insuficiente en la cuenta actual.");
        return;
    }

    cuentaActual.retirar(montoTransferir);
    cuentaDestinoObj.depositar(montoTransferir);

    const transferencia = new Transferencia(usuario.documento, cuentaDestinoNumero, montoTransferir, motivoTransferir);
    transferencias.push(transferencia);

    localStorage.setItem("cuentaActual", JSON.stringify(cuentaActual));

    const cuentasActualizadas = cuentas.map(cuenta => {
        if (cuenta.numeroCuenta === cuentaActual.numeroCuenta) {
            return cuentaActual;
        }
        if (cuenta.numeroCuenta === cuentaDestinoObj.numeroCuenta) {
            return cuentaDestinoObj;
        }
        return cuenta;
    });

    localStorage.setItem("cuentas", JSON.stringify(cuentasActualizadas));

    alert("Transferencia realizada con éxito.");
});
