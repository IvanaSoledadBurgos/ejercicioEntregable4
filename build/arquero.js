"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personaje_js_1 = require("./personaje.js");
class Arquero extends personaje_js_1.default {
    constructor(nombre = "Ivii", nivel = 12, puntosDeVida = 250) {
        super(nombre, nivel, puntosDeVida);
        this.habilidadEspecial = "Optimización de rendimiento";
        this.arma = "Arco de precisión";
    }
    atacar(personaje) {
        console.log(`${this.nombre} ataca con ${this.habilidadEspecial} a ${personaje.nombre}.`);
        personaje.puntosDeVida -= 70;
    }
    usarArma(arma) {
        console.log(`${this.nombre} usa el arma ${arma}.`);
    }
    mostrarInfoEspecifica() {
        console.log(`Arma: ${this.arma}`);
    }
}
exports.default = Arquero;
//# sourceMappingURL=arquero.js.map