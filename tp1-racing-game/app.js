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

function lineStreetdraw(obj) {
  gameBoard.fillRect(obj.positionLeftLine, 0, sizeWidthLine, sizeHeightLine);
  gameBoard.fillRect(obj.positionRightLine, 0, sizeWidthLine, sizeHeightLine);
}

//forma de los autos tanto player como IA
const sizeWidthCar = 40;

const sizeHeightCar = 80;

const CarPosition = {
  positionX: 130,
  positionY: 660,
};

//generamos las variales de las posiciones futuras del auto del jugador
let futureCarX = 0;
let futureCarY = 0;

function drawCar(obj, color) {
  gameBoard.fillStyle = color;
  gameBoard.fillRect(obj.positionX, obj.positionY, sizeWidthCar, sizeHeightCar);
}
//creamos la variable para generar el auto rival
let CarRivalPosition = null;

//Dibujamos el auto del jugador

setInterval(main, 100);

//creo las funcion main(game loop)
function main() {
  update();
  draw();
}

//se crea la funcion update, que es la que va a updetear la posicion del auto en el eje Y
function update() {
  //genero la c
  const isGameOver = checkCarCollision();
  if (isGameOver) {
    gameOver();
    return;
  }
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
  return Math.floor(Math.random() * (295 - 100)) + 100;
}

function getRandomY() {
  //coloco los numeros del 1 al 23
  return Math.floor(Math.random() * (590 - 200)) + 200;
}

function checkCarCollision() {
  const topCollision = CarPosition.positionY < -80;
  const leftCollision = CarPosition.positionX > 290;
  const rightCollision = CarPosition.positionX < 100;

  //Se pierde cuando se sale del limite de las calles

  if (leftCollision || rightCollision || topCollision) {
    console.log("aca choca paredes");

    return true;
  }

  //Se pierde cuando chocan con el auto rival auto
  //if (
  // usar triple igual siempre: ===
  // CarRivalPosition.positionX === CarPosition.positionX &&
  //CarRivalPosition.positionY === CarPosition.positionY
  /*
      La collision con el CarRival nunca está coincidiendo porque al movimiento del
      auto le estás sumando/restando de a 10, entonces nunca están coincidiendo los números
    */
  // ) {
  // console.log("choca auto");
  //return true;
  //}
  return false;
}

function gameOver() {
  alert("Perdiste");
  //reiniciamos valores
  CarPosition.positionX = 130;
  CarPosition.positionY = 660;
  futureCarX = 0;
  futureCarY = 0;
}

function draw() {
  gameBoard.fillStyle = "grey";
  gameBoard.fillRect(0, 0, canvas.width, canvas.height);
  drawCar(CarPosition, "red");
  drawCar(CarRivalPosition, "black");
  lineStreetdraw(lineStreet);
  drawStreet();
}

//Creo la funcion que toma el evento de las teclas que estoy tocando
document.addEventListener("keydown", moveCarPosition);

function moveCarPosition(event) {
  switch (event.key) {
    case "ArrowUp":
      if (futureCarY == 0) {
        futureCarX = 0;
        futureCarY += 10;
      }
      break;
    case "ArrowDown":
      if (futureCarY == 0) {
        futureCarX = 0;
        futureCarY -= 10;
      }
      break;
    case "ArrowLeft":
      if (futureCarX == 0) {
        futureCarX -= 10;
        futureCarY = 0;
      }
      break;
    case "ArrowRight":
      if (futureCarX == 0) {
        futureCarX += 10;
        futureCarY = 0;
      }
      break;
    default:
      console.log("Estas tocando otra tecla que no es una flecha");
  }
}
