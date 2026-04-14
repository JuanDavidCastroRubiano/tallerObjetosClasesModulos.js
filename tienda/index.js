const { Usuario, UsuarioVIP } = require("./usuario");
const { Producto, ProductoDigital } = require("./producto");

const usuario1 = new Usuario("Ana", "ana@gmail.com");
const usuario2 = new Usuario("Carlos", "carlos@gmail.com", "admin");
const usuario3 = new UsuarioVIP("Luisa", "luisa@gmail.com", "Gold");

usuario2.desactivar();

const producto1 = new Producto("Camisa", 50000, "ropa");
const producto2 = new Producto("Zapatos", 80000, "calzado");
const producto3 = new ProductoDigital("Curso JS", 100000, "mensual");
const producto4 = new ProductoDigital("Ebook", 30000, "de por vida");

console.log("Precio con descuento:", producto1.aplicarDescuento(20));

console.log(producto1.tarjeta());
console.log(producto2.tarjeta());
console.log(producto3.tarjeta());
console.log(producto4.tarjeta());

console.log(usuario1.resumen());
console.log(usuario2.resumen());
console.log(usuario3.resumen());

console.log(usuario3.saludo());
console.log(usuario3.beneficios());