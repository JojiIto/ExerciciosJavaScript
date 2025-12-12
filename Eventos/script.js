// -----------------------------------------------
// Ativar links internos ao clicar
// -----------------------------------------------
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();

  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });

  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", handleLink);
});

console.log(linksInternos);

// -----------------------------------------------
// Selecionar todos os elementos a partir do body
// e remover elemento ao clicar
// -----------------------------------------------
const todosElementos = document.querySelectorAll("body *");

function handleElemento(event) {
  event.preventDefault();
  event.stopPropagation(); // impede que os pais também disparem
  event.currentTarget.remove(); // remove o elemento clicado
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
});

console.log(todosElementos);

// -----------------------------------------------
// Aumentar texto do site ao apertar tecla "t"
// -----------------------------------------------
function handleClickT(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);
