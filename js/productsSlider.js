const leftArrow = document.querySelector('.button__leftArrow');
const rightArrow = document.querySelector('.button__rightArrow');
const productsSliderBulbs = document.querySelector('.products__sliderBulbs')
const bulb__Move = document.querySelectorAll('.slide__bulbMove');
const bulbContainer = document.querySelector('.products__sliderBulbContainer');

const swapperLeft = () => { 
    productsSliderBulbs.classList.toggle("bulb__mover--left");
    // bulbContainer.firstChild.add(bulb5)
    // bulbContainer.lastChild.remove(bulb5);
}
const swapperRight = () => { 
        productsSliderBulbs.classList.toggle("bulb__mover--right");
}
rightArrow.addEventListener('click', swapperRight);
leftArrow.addEventListener('click', swapperLeft);
