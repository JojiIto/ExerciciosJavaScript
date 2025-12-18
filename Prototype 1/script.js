function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "Abraçou";
  };
}
var obj = {
  nome: "Nadre",
  idade: 33,
};
Pessoa.prototype.andar = function () {
  return this.nome + "Pessoa andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + "Pessoa nadou";
};

const andre = new Pessoa("Andre", 20);

// console.log(Pessoa.prototype);
// console.log(andre.prototype);

const pais = "Brasil";
const cidade = new String("Rio");
