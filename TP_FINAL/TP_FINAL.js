//Comision 3 
//Lautaro Maidana 
//Faustino Ugirna Natale
//https://youtu.be/76haqW_Xz6k  

let estado;
let textos = [];
let botonA = [];
let botonB = [];
let imagenes = [];
let radio // Array para almacenar las imágenes
let sonido;
let cancion;

function preload() {
  cancion = loadSound('data/cancion.mp3');
  sonido = loadSound('data/sonido.mp3');
  for (let i = 0; i < 12; i++) {  // Para cargar hasta 12 imágenes
    imagenes[i] = loadImage(`data/imagen${i}.jpg`);  // Cargar imágenes "imagen0.jpg", "imagen1.jpg", etc.
  }
}

function setup() {
  createCanvas(640, 480);
  cancion.setVolume(0.3);
  cancion.loop();
  inicializar();
}

function draw() {
  if (estado === 0) {
    pantallaInicio();
  } else if ( estado === 12) {
    pantallaCreditos();
  }
   else if (  estado===1 || estado===6 ) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado],imagenes[estado] );
  }else if ( estado===2|| estado===3 ||  estado===5 || estado===7 ||  estado===9 || estado===10  ) {
    pantallaHistoriaUnBotonA(textos[estado], botonA[estado],imagenes[estado]);
  }else if (  estado===4 || estado===8||  estado===11 ) {
    pantallaHistoriaUnBotonB(textos[estado], botonB[estado],imagenes[estado]);
  }
}
function mousePressed() {
  if (estado === 0) {
    if ( colisionBoton(width/2, height*0.75, 200, 40) ) { //EMPEZAR
      sonido.play();
      estado=1;
    } else if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //CREDITOS
       sonido.play();
      estado=12;
    }
  }else if ( estado === 12 ) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //CREDITOS
       sonido.play();
      estado=0;
    }
 }else if ( estado===1 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
       sonido.play();
      estado=2;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
     sonido.play();
      estado=5;
    }
 }else if ( estado===2 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
       sonido.play();
      estado=3;
 }
 }else if ( estado===3 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      sonido.play();
      estado=4;
 }
 }else if ( estado===4 ) {
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      sonido.play();
      estado=12;
 }
 }else if ( estado===3 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      sonido.play();
      estado=5;
 }
}else if ( estado===5 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
       sonido.play();
      estado=6;
}
}else if ( estado===6 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
     sonido.play();
      estado=9;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
  sonido.play();
      estado=7;
    }
}else if ( estado===9 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      sonido.play();
      estado=10;
}
}else if ( estado===10 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      sonido.play();
      estado=11;
}
}else if ( estado===11 ) {
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
       sonido.play();
      estado=12;
}
}else if ( estado===7 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
     sonido.play();
      estado=8;
}
}else if ( estado===8 ) {
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      sonido.play();
      estado=12;
}
}
}
