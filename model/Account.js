
export class CuentaBancaria {
    constructor(numeroCuenta, tipoCuenta, saldo, documentoUsuario, estado) {
      this.numeroCuenta = numeroCuenta;  
      this.tipoCuenta = tipoCuenta;      
      this.saldo = saldo;                
      this.documentoUsuario = documentoUsuario;
      this.estado = estado;              
    }
  
    depositar(monto) {
      if (monto > 0) {
        this.saldo += monto;
        console.log(`Depósito de ${monto} realizado. Nuevo saldo: ${this.saldo}`);
      } else {
        console.log("Monto inválido para depósito.");
      }
    }
  
    retirar(monto) {
      if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        console.log(`Retiro de ${monto} realizado. Nuevo saldo: ${this.saldo}`);
      } else {
        console.log("Monto inválido para retiro o saldo insuficiente.");
      }
    }
  
  }