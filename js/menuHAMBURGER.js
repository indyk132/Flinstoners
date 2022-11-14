const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const switch__x = document.querySelector('.switch__x');
const rotateX= document.querySelector('.menu_rotateIconX');
function HAMBURGERmenu(){
    hamburger.classList.toggle('onclick-switch');
    rotateX.style = 'transition: .3s';
    if(switch__x.classList.contains('icon-widok_01')){
        switch__x.classList.remove('icon-widok_01');
        switch__x.classList.add('icon-x');
        rotateX.style.transform = 'rotate(360deg)';
        
    } else if (switch__x.classList.contains('icon-x')){
        switch__x.classList.add('icon-widok_01');
        switch__x.classList.remove('icon-x');
        rotateX.style.transform = 'rotate(90deg)';
        // rotateX.style.transform = setAttribute('rotate(75deg)')
    }
}

const x = document.querySelector('.icon-x')
function closeX(){
    hamburger.classList.remove('onclick-switch')
}

const arrow = document.querySelector('.icon-icon_05')
function hideARROW(){
    hamburger.classList.toggle('onclick-switch')
}
x.addEventListener('click', closeX)
menu.addEventListener('click', HAMBURGERmenu)
arrow.addEventListener('click', hideARROW)