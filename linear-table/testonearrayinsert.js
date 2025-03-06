function insert(array, score, indertIndex) {
  let tempArray = new Array(array.length + 1)

  for(let i = 0; i < array.length; i++) {
    if(i < indertIndex) {
      tempArray[i] = array[i]
    } else {
      tempArray[i+1] = array[i]
    }
  }

  tempArray[indertIndex] = score
  return tempArray
}

// Test
let scores = new Array(90,70,50,80, 60, 85)

scores = insert(scores, 75, 2)

for(var i = 0; i < scores.length; i++) {
  document.write(scores[i] + ",")
}