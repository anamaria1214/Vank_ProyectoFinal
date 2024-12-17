import { Usuario } from "../model/User";

let listaUsers = [];

const usuario1 = new Usuario(
    '12345678',
    'usuario@example.com',
    'password123',
    'Juan',
    'Perez',
    'Calle 123, Ciudad',
    '3145386174',
);

const usuario2 = new Usuario(
    '43587324',
    'usuario2@example.com',
    'password1234',
    'Juancho',
    'Pereira',
    'Calle 5, Ciudad',
    '3015517609',
);

listaUsers.push(usuario1);
listaUsers.push(usuario2);

const correoIngresado = prompt("Ingrese su correo:");
const passwordIngresada = prompt("Ingrese su contraseña:");

const usuarioEncontrado = listaUsers.find((user) => user.correo === correoIngresado);

if (usuarioEncontrado) {
  if (usuarioEncontrado.contrasena === passwordIngresada) {
    alert(`¡Bienvenido, ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}!`);
    console.log("Login exitoso");
  } else {
    alert("Contraseña incorrecta. Inténtelo de nuevo.");
    console.log("Login fallido por contraseña");
  }
} else {
  alert("Correo no registrado. Inténtelo de nuevo.");
  console.log("Login fallido por correo");
}
