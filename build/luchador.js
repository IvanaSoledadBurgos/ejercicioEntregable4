"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personaje_js_1 = require("./personaje.js");
class Luchador extends personaje_js_1.default {
    constructor(nombre = "Mauricio", nivel = 8, puntosDeVida = 80) {
        super(nombre, nivel, puntosDeVida);
        this.habilidadEspecial = "Algoritmo de ataque";
        this.arma = "Código fuente";
    }
    atacar(personaje) {
        console.log(`${this.nombre} ataca con ${this.habilidadEspecial} a ${personaje.nombre}.`);
        personaje.puntosDeVida -= 20;
    }
    mostrarInfoEspecifica() {
        console.log(`Arma: ${this.arma}`);
    }
}
exports.default = Luchador;
//# sourceMappingURL=luchador.js.map