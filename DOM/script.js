window.alert("aaaaaaaaaaaaaaaaa");

const href = window.location.href;

console.log(href);

if (href === "http://127.0.0.1:5500/DOM/") {
  console.log("É igual");
}

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;

function callbackh1() {
  console.log("Clicou em", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1);

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

