class Moneda {
  constructor(posX, posY) {
    this.posY = posY;
    this.posX = posX;
    this.ancho = 50;  
    this.alto = 50;   
  }

  dibujar() {
   
    image(monedaImg, this.posX - this.ancho / 2, this.posY - this.alto / 2, this.ancho, this.alto);
  }

  mover() {
    this.posY += 3; 
  }

 estaRecolectada(personaje) {
  let distancia = dist(this.posX, this.posY, personaje.posX, personaje.posY); 
  if (distancia < this.ancho / 2 + 25) { 
    monedaSonido.play(); 
    return true; 
  }
  return false;
}

  fueraDePantalla() {
    return this.posY > height; 
  }
}
