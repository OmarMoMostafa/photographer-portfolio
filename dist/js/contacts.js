const photo = document.querySelector('.contacts-photo');
const contactMe = document.querySelector('.contact-me');

const contactsLoadHandler = () => {
    photo.style.animation = `enter-down ${ANIMATION_CODE}`;
    contactMe.style.animation = `enter-up ${ANIMATION_CODE}`;   
}

window.addEventListener('load', contactsLoadHandler)
