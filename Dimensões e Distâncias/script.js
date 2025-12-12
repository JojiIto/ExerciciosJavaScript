const listaAnimais = document.querySelector(".animais-lista");

const heigh = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
const primeiroh2 = document.querySelector("h2");
const h2Left = primeiroh2.offsetLeft;
console.log(listaAnimais);
console.log(animaisTop);
console.log(heigh);
console.log(h2Left);

const rect = primeiroh2.getBoundingClientRect();

console.log(rect); 

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço
window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

const small = window.matchMedia("(max-width: 600px").matches;

if (small) {
  console.log("Usuário mobile");
} else {
  console.log('Usuário desk')
}
