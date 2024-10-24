"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personaje_js_1 = require("./personaje.js");
class Mago extends personaje_js_1.default {
    constructor(nombre = "Karen", nivel = 10, puntosDeVida = 120) {
        super(nombre, nivel, puntosDeVida);
        this.habilidadEspecial = "Inyección de código";
        this.magia = "Magia de programación";
    }
    utilizarHabilidadEspecial(truco) {
        console.log(`${this.nombre} usa el truco ${truco} para ayudar a sus alumnos.`);
    }
    mostrarInfoEspecifica() {
        console.log(`Magia: ${this.magia}`);
    }
}
exports.default = Mago;
//# sourceMappingURL=mago.js.map