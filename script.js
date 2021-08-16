const cardFacil = [
  {
    perguntaFacil: 'pergunta Facil 1',
    respostaFacil: 'resposta da pergunta 1'
  },
  {
    perguntaFacil: 'pergunta Facil 2',
    respostaFacil: 'resposta da pergunta 2'
  },
  {
    perguntaFacil: 'pergunta Facil 3',
    respostaFacil: 'resposta da pergunta 3'
  },
  {
    perguntaFacil: 'pergunta Facil 4',
    respostaFacil: 'resposta da pergunta 4'
  },
  {
    perguntaFacil: 'pergunta Facil 5',
    respostaFacil: 'resposta da pergunta 5'
  },
  {
    perguntaFacil: 'pergunta Facil 6',
    respostaFacil: 'resposta da pergunta 6'
  },

]

const cardMedio = [
  {
    perguntaMedio: 'pergunta Media 1',
    respostaMedio: 'resposta da pergunta 1'
  },
  {
    perguntaMedio: 'pergunta Media 2',
    respostaMedio: 'resposta da pergunta 2'
  },
  {
    perguntaMedio: 'pergunta Media 3',
    respostaMedio: 'resposta da pergunta 3'
  },
  {
    perguntaMedio: 'pergunta Media 4',
    respostaMedio: 'resposta da pergunta 4'
  },
  {
    perguntaMedio: 'pergunta Media 5',
    respostaMedio: 'resposta da pergunta 5'
  },
  {
    perguntaMedio: 'pergunta Media 6',
    respostaMedio: 'resposta da pergunta 6'
  },

]

const cardDificil = [
  {
    perguntaDificil: 'pergunta Difícil 1',
    respostaDificil: 'resposta da pergunta 1'
  },
  {
    perguntaDificil: 'pergunta Difícil 2',
    respostaDificil: 'resposta da pergunta 2'
  },
  {
    perguntaDificil: 'pergunta Difícil 3',
    respostaDificil: 'resposta da pergunta 3'
  },
  {
    perguntaDificil: 'pergunta Difícil 4',
    respostaDificil: 'resposta da pergunta 4'
  },
  {
    perguntaDificil: 'pergunta Difícil 5',
    respostaDificil: 'resposta da pergunta 5'
  },
  {
    perguntaDificil: 'pergunta Difícil 6',
    respostaDificil: 'resposta da pergunta 6'
  },

];

const arrayCards = [...cardDificil, ...cardMedio, ...cardFacil];

const card = document.querySelector('.text_card');

function cardRandon() {
  const number = arrayCards.length - 1
  const index = Math.floor(Math.random() * (number - 1 + 1)) + 1;
  const pergunta = Object.values(arrayCards[index])[0]
  card.innerHTML = pergunta
}

const link = document.querySelector('.link')
link.addEventListener('click', cardRandon)


// console.log(Object.values(arrayCards[3])[0])
// console.log(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
