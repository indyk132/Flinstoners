const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu')
function HAMBURGERmenu(){
    hamburger.classList.toggle('onclick-switch')
}
menu.addEventListener('click', HAMBURGERmenu)

const x = document.querySelector('.icon-x')
function closeX(){
    hamburger.classList.remove('onclick-switch')
}
x.addEventListener('click', closeX)

const arrow = document.querySelector('.icon-icon_05')
function hideARROW(){
    hamburger.classList.toggle('onclick-switch')
}
arrow.addEventListener('click', hideARROW)