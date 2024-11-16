function inicializar() {
  estado = 0;
  
  //Textos y botones
  //2 botones
  textos[0]="Un auto rojo brillante llegó rugiendo. 'Soy Rayo McQueen', dijo con una sonrisa confiada, \nsabiendo que estaba hecho para la velocidad. El mundo lo esperaba, y él estaba listo para \nser una leyenda.";
  botonA[0]="Siguiente";
  botonB[0]="Creditos";
  //2 botones
  textos[1] ="Rayo McQueen se detuvo en la carretera. Podía seguir hacia la gran carrera \no regresar a Radiador Springs con sus nuevos amigos. \nLa elección no era fácil: fama y gloria, o el hogar que nunca imaginó encontrar.";
  botonA[1]= "Seguir por la carretera";
  botonB[1]="Regresar a Radiador";

  textos[2]="Rayo McQueen miró hacia Radiador Springs, pero esta vez no frenó. \nAceleró rumbo a la gran carrera, dejando atrás el pequeño pueblo. \nSu decisión estaba tomada: la velocidad lo llamaba.";
  botonA[2]="Siguiente";
  
  textos[3]="Rayo McQueen volaba por la carretera, el viento silbando a su alrededor y el asfalto \ndeslizándose bajo sus ruedas. Cada curva la tomaba con precisión, disfrutando de la \nvelocidad y el camino interminable frente a él. Solo él y la carretera, en perfecta armonía.";
  botonA[3]= "Siguiente";
  
  textos[4]="Rayo McQueen llegó al circuito con el motor rugiendo, pero demasiado tarde. \nLos jueces ya habían cerrado la inscripción. Descalificado, \nvio cómo las luces del estadio se encendían para los demás. \nEsta vez, la carrera seguiría sin él.";
  botonB[4]="Creditos";
  
  textos[5]="Rayo McQueen llegó a Radiador Springs a toda velocidad, pero su orgullo no le duró mucho. \nEl sheriff lo detuvo, y antes de darse cuenta, estaba frente al juez. Como castigo, le ordenaron \nhacer servicio comunitario: reparar el viejo camino del pueblo. No era lo que esperaba, pero \nno había escapatoria.";
  botonA[5]="Siguiente";
  // 2 botones
  textos[6]="Rayo McQueen se encontraba en una encrucijada. Podía seguir \nsiendo el mismo corredor egocéntrico, solo preocupado por la victoria,\n o dejar atrás ese orgullo y aprender a valorar a los demás. Una decisión \ndifícil: seguir corriendo solo o descubrir el verdadero \nsignificado de la amistad.";
  botonA[6]="seguir corriendo solo";
  botonB[6]="Aprender";
  
  textos[7]="Rayo McQueen llegó a la carrera con su motor rugiendo y los fans vitoreando. Confiado y listo \npara demostrar su velocidad, tomó su posición en la línea de salida, sintiendo la adrenalina \nen el aire. ¡Era su momento de brillar!";
  botonA[7]="Siguiente";
  
  textos[8]="Rayo McQueen cruzó la meta en segundo lugar, frustrado por no ganar. \nSin embargo, al mirar a su alrededor, vio a sus amigos animándolo. \nEn ese instante, comprendió que la verdadera victoria estaba en la amistad \nque había encontrado en el camino.";
  botonB[8]="Creditos";
  
  textos[9]="A pesar de las lecciones aprendidas en Radiador Springs, Rayo McQueen siguió siendo el \nmismo de siempre. Su ego lo guiaba en cada carrera, ignorando a sus amigos y el verdadero \nsignificado de la competencia. Para él, solo importaba cruzar la meta primero.";
  botonA[9]="Siguiente";
  
  textos[10]="Rayo McQueen llegó a la carrera solo, sin sus amigos a su lado. El rugido de los motores \nllenaba el aire, pero la emoción se sentía vacía. A pesar de estar en la línea de salida, el brillo \nde la victoria no era tan deslumbrante sin el apoyo de quienes realmente importaban.";
  botonA[10]="Siguiente";
  
  textos[11]="Rayo McQueen cruzó la meta en último lugar, su corazón pesado por la derrota. Sin amigos \nque lo animaran, la frustración lo envolvió. En ese momento, comprendió que la victoria era \nvacía sin quienes lo apoyaran en el camino.";
  botonB[11]="Creditos";
}
function dibujaBoton(txt, x, y, w, h ) {

  push();
  radio=20;
  noStroke();
  rectMode(CENTER);
  // efecto rolover:
  if ( colisionBoton( x, y, w, h ) ) {
    fill(50);
  } else {
    fill(255, 204, 0);
  }
  
  rect(x, y, w, h,radio);
  //texto:
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}
function colisionBoton( x, y, w, h ) {
  
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}
function pantallaInicio() {
  push();
    image(imagenes[0], 0, 0, width, height);
    stroke(30);
   fill(140,1,5);
 rectMode(CENTER);
  rect(width/2, height/6,620,70,radio);
  fill(255);
  textAlign(CENTER);
  textSize(15);
  text(textos[0], width/2, height/7);
   pop();
 
   textSize(20);
  dibujaBoton(botonA[0], width/2, height*0.75, 200, 40);
  dibujaBoton(botonB[0], width/2, height*0.75+60, 200, 40);

 
}
function pantallaCreditos() {
  push();
  background (140,1,5);;
  fill(255);
  textAlign(CENTER);
  textSize(30);
  stroke(0, 0, 0);  
  strokeWeight(3); 
  text("Lautaro Maidana \nUgrina Faustino", width/2, height/2);
  textSize(20);
  dibujaBoton("VOLVER", width/2, height*0.75+60, 200, 40);
  pop();
}
function pantallaHistoriaDosBotones(txt_pantalla, txt_btn_A, txt_btn_B, img) {
  push()
  fill(255);
  textAlign(CENTER);
  textSize(17);
  stroke(0, 0, 0);  
  strokeWeight(3);  
  
  if (img) {
    image(img,0,0, width,height);  
  }
  
  text(txt_pantalla, width / 2, height / 7);
  // Dibuja los botones
  dibujaBoton(txt_btn_A, width / 2 - 200, height * 0.75 + 60, 200, 40);
  dibujaBoton(txt_btn_B, width / 2 + 200, height * 0.75 + 60, 200, 40);
  
  pop();
}
function pantallaHistoriaUnBotonA(txt_pantalla, txt_btn_A, img) {
  push();
  background(255, 0, 0);
  if (img) {
    image(img, 0,0, width,height);  
  }
    
  fill(255);
  textAlign(CENTER);
  textSize(15);
    stroke(0, 0, 0);  
  strokeWeight(3);  
  text(txt_pantalla, width / 2, height /7);

    pop();

   textSize(20);  
  dibujaBoton(txt_btn_A, width / 2 - 200, height * 0.75 + 60, 200, 40);
  
}
function pantallaHistoriaUnBotonB(txt_pantalla, txt_btn_B, img) {
  push();
  background(255, 0, 0);
 
  fill(255);
  fill(255);
  textAlign(CENTER);
  textSize(15);
    stroke(0, 0, 0);  
  strokeWeight(3);  
 
  if (img) {
    image(img, 0,0, width,height);  
  }
  text(txt_pantalla, width / 2, height / 7);
    pop();

   textSize(20);
  dibujaBoton(txt_btn_B, width / 2 + 200, height * 0.75 + 60, 200, 40);
  function botonDeSonido(){
   
  }
  
}
