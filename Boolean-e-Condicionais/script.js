var possuiGraduacao = false;
var possuiDoutorado = true;
if (possuiGraduacao) {
  console.log("Possui graduação");
} else if (possuiDoutorado) {
  console.log("nao possui graduação");
} else {
  console.log("não possui graduação nem doutorado");
}

var nome = "joão"; //se não tiver valor, será undefined

if (nome) {
  console.log(nome);
} else {
  console.log("nome não existe");
}

if (!possuiGraduacao) {
  console.log("não possui doutorado");
}

var x = 10;

console.log(x === 10); //será true
console.log(x === 11); //será false

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// || compara se uma expressa ou outra é verdadeira

var condicional2 = 5 - 5 || (5 + 5 && 10 - 2);
console.log(condicional2);

var corFavorita = "Azul";
switch (corFavorita) {
  case "Azul":
    console.log("olhe para o céu");
    break;
  case "vermelho":
    console.log("olhe para rosas");
    break;
  case "verde":
    console.log("olhe para as árvores");
    break;
  default:
    console.log("feche os olhos");
}
