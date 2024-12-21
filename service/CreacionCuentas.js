import { CuentaBancaria } from '../model/Account.js'


function generarNumeroCuenta() {
    return Math.floor(1000000 + Math.random() * 9000000).toString();
}

function obtenerDocumentoUsuario() {
    const usuario = JSON.parse(localStorage.getItem("usuarioActual"));
    return usuario?.documento || null;
}

function guardarCuentaEnLocalStorage(cuenta) {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || []; 
    cuentas.push(cuenta); 
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

document.getElementById("form-cuenta").addEventListener("submit", (event) => {
    event.preventDefault();

    const tipoCuenta = document.getElementById("tipoCuenta").value;
    const saldoInicial = parseFloat(document.getElementById("saldoInicial").value);
    const documentoUsuario = obtenerDocumentoUsuario();

    if (!documentoUsuario) {
        alert("Error: No se encontró el usuario actual.");
        return;
    }

    const nuevaCuenta = new CuentaBancaria(
        generarNumeroCuenta(),
        tipoCuenta,            
        saldoInicial,          
        documentoUsuario,      
        "Activa"               
    );

    guardarCuentaEnLocalStorage(nuevaCuenta);

    alert(`Cuenta creada exitosamente.\nNúmero de cuenta: ${nuevaCuenta.numeroCuenta}`);

    event.target.reset();
});
