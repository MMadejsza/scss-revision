const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const item = document.querySelectorAll('.menu-nav__item')


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('open')
    nav.classList.toggle('open')
    menuNav.classList.toggle('open')
    item.forEach((item, index) => {
        setTimeout(() => {
            item.classList.toggle('open')
        }, index * 150);
    });


}