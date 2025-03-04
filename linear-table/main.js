// let scores = new Array(90,70,50,80,60,85);

// for(let i = 0; i < scores.length; i++) {
//   document.write(scores[i] + ",");
// }

// let scoresTemp = new Array(90,70,50,80,60,85, 75);

// for(let i = 0; i < scoresTemp.length; i++) {
//   document.write(scoresTemp[i] + ",");
// }

// Primer arreglo
let scores = [90, 70, 50, 80, 60, 85];
document.getElementById("scores-container").innerHTML = scores.join(", ");

// Segundo arreglo
let scoresTemp = [90, 70, 50, 80, 60, 85, 75];
document.getElementById("scores-temp-container").innerHTML = scoresTemp.join(", ");
