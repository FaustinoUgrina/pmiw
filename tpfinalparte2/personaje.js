class Personaje {
  constructor(posX, posY) {
    this.posY = posY;
    this.posX = posX;
    this.ancho = 50; 
    this.alto = 75; 
  }

  dibujar() {
   
    image(personajeImg, this.posX - this.ancho / 2, this.posY - this.alto / 2, this.ancho, this.alto);
  }

  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    }
  }

  moverDerecha() {
    if (this.posX < 532) {
      this.posX += 213;
    }
  }

  moverIzquierda() {
    if (this.posX > 106) {
      this.posX -= 213;
    }
  }
}
