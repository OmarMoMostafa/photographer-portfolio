const brief = document.querySelector('.brief');


const homeLoadHandler = () => {
    if(brief){
        brief.style.animation = `enter-down ${ANIMATION_CODE}`;
    }
}

window.addEventListener('load', homeLoadHandler)
