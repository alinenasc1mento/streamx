let posicaoAtual = 0;
const filmesContainer = document.querySelector(".film-container");
const filmes = document.querySelectorAll(".film");
const larguraFilme = filmes[0].offsetWidth + 20; // Adicionei 20px de margem entre os filmes
const limiteEsquerda = 0;
const limiteDireita = (filmes.length - 3) * larguraFilme * -1;

function moverFilmes(direcao) {
  posicaoAtual += direcao * larguraFilme;
  if (posicaoAtual > limiteEsquerda) {
    posicaoAtual = limiteEsquerda;
  } else if (posicaoAtual < limiteDireita) {
    posicaoAtual = limiteDireita;
  }

  filmesContainer.style.transform = `translateX(${posicaoAtual}px)`;
}
