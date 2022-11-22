const leftArrow = document.querySelector(".button__leftArrow");
const rightArrow = document.querySelector(".button__rightArrow");
const productsSliderBulbs = document.querySelectorAll(".products__sliderBulbs");
const bulb__Move = document.querySelectorAll(".slide__bulbMove");
const bulbContainer = document.querySelector(".products__sliderBulbContainer");
let  move = 0

const swapperLeft = () => {
    for (let i  = 0; i < bulb__Move.length; i++){
        bulb__Move[i].style.transform=`translateX(${move - 100 + "px"})`;
    }
    move -= 100
};
const swapperRight = () => {
    for (let i  = 0; i < bulb__Move.length; i++){
        bulb__Move[i].style.transform=`translateX(${move + 100 + "px"})`
    }
    move += 100

    rightArrow.style ="z-index: 1000"
};
productsSliderBulbs.forEach((e) => {
	rightArrow.addEventListener("click", swapperRight);
});
productsSliderBulbs.forEach((e) => {
	leftArrow.addEventListener("click", swapperLeft);
});
