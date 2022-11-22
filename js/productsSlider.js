const leftArrow = document.querySelector(".button__leftArrow");
const rightArrow = document.querySelector(".button__rightArrow");
const  productsSliderScroll = document.querySelector(".product__sliderScroll");
const bulb__Move = document.querySelectorAll(".slide__bulbMove").length;
const bulbContainer = document.querySelector(".products__sliderBulbContainer");
const maxMove = bulb__Move;
let  swapperMove = 0

const swapper = function(direction) {
    const productsSliderBulbs = document.querySelector(".products__sliderBulbs").offsetWidth;
    const width = bulbContainer.offsetWidth + 10;
    let visibleCount = Math.round(productsSliderBulbs / width);
    let visbleSum = maxMove - visibleCount;
    
    if (direction === "left"){
            if (swapperMove > 0){
                swapperMove -= 1;
            }
    } else  if(direction ==="right"){
        if (swapperMove >= 0 & swapperMove < visbleSum){
                swapperMove += 1;
            }
        } else return;
        productsSliderScroll.style.transform=`translateX(${"-" + swapperMove * width + "px"})`;
}

rightArrow.addEventListener("click", () => {swapper("right")});
leftArrow.addEventListener("click", () =>{swapper("left")} );
