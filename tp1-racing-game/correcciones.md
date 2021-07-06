- Falta el archivo `README.md` que explique brevemente el juego. `--Done`

- En `creditos.html` no hay manera de volver a `menuInicio.html`, falta un link. `--Done`

- `lineStreetLeft()` y `lineStreetRight()` podrían ser la misma función porque hacen exactamente lo mismo en su interior --Done

- La collision loopea porque la primer `CarPosition` es `{ positionX: 130, positionY: 660 }` y tu código dice `const leftCollision = CarPosition.positionX < 85`, 130 es mayor que 85. Cambiando ese signo a un `>` se arregla. `--Done`

Después necesitás hacer la función que resetee el juego al perder y vuelva a su estado inicial, si no se va a loopear la `alert("Game Over")`

- ¿Por qué no se puede mover para abajo? `--Done`

- No sé siente como un juego jugable, parece un prototipo sin terminar: No puedo perder, no puedo ganar, no tengo un objetivo claro ni un sistema de puntos.
  - No puedo aprobar un juego sin terminar 😔
