let cardFacil = [
  {
    pergunta: 'pergunta Facil 1',
    resposta: 'resposta da pergunta 1'
  },
  {
    pergunta: 'pergunta Facil 2',
    resposta: 'resposta da pergunta 2'
  },
  {
    pergunta: 'pergunta Facil 3',
    resposta: 'resposta da pergunta 3'
  },
  {
    pergunta: 'pergunta Facil 4',
    resposta: 'resposta da pergunta 4'
  },
  {
    pergunta: 'pergunta Facil 5',
    resposta: 'resposta da pergunta 5'
  },
  {
    pergunta: 'pergunta Facil 6',
    resposta: 'resposta da pergunta 6'
  },

]

let cardMedio = [
  {
    pergunta: 'pergunta Media 1',
    resposta: 'resposta da pergunta 1'
  },
  {
    pergunta: 'pergunta Media 2',
    resposta: 'resposta da pergunta 2'
  },
  {
    pergunta: 'pergunta Media 3',
    resposta: 'resposta da pergunta 3'
  },
  {
    pergunta: 'pergunta Media 4',
    resposta: 'resposta da pergunta 4'
  },
  {
    pergunta: 'pergunta Media 5',
    resposta: 'resposta da pergunta 5'
  },
  {
    pergunta: 'pergunta Media 6',
    resposta: 'resposta da pergunta 6'
  },

]

let cardDificil = [
  {
    pergunta: 'pergunta Difícil 1',
    resposta: 'resposta da pergunta 1'
  },
  {
    pergunta: 'pergunta Difícil 2',
    resposta: 'resposta da pergunta 2'
  },
  {
    pergunta: 'pergunta Difícil 3',
    resposta: 'resposta da pergunta 3'
  },
  {
    pergunta: 'pergunta Difícil 4',
    resposta: 'resposta da pergunta 4'
  },
  {
    pergunta: 'pergunta Difícil 5',
    resposta: 'resposta da pergunta 5'
  },
  {
    pergunta: 'pergunta Difícil 6',
    resposta: 'resposta da pergunta 6'
  },

];

let cardsNovos = []

let arrayCards = [...cardsNovos, ...cardDificil, ...cardMedio, ...cardFacil];
const card = document.querySelector('.card');
let objeto = [];
const buttons = document.querySelector('.button-collection');
const facil = document.querySelector('.btn-facil');
const medio = document.querySelector('.btn-medio');
const dificil = document.querySelector('.btn-dificil');
const objSalvo = document.querySelector('.objeto');
const perguntaINPUT = document.querySelector('.perguntaCard');
const respostaINPUT = document.querySelector('.respostaCard');
const contador = document.querySelector('.contadorDeCards')
const linkVirarCart = document.querySelector('#link')


function carragaLocalStorage() {
  if (!(!localStorage.getItem('nov'))) {
    let temp = JSON.parse(localStorage.getItem('nov'));
    cardsNovos = temp;
  }
  if (!(!localStorage.getItem('dif'))) {
    let temp = JSON.parse(localStorage.getItem('dif'));
    cardDificil = temp;
  }
  if (!(!localStorage.getItem('med'))) {
    let temp = JSON.parse(localStorage.getItem('med'));
    cardMedio = temp;
  }
  if (!(!localStorage.getItem('fac'))) {
    let temp = JSON.parse(localStorage.getItem('fac'));
    cardFacil = temp;
  }
  
  arrayCards = [...cardsNovos, ...cardDificil, ...cardMedio, ...cardFacil];
  
  return arrayCards;
}

arrayCards = carragaLocalStorage();

// pensar se essa eh a melhor maneira
function saveArray(nov, dif, med, fac) {
  let tempNov = JSON.stringify(nov);
  localStorage.setItem('nov', tempNov);
  let tempDif = JSON.stringify(dif);
  localStorage.setItem('dif', tempDif);
  let tempMed = JSON.stringify(med);
  localStorage.setItem('med', tempMed);
  let tempFac = JSON.stringify(fac);
  localStorage.setItem('fac', tempFac);
  return
}

function contadorCards() {
  contador.innerHTML = arrayCards.length
}

function retornaObjeto (obj) {
  objeto.push(obj);
  return objeto[0];
}

function passarCard() {
  const obj = arrayCards[0];
  const pergunta = Object.values(obj)[0];
  card.innerHTML = pergunta;
  retornaObjeto(obj);
  linkVirarCart.style.display= 'flex'
}

buttons.addEventListener('click', passarCard);

function virarCard() {
  const obj = arrayCards[0];
  const resposta = Object.values(obj)[1];
  card.innerHTML = resposta;
  linkVirarCart.style.display= 'none'
}

linkVirarCart.addEventListener('click', virarCard)


// pensar em refatorar => array.splice(array.indexOF(obj),1)
function buscarEApagarCard(array) {
  let cardTemp = retornaObjeto();
  let index = array.reduce((acc, val, indx) => {
    if (val === cardTemp) {
      acc = indx;
    }
    return acc;
  }, undefined);
  if (index !== undefined) array.splice(index, 1);
}

// função grande e confusa, refatorar
function mudaCardDeArray(array) {
  let cardTemp = retornaObjeto();
  buscarEApagarCard(cardsNovos)
  buscarEApagarCard(cardFacil);
  buscarEApagarCard(cardMedio);
  buscarEApagarCard(cardDificil);
  objeto = [];
  array.push(cardTemp);
  arrayCards = [...cardsNovos, ...cardDificil, ...cardMedio, ...cardFacil];
  saveArray(cardsNovos, cardDificil, cardMedio, cardFacil)
  passarCard() 
}

const buttonFacil = () => {
  mudaCardDeArray(cardFacil);
};

const buttonMedio = () => {
  mudaCardDeArray(cardMedio);
};

const buttonDificil = () => {
  mudaCardDeArray(cardDificil);
};

facil.addEventListener('click', buttonFacil);
medio.addEventListener('click', buttonMedio);
dificil.addEventListener('click', buttonDificil);

function checkInput() {
  if (perguntaINPUT.value === ''
     || respostaINPUT.value === '') {
    perguntaINPUT.value = ''
    respostaINPUT.value = ''    
  } else {
    criaCard()
  }
}

// refatorar!!!
function criaCard() {
  let obj = {
    pergunta: perguntaINPUT.value,
    resposta: respostaINPUT.value,
  };
  cardsNovos.splice(0, 0, obj);
  arrayCards = [...cardsNovos, ...cardDificil, ...cardMedio, ...cardFacil];
  console.log(arrayCards);
  saveArray(cardsNovos, cardDificil, cardMedio, cardFacil);
  objeto = []
  passarCard()
  perguntaINPUT.value = ''
  respostaINPUT.value = ''
  contadorCards()
}

btnCriarCard = document.querySelector('.btn-criaCard');
btnCriarCard.addEventListener('click', checkInput);




window.onload = () => {
passarCard();
contadorCards()
}

