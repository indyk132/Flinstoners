const products = document.querySelector('.hamburger__productsMenu');
const expander = document.querySelector('.expander__arrow')
function PRODUCTSmenu(){
    products.classList.toggle('onclick-switch')
}
expander.addEventListener('click', PRODUCTSmenu)