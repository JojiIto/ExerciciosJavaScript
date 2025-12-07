var videoGame = ["Switch", "PS4", "XBOX"];

var ultimoItem = videoGame.pop(); //Remove o último item e retorn ele

for (var numero = 1; numero <= 4; numero++);
{
  console.log(numero);
}

// var i = 0;
// while (i <= 10) {
//   console.log(i);
//   i + i + 5;
// }

var videoGame = ["Switch", "PS4", "XBOX", "3DS"];

for (var item = 0; item < 4; item++) {
  console.log(videoGame[item]);
  if (videoGame[item] === "PS4") {
    break;
  }
}
var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];
frutas.forEach(function (fruta, index) {
  frutas.pop();
  console.log(fruta, index, frutas);
});
