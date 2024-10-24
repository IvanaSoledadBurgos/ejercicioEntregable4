import Personaje from './src/personaje.js';

class PersonajeEspecial extends Personaje {
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

export default PersonajeEspecial;





