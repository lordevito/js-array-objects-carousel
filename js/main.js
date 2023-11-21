`use strict`;


    //<div class="item active">
       // <img src="./img/01.jpg" alt="" />
    //</div>


//Creo un array per le immagini//

const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

//Dichiaro delle variabili presenti nel file index//

const items = document.querySelector(`.items`);
const prev = document.querySelector(`.prev`);
const next = document.querySelector(`.next`);
const stop = document.querySelector(`.stop`);
const begin = document.querySelector(`.begin`);
stop.addEventListener(`click`, function(){
    clearInterval(start);
});
begin.addEventListener(`click`, function(){
    setInterval(nextSlides, 3000)
});



var currentItem = 0;

for (let i = 0; i < images.length; i++){


    //creazione slide

    const item = document.createElement(`div`);
    item.classList.add(`item`);

    //condizione per inserire la classe active

    if (i === currentItem){
        item.classList.add(`active`); 
    }

    //creazione slide

    const img = document.createElement(`img`);
    img.src = `img/${images[i]}`;
    img.alt = `Lago ${i}`;

    //inseriamo gli elementi creati in altri tag nel file index

    item.append(img);
    items.append(item);

}

//Creo variabile 

const domItems = document.querySelectorAll(`.item`);




prev.addEventListener(`click`, function() {

    
    if (currentItem > 0) {
        domItems[currentItem].classList.remove(`active`);
        currentItem--;
        domItems[currentItem].classList.add (`active`);
    }
    if (currentItem === 0){
        domItems[currentItem].classList.remove(`active`);
        currentItem = 4;
        domItems[currentItem].classList.add (`active`);  
    }


});

next.addEventListener(`click`, function() {

    
    if (currentItem < domItems.length - 1) {
        domItems[currentItem].classList.remove(`active`);
        currentItem++;
        domItems[currentItem].classList.add (`active`);
    }
    if (currentItem === 4){
        domItems[currentItem].classList.remove(`active`);
        currentItem = 0;
        domItems[currentItem].classList.add (`active`);
    }

});

function nextSlides (){
    if (currentItem > 0) {
        domItems[currentItem].classList.remove(`active`);
        currentItem--;
        domItems[currentItem].classList.add (`active`);
    }
    if (currentItem === 0){
        domItems[currentItem].classList.remove(`active`);
        currentItem = 4;
        domItems[currentItem].classList.add (`active`);  
    }

}

const start = setInterval(nextSlides, 3000);


