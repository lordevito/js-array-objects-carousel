`use strict`;

//Milestone 0: Creaiamo l'array di oggetti.

const images = [
    {
      image: "luis.jpg",
      title: "Luis Alberto",
      text: "Centrocampista totale con una visione di gioco totale, non per questo viene chiamato MAGO a caso. La luz!",
    },
    {
      image: "Ciro.webp",
      title: "Ciro Immobile",
      text: "Ormai gli elogi si sprecano: più di 300 goal tra i professionisti, 200 con la Lazio. Attacante devastante e persona meravigliosa. Capitano",
    },
    {
      image: "ivan.jpg",
      title: "Ivan Provedel",
      text: "Che finimondo, per quel portiere biondo, si chiama Provedel. Coro e stima da parte di tutti, para e segna anche contro l'Atletico. No sense",
    },
    {
      image: "guendouzi.webp",
      title: "Matteo Guendouzi",
      text: "Centrocampista di rottura ma con piedi ottimi e due polmoni infiniti, quasi quasi sono 3. Entra sempre con grinta. Riccioli d'oro",
    },
    {
      image: "taty.webp",
      title: "Valentin `Taty` Castellanos",
      text: "Attaccante molto generoso, enorme aiuto alla squadra, grande sponde e una cattiveria da vero argentino. Pitbull",
    },
];

//Dichiariamo le variabili richiamando gli elementi del file index

const leftSlider = document.getElementById("left-slider");
const rightSlider = document.getElementById("right-slider");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");
infoTitle.innerHTML = images[0].title;
infoText.innerHTML = images[0].text;

//Creiamo due cicli for per le immagini e le thumbnails

for (i = 0; i < images.length; i++) {
    const singleImg = document.createElement("img");
    singleImg.src = `img/${images[i].image}`;
    singleImg.classList.add("left-slider-img");
  
    if (i === 0) {
      singleImg.classList.add("active");
    }
  
    leftSlider.append(singleImg);
};

for (i = 0; i < images.length; i++) {
    const singleImg = document.createElement("img");
    singleImg.src = `img/${images[i].image}`;
    singleImg.classList.add("right-slider-img");
  
    if (i === 0) {
      singleImg.classList.add("selected");
    }
    rightSlider.append(singleImg);
};

//dichiariamo le variabili per i bottoni e le immagini attive

let currentImg = 0;
const listLeftImg = document.querySelectorAll(".left-slider-img");
const listRightImg = document.querySelectorAll(".right-slider-img");

const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");

//Creiamo una funzione per i bottoni

function next() {
  listLeftImg[currentImg].classList.remove("active");
  listRightImg[currentImg].classList.remove("selected");

  currentImg++;

  if (currentImg === images.length) {
    currentImg = 0;
  }

  listLeftImg[currentImg].classList.add("active");
  listRightImg[currentImg].classList.add("selected");
  infoTitle.innerHTML = images[currentImg].title;
  infoText.innerHTML = images[currentImg].text;
}

function previous() {
  listLeftImg[currentImg].classList.remove("active");
  listRightImg[currentImg].classList.remove("selected");

  if (currentImg === 0) {
    currentImg = images.length;
  }

  currentImg--;

  listLeftImg[currentImg].classList.add("active");
  listRightImg[currentImg].classList.add("selected");
  infoTitle.innerHTML = images[currentImg].title;
  infoText.innerHTML = images[currentImg].text;
}

//Richiamiamo le funzioni con il click sui bottoni

downButton.addEventListener("click", function () {
  next();
});

upButton.addEventListener("click", function () {
  previous();
});

//Impostiamo l'intervallo di 3 secondi per l'autoplay

const autoSlide= setInterval(next, 3000);



const stop = document.querySelector(`.stop`);
const begin = document.querySelector(`.begin`);

stop.addEventListener(`click`, function(){
    clearInterval(autoSlide);
});
begin.addEventListener(`click`, function(){
    setInterval(next, 3000);
});
