import Personaje from './personaje.js';

class Mago extends Personaje {
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

export default Mago;


