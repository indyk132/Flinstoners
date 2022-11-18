const expandArrow1 = document.querySelector(".expandArrow1");
const expandArrow2 = document.querySelector(".expandArrow2");
const expandArrow3 = document.querySelector(".expandArrow3");
const expandArrow4 = document.querySelector(".expandArrow4");
const footerElements = document.querySelector(".elements__list");
const footerHeight = document.querySelector(".footer__container");
const arrow1 = document.querySelector(".arrow1")
const arrow2 = document.querySelector(".arrow2")
const arrow3 = document.querySelector(".arrow3")
const arrow4 = document.querySelector(".arrow4")

const showFooterArrow1 = () =>{
    arrow1.classList.toggle("height__switch")

    if(expandArrow1.classList.contains("rotateArrow")){
        expandArrow1.classList.remove("rotateArrow")
    } else{
        expandArrow1.classList.add("rotateArrow")
    }
}
const showFooterArrow2 = () =>{
    arrow2.classList.toggle("height__switch")

    if(expandArrow2.classList.contains("rotateArrow")){
        expandArrow2.classList.remove("rotateArrow")
    } else{
        expandArrow2.classList.add("rotateArrow")
    }
}
const showFooterArrow3 = () =>{
    arrow3.classList.toggle("height__switch")

    if(expandArrow3.classList.contains("rotateArrow")){
        expandArrow3.classList.remove("rotateArrow")
    } else{
        expandArrow3.classList.add("rotateArrow")
    }
}
const showFooterArrow4 = () =>{
    arrow4.classList.toggle("height__switch")

    if(expandArrow4.classList.contains("rotateArrow")){
        expandArrow4.classList.remove("rotateArrow")
    } else{
        expandArrow4.classList.add("rotateArrow")
    }
}


expandArrow1.addEventListener('click', showFooterArrow1)
expandArrow2.addEventListener('click', showFooterArrow2)
expandArrow3.addEventListener('click', showFooterArrow3)
expandArrow4.addEventListener('click', showFooterArrow4)