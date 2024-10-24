import Mago from './mago.js';
import Luchador from './luchador.js';
import Arquero from './arquero.js';
import PersonajeEspecial from '../personajeEspecial.js';

const karen = new Mago("Karen", 10, 120);
const mauricio = new Luchador("Mauricio", 8, 80);
const ivii = new Arquero("Ivii", 12, 250);
const vivi = new PersonajeEspecial("Vivi", 10, 150);

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

