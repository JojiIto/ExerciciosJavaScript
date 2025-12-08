// Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemAnimais = document.querySelectorAll('img[src^="/img/imagem"]');
console.log(imagemAnimais);
// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animais-descricao");
console.log(h2Animais);
// Selecione o último p do site

const todospagrafos = document.querySelector("p");
console.log(todospagrafos[todospagrafos.length]);

const ultimopagrafo = document.querySelector(".copy");
console.log(ultimopagrafo);
