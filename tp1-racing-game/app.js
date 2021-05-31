const canvas = document.getElementById("canvas");

const gameBoard = canvas.getContext("2d");

//Guardo el tamanio de cada linea que separa los carriles
sizeWidthDotted = 10;

sizeHeightDotted = 50;

const Street = {
  positionStreetX: 200,
  positionStreetY: 0,
};

drawStreet();
//Guardo las formas de separacion de carriles

function drawStreet() {
  let localStreet = {
    positionStreetX: Street.positionStreetX,
    positionStreetY: Street.positionStreetY,
  };
  while (localStreet.positionStreetY < 800) {
    gameBoard.fillRect(
      localStreet.positionStreetX,
      localStreet.positionStreetY,
      sizeWidthDotted,
      sizeHeightDotted
    );

    localStreet.positionStreetY += 100;
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
drawCar(CarPosition); // Esta llamada a drawCar no hace nada, se puede borrar

function drawCar(obj, color) {
  gameBoard.fillStyle = color;
  gameBoard.fillRect(obj.positionX, obj.positionY, sizeWidthCar, sizeHeightCar);
}

setInterval(main, 100);

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
      positionX: getRandomX(),
      positionY: getRandomY(),
    };
  }
  checkCarCollision();
}

function getRandomX() {
  //coloco los numero del 1 al 15
  console.log(Math.floor(Math.random() * 10) * 85); // Borrar console.log
  return Math.floor(Math.random() * (295 - 100)) + 100;
}

function getRandomY() {
  //coloco los numeros del 1 al 23
  return Math.floor(Math.random() * (590 - 200)) + 200;
}

function checkCarCollision() {
  // const topCollision = CarPosition.positionY < 0;
  // const leftCollision = CarPosition.positionX < 85;
  // const rightCollision = CarPosition.positionX > 300;

  //Se pierde cuando se sale del limite de las calles

  if (
    /*
      Ningun valor de la constante Street que estás construyendo arriba
      tiene el nombre de 'lineStreetRight' (o 'lineStreetLeft'), en todo caso
      debería ser 'positionStreetX'
    */
    CarPosition.positionX === Street.lineStreetRight ||
    CarPosition.positionX === Street.lineStreetLeft
  ) {
    alert("Game Over");
  }

  //Se pierde cuando chocan con el auto rival auto
  if (
    // usar triple igual siempre: ===
    CarPosition.positionX === CarRivalPosition.positionX &&
    CarPosition.positionY === CarRivalPosition.positionY
    /*
      La collision con el CarRival nunca está coincidiendo porque al movimiento del
      auto le estás sumando/restando de a 30, entonces nunca están coincidiendo los números
    */
  ) {
    alert("GAME OVER");
  }

  //Esta funcion la tuve que comentar porque no entiendo el por que me lupea... tampoco, logre que me tomara las collision
  // if (topCollision || leftCollision || rightCollision) {
  //   alert("Game Over");
  // } else {
  //   return console.log("siga siga");
  // }
}

function draw() {
  gameBoard.fillStyle = "grey";
  gameBoard.fillRect(0, 0, canvas.width, canvas.height);
  drawCar(CarPosition, "red");
  drawCar(CarRivalPosition, "black");
  lineStreetLeft(lineStreet);
  lineStreetRight(lineStreet);
  drawStreet();
}

//Creo la funcion que toma el evento de las teclas que estoy tocando
document.addEventListener("keydown", moveCarPosition);

function moveCarPosition(event) {
  switch (event.key) {
    case "ArrowUp":
      if (futureCarY == 0) {
        console.log("MoveUp"); // Borrar log
        futureCarX = 0;
        futureCarY += 30;
      }
      break;
    case "ArrowLeft":
      if (futureCarX == 0) {
        console.log("MoveLeft"); // Borrar log
        futureCarX -= 30;
        futureCarY = 0;
      }
      break;
    case "ArrowRight":
      if (futureCarX == 0) {
        console.log("MoveRight"); // Borrar log
        futureCarX += 30;
        futureCarY = 0;
      }
      break;
    default:
      console.log("Estas tocando otra tecla que no es una flecha");
  }
}
