// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const precos = [49, 99, 69, 89];

// const dados = [
//   new String("Tipo 1"),
//   ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
//   function andar(nome) {
//     console.log(nome);
//   },
// ];

// const carros = new Array("Ford", "Fiat", "Honda");

// carros[2] = "Ferrari";
// carro[3] = "Kia";
// carro[20] = "Kia";

// console.log(carros.length);

// const li = document.querySelectorAll("li");

// const obk = {
//   0: "João",
//   1: "Guilherme",
//   2: "Teste",
// };

// const arrayLi = Array.from(li);

// console.log(li);
// console.log(arrayLi);

// const frutas = ["Banana", "pêra", ["Uva Roxa", "Uva Verde"]];

// console.log(frutas[2][0].length);

// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// instrumentos.sort();

// const idade = [32, 21, 33, 43, 1, 12, 8];
// idades.sort();

// console.log(instrumentos);
// console.log(idades);

// const carros = ["Ford", "Fiat", "VW"];
// carros.unshift("Kia", "Ferrari");
// const novaArray = carros.push("Parati", "Gol");

// console.log(carros);

// console.log(carros);
// console.log(carros.splice(2, 0, "Fusca"));

// console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].fill("banana", 0, 4));

const transporte1 = ["Barco", "Avião"];

const transporte2 = ["Bicicleta", "Carro"];

const transportes = transporte1.concat(transporte1);

console.log(transportes);

const linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.includes("python"); // 4
linguagens.includes("js"); // 2
linguagens.includes("js"); // 5

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
htmlString = htmlString.join("h1");

const cloneLinguagens = linguagens.slice();

console.log(linguagens.pop());
console.log(linguagens)
console.log(cloneLinguagens);
