const portfolio = document.querySelector('.portfolio')
const itemImages = document.querySelectorAll('.item img');
const scrollRightBtn = document.querySelector('.scroll-right');
const scrollLeftBtn = document.querySelector('.scroll-left');

const portLoadHandler = () => {

    for(i = 0; i < itemImages.length; i++)
        {
            ANIMATION_DELAY = `${(i/10) + 2}s`            
            itemImages[i].style.animation = `enter-down 0.4s ease-in-out ${ANIMATION_DELAY} 1 forwards`;
        }

}

const scrollRightHandler = () => {
    portfolio.scrollBy(700, 0);
}

const scrollLeftHandler = () => {
    portfolio.scrollBy(-700, 0);
}

window.addEventListener('load', portLoadHandler)
scrollRightBtn.addEventListener('click', scrollRightHandler);
scrollLeftBtn.addEventListener('click', scrollLeftHandler);