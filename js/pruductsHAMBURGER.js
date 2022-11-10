const products = document.querySelector('.hamburger__productsMenu');
const expander = document.querySelector('.expander__arrow')
function PRODUCTSmenu(){
    hamburger__productsMenu.classList.toggle('onclick-switch')
}
expander.addEventListener('click', PRODUCTSmenu)