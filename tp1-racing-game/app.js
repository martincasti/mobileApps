const canvas = document.getElementById("canvas");

const gameBoard = canvas.getContext("2d");

//Guardo el tamanio de cada linea que separa los carriles
sizeWidthDotted = 10;

sizeHeightDotted = 50;

const Street = {
  positionStreetX: 200,
  positionStreetY: 0,
};

drawStreet(Street);
//Guardo las formas de separacion de carriles

function drawStreet(obj) {
  while (obj.positionStreetY < 800) {
    gameBoard.fillRect(
      obj.positionStreetX,
      obj.positionStreetY,
      sizeWidthDotted,
      sizeHeightDotted
    );

    obj.positionStreetY += 100;
  }
}

//genero la linea continua que indica final de la calle
sizeWidthLine = 10;

sizeHeightLine = 800;

const lineStreet = {
  positionLeftLine: 85,
  positionRightLine: 330,
};

lineStreetLeft(lineStreet);
lineStreetRight(lineStreet);

function lineStreetRight(obj) {
  gameBoard.fillRect(obj.positionRightLine, 0, sizeWidthLine, sizeHeightLine);
}

function lineStreetLeft(obj) {
  gameBoard.fillRect(obj.positionLeftLine, 0, sizeWidthLine, sizeHeightLine);
}

//forma de los autos tanto player como IA
const sizeWidthCar = 40;

const sizeHeightCar = 80;

const CarPosition = {
  positionX: 130,
  positionY: 660,
};

//creamos la variable para generar el auto rival
let CarRivalPosition = null;

//generamos las variales de las posiciones futuras del auto del jugador
let futureCarX = 0;
let futureCarY = 0;

//Dibujamos el auto del jugador
drawCar(CarPosition);

function drawCar(obj) {
  gameBoard.fillRect(obj.positionX, obj.positionY, sizeWidthCar, sizeHeightCar);
}

setInterval(main, 1000);

//creo las funcion main(game loop)
function main() {
  update();
  draw();
}

//se crea la funcion update, que es la que va a updetear la posicion del auto en el eje Y
function update() {
  CarPosition.positionY -= futureCarY;
  CarPosition.positionX += futureCarX;

  //Generamos el auto de la IA
  if (!CarRivalPosition) {
    CarRivalPosition = {
      positionCarIaX: getRandomX(),
      positionCarIaY: getRandomY(),
    };
  }
}

function getRandomX() {
  //coloco los numero del 1 al 15
  return console.log(Math.floor(Math.random() * 10) * 30);
}

function getRandomY() {
  //coloco los numeros del 1 al 23
  return console.log(Math.floor(Math.random() * 23) * 30);
}

function draw() {
  gameBoard.clearRect(0, 0, canvas.width, canvas.height);
  drawCar(CarPosition);
  lineStreetLeft(lineStreet);
  lineStreetRight(lineStreet);
  drawStreet(Street);
}

//Creo la funcion que toma el evento de las teclas que estoy tocando
document.addEventListener("keydown", moveCarPosition);

function moveCarPosition(event) {
  switch (event.key) {
    case "ArrowUp":
      console.log("MoveUp");
      futureCarX = 0;
      futureCarY += 30;
      break;
    case "ArrowLeft":
      console.log("MoveLeft");
      futureCarX -= 30;
      futureCarY = 0;
      break;
    case "ArrowRight":
      console.log("MoveRight");
      futureCarX += 30;
      futureCarY = 0;
      break;
    default:
      console.log("Estas tocando otra tecla que no es una flecha");
  }
}
