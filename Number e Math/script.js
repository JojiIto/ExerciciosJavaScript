console.log(Number.isNaN(NaN));
console.log(Number.isInteger(112.12312));

console.log(parseFloat("   30303030.343"));
console.log(parseFloat(" 10000 reais"));
console.log(parseInt("300 reais", 10));
console.log(parseInt(23.49, 10));

const preco = 10.23232;
console.log(preco.toFixed());

let valor = 48.29;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

console.log(valor);
console.log(Math.PI);

const aleatorio = Math.floor(Math.random() * 100);

console.log(aleatorio)
