const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");
console.log(h1.innerHTML);
console.log(h1.outerHTML);

h1.innerHTML = "<p>Novo Título</p>";

// console.log(animaisLista.innerHTML);

const lista = document.querySelector(".animais-lista");

console.log(lista.parentElement.parentElement.parentElement);
console.log(lista.nextElementSibling);
