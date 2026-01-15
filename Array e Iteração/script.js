// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   array[index] = "Teste";
//   console.log(item, index, array);
// });

// // console.log(carros);

// const li = document.querySelectorAll("li");

// const retornoForeach = li.forEach((item, index) => item.classList.add("ativa" + index));

const carros = ["Ford", "Fiat", "Honda"];

const novaArray = carros.map((item, index, array) => {
  return item.toUpperCase;
});

const numeors = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((n) => n * 2);

console.log(novaArray);
console.log(carros);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);
// [15, 10, 20, 25];

const puxarNomes = (aula) => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']
