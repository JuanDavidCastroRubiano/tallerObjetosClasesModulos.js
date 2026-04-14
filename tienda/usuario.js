class Usuario {

    constructor(nombre, email, rol = "cliente") {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }

    saludo() {
        return "Hola, soy " + this.nombre + " y soy " + this.rol;
    }

    desactivar() {
        this.activo = false;
        return "Usuario desactivado";
    }

    resumen() {
        let estado = this.activo ? "Activo" : "Inactivo";
        return this.nombre + " - " + this.email + " - " + this.rol + " - " + estado;
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia) {
        super(nombre, email, "cliente VIP");
        this.membresia = membresia;
    }

    saludo() {
        return "Hola, soy " + this.nombre + " y soy VIP con membresía " + this.membresia;
    }

    beneficios() {
        return "Tienes beneficios del plan " + this.membresia;
    }
}

module.exports = {
    Usuario,
    UsuarioVIP
};