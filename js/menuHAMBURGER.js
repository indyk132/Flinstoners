const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    switch__x = document.querySelector(".switch__x"),
    rotateX = document.querySelector(".menu_rotateIconX"),
    x = document.querySelector(".icon-x");

function HAMBURGERmenu() {
    hamburger.classList.toggle("onclick-switch"), rotateX.style = "transition: 1s", hamburger.classList.contains("onclick-switch") ? hamburger.style = "transition: 1s" : hamburger.style = "transition: 2s", switch__x.classList.contains("icon-widok_01") ? (switch__x.classList.remove("icon-widok_01"), switch__x.classList.add("icon-x"), rotateX.style.transform = "rotate(360deg)") : switch__x.classList.contains("icon-x") && (switch__x.classList.add("icon-widok_01"), switch__x.classList.remove("icon-x"), rotateX.style.transform = "rotate(90deg)")
}

function closeX() {
    hamburger.classList.remove("onclick-switch"), switch__x.classList.remove("icon-x"), switch__x.classList.add("icon-widok_01"), rotateX.style.transform = "rotate(90deg)"
}
const arrow = document.querySelector(".icon-icon_05");

function hideARROW() {
    hamburger.classList.toggle("onclick-switch"), switch__x.classList.remove("icon-x"), switch__x.classList.add("icon-widok_01"), rotateX.style.transform = "rotate(90deg)"
}
x.addEventListener("click", closeX), 
menu.addEventListener("click", HAMBURGERmenu), 
arrow.addEventListener("click", hideARROW);