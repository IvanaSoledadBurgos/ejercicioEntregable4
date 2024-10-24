import Personaje from './personaje.js';

class Arquero extends Personaje {
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

export default Arquero;

