class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal() {
        return this.precio * 1.19; // IVA
    }

    aplicarDescuento(porcentaje) {
        return this.precio - (this.precio * porcentaje / 100);
    }

    resumen() {
        return this.nombre + " - " + this.categoria + " - " + this.precio;
    }

    tarjeta() {
        return this.nombre + " - " + this.categoria + " - Total: " + this.calcularTotal();
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, licencia) {
        super(nombre, precio, "digital");
        this.licencia = licencia;
    }

    calcularTotal() {
        return this.precio;
    }

    tarjeta() {
        return this.nombre + " - Licencia: " + this.licencia + " - Precio: " + this.precio;
    }
}

module.exports = {
    Producto,
    ProductoDigital
};