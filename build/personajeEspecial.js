"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personaje_js_1 = require("./personaje.js");
class PersonajeEspecial extends personaje_js_1.default {
    constructor(nombre = "Vivi", nivel = 10, puntosDeVida = 150) {
        super(nombre, nivel, puntosDeVida);
        this.habilidadEspecial = "Transformación en API";
        this.habilidad = "Transformación";
    }
    atacar(personaje) {
        console.log(`${this.nombre} ataca con ${this.habilidadEspecial} a ${personaje.nombre}.`);
        personaje.puntosDeVida -= 50;
    }
    usarHabilidad(habilidad) {
        console.log(`${this.nombre} usa la habilidad ${habilidad}.`);
    }
    mostrarInfoEspecifica() {
        console.log(`Habilidad: ${this.habilidad}`);
    }
}
exports.default = PersonajeEspecial;
//# sourceMappingURL=personajeEspecial.js.map