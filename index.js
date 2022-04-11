/************************************ 
    Variables
************************************/

const hamburger = document.querySelector('.btn--hamburger');
const hamburgerIcon = document.querySelector('.icon--hamburger');
const closeIcon = document.querySelector('.icon--close');
const nav = document.querySelector('.nav__menu');

/************************************ 
    Events
************************************/

hamburger.addEventListener('click', e => {

    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    nav.classList.toggle('hidden');
});