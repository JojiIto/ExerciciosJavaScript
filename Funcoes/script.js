function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); //16
console.log(areaQuadrado(4)); //25
console.log(areaQuadrado(2)); //4
function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(pi());
// peso e altura são os parâmetros
function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.7)); // 60 e 1.70 são os argumentos

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}
console.log(corFavorita("")); // retorna 'Você não gosta de nada'
console.log(corFavorita("verde")); // retorna 'Você gosta de mato'
console.log(corFavorita("azul")); // retorna 'Você gosta do céu'
//
function TerceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") return "Por favor preencha um número";
  else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(TerceiraIdade(60));
//
function faltaVisitar(paisesVisitados) {
  var TotalPaíses = 193;
  return `Faltam visita ${TotalPaíses - paisesVisitados} países`;
}
console.log(faltaVisitar);
//
var profissao = "Designer";
function dados() {
  var nome = "joão";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return "${nome}, ${idade}, ${endreco}, ${profissao}";
  }
  return outrosDados();
}

console.log(dados()); //Retorna 'joão'
