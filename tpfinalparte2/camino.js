class Camino {
  constructor(posX) {
    this.posX = posX;
    this.miColor = color(150, 150, 150);
    this.lineas = [];  
    this.crearLineas();
  }

 
  crearLineas() {
    for (let i = 0; i < 4; i++) {
      this.lineas.push({
        posY: i * 120 - 60,  
        ancho: 5,  
        largo: 40  
      });
    }
  }


  dibujar() {
    fill(this.miColor);
    rect(this.posX - 106, 0, 213, height); 

    
    for (let i = 0; i < this.lineas.length; i++) {
      let linea = this.lineas[i];
      fill(255);  

    
      rect(this.posX - 106 + (213 / 2) - (linea.ancho / 2), linea.posY, linea.ancho, linea.largo);
      
     
      linea.posY += 10;  

    
      if (linea.posY > height) {
        linea.posY = -linea.largo;
      }
    }
  }
}
