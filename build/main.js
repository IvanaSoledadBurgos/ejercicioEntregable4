"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mago_js_1 = require("./mago.js");
const luchador_js_1 = require("./luchador.js");
const arquero_js_1 = require("./arquero.js");
const personajeEspecial_js_1 = require("./personajeEspecial.js");
const karen = new mago_js_1.default("Karen", 10, 120);
const mauricio = new luchador_js_1.default("Mauricio", 8, 80);
const ivii = new arquero_js_1.default("Ivii", 12, 250);
const vivi = new personajeEspecial_js_1.default("Vivi", 10, 150);
// Simulación de batalla
karen.atacar();
mauricio.defender();
ivii.atacar(mauricio);
vivi.atacar(karen);
// Aprender nuevo ataque
const nuevoAtaque = { nombre: "Python", daño: 20 };
karen.aprenderAtaque(nuevoAtaque);
// Mostrar información de los personajes
console.log("Información de los personajes:");
karen.mostrarInfo();
mauricio.mostrarInfo();
ivii.mostrarInfo();
vivi.mostrarInfo();
// Verificar puntos de vida
const personajes = [karen, mauricio, ivii, vivi];
const ganador = personajes.reduce((max, actual) => {
    return actual.puntosDeVida > max.puntosDeVida ? actual : max;
}, personajes[0]);
// Mostrar resultado
console.log("\nResultado final:");
console.log(`¡El ganador es ${ganador.nombre} con ${ganador.puntosDeVida} puntos de vida!`);
console.log(`Felicitaciones, ${ganador.nombre} ha ganado el juego.`);
// Ejecutar habilidades especiales
console.log("\nHabilidades especiales:");
karen.utilizarHabilidadEspecial("Truco de programación");
mauricio.atacar(ivii);
ivii.usarArma("Arco de precisión");
vivi.usarHabilidad("Transformación");
// Mostrar información específica de cada personaje
console.log("\nInformación específica de cada personaje:");
karen.mostrarInfoEspecifica();
mauricio.mostrarInfoEspecifica();
ivii.mostrarInfoEspecifica();
vivi.mostrarInfoEspecifica();
//# sourceMappingURL=main.js.map