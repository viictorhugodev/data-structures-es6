function append(array, value) {
  // Crear una nueva matriz, length = scores.length +
  let tempArray = new Array(array.length + 1)

  for(let i = 0; i < array.length; i++) { // Copiando el valor de la matriz a tempArray
    tempArray[i] = array[i]
  }

  tempArray[array.length] = value // Añadiendo el nuevo valor al final de tempArray
  return tempArray // Devolviendo la nueva matriz
}

// Test
let scores = new Array(90,70,50,80, 60, 85)

scores = append(scores, 75)

for(var i = 0; i < scores.length; i++) {
  document.write(scores[i] + ",")
}

