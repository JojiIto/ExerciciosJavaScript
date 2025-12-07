"use strict";

var carro = "Fusca";
function mostrarCarro() {
  console.log(carro);
}
mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if (false) {
  var mes = "Dezembro";
  console.log(mes);
}
console.log(mes);

var i = 50;
// for (let i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }
// console.log(i * 10);

console.log(i * 10);
const semena = "Sexta";
console.log(semena);

const data = {
  ano: 2003,
  mes: "Dezembro",
};
data.ano = 2019;
data.dia = 25;
