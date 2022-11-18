const leftArrow = document.querySelector('.button__leftArrow');
const rightArrow = document.querySelector('.button__rightArrow');
const bulb1 = document.querySelector('.slide__BulbV1');
const bulb2 = document.querySelector('.slide__BulbV2');
const bulb3 = document.querySelector('.slide__BulbV3');
const bulb4 = document.querySelector('.slide__BulbV4');
const bulb5 = document.querySelector('.slide__BulbV5');
const bulb__Move = document.querySelectorAll('.slide__bulbMove');
const bulbContainer = document.querySelector('.products__sliderBulbContainer');

const swapperLeft = () => { 
    bulb1.classList.add("bulb__mover--left");
    bulb2.classList.add("bulb__mover--left");
    bulb3.classList.add("bulb__mover--left");
    bulb4.classList.add("bulb__mover--left");
    bulb5.classList.add("bulb__mover--left");

   
    // bulbContainer.firstChild.add(bulb5)
    // bulbContainer.lastChild.remove(bulb5);
}
const swapperRight = () => { 
    bulb1.classList.add("bulb__mover--right");
    bulb2.classList.add("bulb__mover--right");
    bulb3.classList.add("bulb__mover--right");
    bulb4.classList.add("bulb__mover--right");
    bulb5.classList.add("bulb__mover--right");
}
rightArrow.addEventListener('click', swapperRight);
leftArrow.addEventListener('click', swapperLeft);
