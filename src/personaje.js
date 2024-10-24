class Personaje {
  constructor(nombre, nivel, puntosDeVida) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.puntosDeVida = puntosDeVida;
    this.habilidades = [];
  }

  atacar() {
    console.log(`${this.nombre} está atacando.`);
  }

  defender() {
    console.log(`${this.nombre} está defendiendo.`);
  }

  aprenderAtaque(ataque) {
    this.habilidades.push(ataque);
    console.log(`${this.nombre} ha aprendido el ataque ${ataque.nombre}.`);
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Nivel: ${this.nivel}`);
    console.log(`Puntos de vida: ${this.puntosDeVida}`);
    console.log(`Habilidades: ${this.habilidades.map(habilidad => habilidad.nombre).join(', ')}`);
  }
}

export default Personaje;

