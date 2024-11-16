class Juego {
  constructor(cantidadCaminos) {
    this.cantidadCaminos = cantidadCaminos;
    this.caminos = [];
    this.obstaculos = [];
    this.monedas = [];
    this.crearCamino();
    this.crearPersonaje();
    this.crearEscenario();
    this.monedasRecolectadas = 0;
    this.juegoTerminado = false;
    this.gano = false;
    this.botonReiniciarTexto = "VOLVER A EMPEZAR";
    this.botonInicioTexto = "VOLVER AL INICIO";
    this.botonAncho = 0;
    this.botonAlto = 0;
    this.calcularDimensionesBotones();
  }

  dibujar() {
    if (this.juegoTerminado) {
      this.mostrarMensaje("¡Juego Terminado!", "ROJO");
      this.dibujarBotonesFin();
      return;
    }

    if (this.gano) {
      this.mostrarMensaje("¡Conseguiste 10 monedas, has ganado!", "VERDE");
      this.dibujarBotonesFin();
      return;
    }

    for (let camino of this.caminos) {
      camino.dibujar();
    }

    this.personaje.dibujar();

    for (let i = this.obstaculos.length - 1; i >= 0; i--) {
      this.obstaculos[i].dibujar();
      this.obstaculos[i].mover();
      if (this.obstaculos[i].estaColisionado(this.personaje)) {
        this.juegoTerminado = true;
      }
      if (this.obstaculos[i].fueraDePantalla()) {
        this.obstaculos.splice(i, 1);
      }
    }

    for (let i = this.monedas.length - 1; i >= 0; i--) {
      this.monedas[i].dibujar();
      this.monedas[i].mover();
      if (this.monedas[i].estaRecolectada(this.personaje)) {
        this.monedasRecolectadas++;
        this.monedas.splice(i, 1);
      } else if (this.monedas[i].fueraDePantalla()) {
        this.monedas.splice(i, 1);
      }
    }

    if (this.obstaculos.length === 0 && this.monedas.length === 0) {
      this.crearEscenario();
    }

    fill(0);
    textSize(20);
    text("Monedas: " + this.monedasRecolectadas, 70, 20);

    if (this.monedasRecolectadas >= 10) {
      this.gano = true;
    }
  }

  mostrarMensaje(texto, color) {
    fill(color === "ROJO" ? 255 : 0, color === "VERDE" ? 255 : 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(texto, width / 2, height / 2 - 50);
    fill(0); // Color negro para los créditos
    textSize(18);
    text("Créditos: Lautaro Maidana y Faustino Ugrina", width / 2, height / 2 + 10);
  }
calcularDimensionesBotones() {
    textSize(18);
    this.botonAncho = max(textWidth(this.botonReiniciarTexto), textWidth(this.botonInicioTexto)) + 20; 
    this.botonAlto = 18 + 20; 
    this.botonReiniciarX = width / 2 - this.botonAncho / 2;
    this.botonReiniciarY = height / 2 + 50;
    this.botonInicioY = this.botonReiniciarY + this.botonAlto + 10;
  }
 dibujarBotonesFin() {
    fill(0, 100, 200);
    rect(this.botonReiniciarX, this.botonReiniciarY, this.botonAncho, this.botonAlto, 10);
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.botonReiniciarTexto, width / 2, this.botonReiniciarY + this.botonAlto / 2);

    fill(100, 200, 100);
    rect(this.botonReiniciarX, this.botonInicioY, this.botonAncho, this.botonAlto, 10);
    fill(255);
    text(this.botonInicioTexto, width / 2, this.botonInicioY + this.botonAlto / 2);
  }

  chequearBotonesFin(mx, my) {
    if (
      mx > this.botonReiniciarX &&
      mx < this.botonReiniciarX + this.botonAncho &&
      my > this.botonReiniciarY &&
      my < this.botonReiniciarY + this.botonAlto
    ) {
      objJuego = new Juego(3);
    } else if (
      mx > this.botonReiniciarX &&
      mx < this.botonReiniciarX + this.botonAncho &&
      my > this.botonInicioY &&
      my < this.botonInicioY + this.botonAlto
    ) {
      pantallaInicio = new PantallaInicio(); 
      objJuego = null;
    }
  }


  crearCamino() {
    for (let i = 0; i < 3; i++) {
      this.caminos.push(new Camino(i * 213 + 106));
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(106 + 213, 400);
  }

  crearEscenario() {
    for (let i = 0; i < random(2, 4); i++) {
      let carril = int(random(3));
      let x = carril * 213 + 106;
      let y = random(-500, -50);
      this.obstaculos.push(new Obstaculo(x, y));
    }

    for (let i = 0; i < 3; i++) {
      let carril = int(random(3));
      let x = carril * 213 + 106;
      let y = random(-500, -50);
      this.monedas.push(new Moneda(x, y));
    }
  }

  teclaPresionada(keyCode) {
    if (!this.juegoTerminado && !this.gano) {
      this.personaje.teclaPresionada(keyCode);
    }
  }
}
