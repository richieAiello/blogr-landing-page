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
const productList = document.querySelector('.product__list .container--list');
const productArrow = document.querySelector('.btn--product .icon--arrow');

// Company
const companyBtn = document.querySelector('.btn--company');
const companyList = document.querySelector('.company__list .container--list');
const companyArrow = document.querySelector('.btn--company .icon--arrow');

// Connect
const connectBtn = document.querySelector('.btn--connect');
const connectList = document.querySelector('.connect__list .container--list');
const connectArrow = document.querySelector('.btn--connect .icon--arrow');

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
    productArrow.classList.toggle('icon--flip');
});

companyBtn.addEventListener('click', e => {

    companyList.classList.toggle('hidden');
    companyArrow.classList.toggle('icon--flip');
});

connectBtn.addEventListener('click', e => {

    connectList.classList.toggle('hidden');
    connectArrow.classList.toggle('icon--flip');
});