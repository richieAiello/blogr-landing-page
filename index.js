/************************************ 
    Variables
************************************/

// Hamburger menu for mobile
const hamburgerBtn = document.querySelector('.btn--hamburger');
const closeBtn = document.querySelector('.btn--close');
const nav = document.querySelector('.nav__menu');
const arrowIcons = document.querySelectorAll('.icon--arrow');

// Product
const productBtn = document.querySelector('.btn--product');
const productList = document.querySelector('.product__list.container--list');
const productLightArrow = document.querySelector('.btn--product .icon--light-arrow');
const productDarkArrow = document.querySelector('.btn--product .icon--dark-arrow');

// Company
const companyBtn = document.querySelector('.btn--company');
const companyList = document.querySelector('.company__list.container--list');
const companyLightArrow = document.querySelector('.btn--company .icon--light-arrow');
const companyDarkArrow = document.querySelector('.btn--company .icon--dark-arrow');

// Connect
const connectBtn = document.querySelector('.btn--connect');
const connectList = document.querySelector('.connect__list.container--list');
const connectLightArrow = document.querySelector('.btn--connect .icon--light-arrow');
const connectDarkArrow = document.querySelector('.btn--connect .icon--dark-arrow');

/************************************ 
    Events
************************************/

hamburgerBtn.addEventListener('click', e => {

    hamburgerBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    nav.classList.toggle('hidden');
});

closeBtn.addEventListener('click', e => {

    closeBtn.classList.toggle('hidden');
    hamburgerBtn.classList.toggle('hidden');
    nav.classList.toggle('hidden');
    productList.classList.add('hidden');
    companyList.classList.add('hidden');
    connectList.classList.add('hidden');
    arrowIcons.forEach(arrow => arrow.classList.remove('icon--flip'));
});

productBtn.addEventListener('click', e => {

    productList.classList.toggle('hidden');
    productLightArrow.classList.toggle('icon--flip');
    productDarkArrow.classList.toggle('icon--flip');
});

companyBtn.addEventListener('click', e => {

    companyList.classList.toggle('hidden');
    companyLightArrow.classList.toggle('icon--flip');
    companyDarkArrow.classList.toggle('icon--flip');
});

connectBtn.addEventListener('click', e => {

    connectList.classList.toggle('hidden');
    connectLightArrow.classList.toggle('icon--flip');
    connectDarkArrow.classList.toggle('icon--flip');
});