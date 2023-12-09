/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

/* Menu show */
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.querySelector('#search')
const searchBtn = document.querySelector('#search-btn')
const searchClose = document.querySelector('#search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
    search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
    search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.querySelector('#login')
const loginBtn = document.querySelector('#login-btn')
const loginClose = document.querySelector('#login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
    login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
    login.classList.remove('show-login')
})