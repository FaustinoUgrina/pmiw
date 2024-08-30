//Faustino Ugrina 
//comision 3
//profesor Damian Bedovian 
//https://youtu.be/xZ5BCuuHR9U
let maxDistToCenter;
let randomColor = "#FFFFFF";
let randomColorBg = "#000000";
let randomAutomatico = false;
let posicionX;
let posicionY;
let tiempoPantalla = 1000; // 1 segundo
let tiempoInicioPantalla = 0;
let imagen;

function preload() {
    imagen = loadImage("data/tp3imagen.png");
}

function setup() {
    createCanvas(800, 400);
    posicionX = (width + 400) / 2 + 400;
    posicionY = height / 2;
    maxDistToCenter = dist(0, 0, posicionX, posicionY);
}

function draw() {
    background(randomColorBg);
    image(imagen, 0, 0, 400, 400);
    translate(400, 0);
    for (let i = 0; i <= width; i += 1) {
        for (let j = 0; j <= height; j += 0.5) {
            maxDistToCenter = dist(i, j, posicionX, posicionY);
            let resto = maxDistToCenter % 50;
            if (resto == 0) {
                let nivel = maxDistToCenter / 25;
                if (nivel < 1) {
                    nivel = 1;
                }
                if (nivel > 10) {
                    nivel = 10;
                }
                ellipse(i, j, 5 * nivel, 5 * nivel);
                fill(randomColor);
                smooth();
            }
        }
    }
    if (millis() - tiempoInicioPantalla >= tiempoPantalla && randomAutomatico) {
        algoParaHacer();
    }
}
function mouseMoved() {
    posicionX = mouseX;
    posicionY = mouseY;
}
function keyPressed() {
    // En caso de que la tecla presionada sea ENTER, elige un color random.
    if (key == "r" || key == "R") {
        let red = random(0, 255);
        let green = random(0, 255);
        let blue = random(0, 255);
        randomColor = color(red, green, blue);
    } // En caso de que la tecla presionada sea BACKSPACE, elige un color random para el background.
    if (key == "e" || key == "E") {
        let red = random(0, 255);
        let green = random(0, 255);
        let blue = random(0, 255);
        randomColorBg = color(red, green, blue);
    } // En caso de que la tecla presionada sea SPACE, comienza el coloreado automatico.
    if (key == " ") {
        randomAutomatico = !randomAutomatico;
    } // En caso de que la tecla presionada sea SPACE, finaliza el coloreado automatico y resetea el color.
    if (key == "q" || key == "Q") {
        reset();
    }
}
function algoParaHacer() {
    tiempoInicioPantalla = millis();
    randomColor = GetRandomColor(false);
    randomColorBg = GetRandomColor(true);
}
function GetRandomColor(isBackground) {
    let min = 0;
    let max = 255;
    if (isBackground) {
        max = 127;
    } else {
        min = 127;
    }
    let red = random(min, max);
    let green = random(min, max);
    let blue = random(min, max);
    return color(red, green, blue);
}
function reset() {
    posicionX = width / 2;
    posicionY = height / 2;
    randomAutomatico = false;
    randomColor = color("#FFFFFF");
    randomColorBg = color(0);
}
