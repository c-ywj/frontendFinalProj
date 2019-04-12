const body = document.body;
const btn = document.querySelector("#menu-btn");
const navMenu = document.querySelector('.main-nav');

console.log("menu.js loaded");

btn.addEventListener('click', function(){
   navMenu.classList.toggle('show');
});