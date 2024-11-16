class PantallaInicio {
  constructor() {
    this.activa = true;
    this.botonTexto = "EMPEZAR";
    this.calcularDimensionesBoton();
  }

  calcularDimensionesBoton() {
    textSize(18);
    this.botonAncho = textWidth(this.botonTexto) + 20; 
    this.botonAlto = 18 + 20; 
    this.botonX = width / 2 - this.botonAncho / 2;
    this.botonY = height / 2 + 50;
  }

  dibujar() {
    fill(0);
    textAlign(CENTER, CENTER);
    

    textSize(24);
    text("Recoge 10 monedas y gana el juego", width / 2, height / 2 - 100);


    textSize(16);
    text("Intenta recoger 10 monedas sin chocar", width / 2, height / 2 - 60);

   
    text("Utiliza las flechas del teclado para moverte entre carriles", width / 2, height / 2 - 40);

  
    fill(0, 200, 0);
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto, 10);

    fill(255);
    textSize(18);
    text(this.botonTexto, width / 2, this.botonY + this.botonAlto / 2);
  }

  chequearBoton(mx, my) {
    if (
      mx > this.botonX &&
      mx < this.botonX + this.botonAncho &&
      my > this.botonY &&
      my < this.botonY + this.botonAlto
    ) {
      this.activa = false;
    }
  }
}
