/* Global Variables */
let ANIMATION_DELAY = '2s';
const ANIMATION_CODE = `1s ease-in-out ${ANIMATION_DELAY} 1 forwards`;

// DOM selections
//loader
const loader = document.querySelector('.loading');
const icon = loader.querySelector('i');

//nav
const barsBtn = document.querySelector('.bars-btn');
const nav = document.querySelector('nav');

/* Main functions */
const loadHandler = () => {
    icon.style.animation = `super-widen ${ANIMATION_CODE}`;
    loader.style.animation = `fade-out ${ANIMATION_CODE}`;
}

const barsBtnHandler = () => {
    barsBtn.classList.toggle('active')
    nav.classList.toggle('show');
}




/* Event Listeners */
window.addEventListener('load', loadHandler)
barsBtn.addEventListener('click', barsBtnHandler);