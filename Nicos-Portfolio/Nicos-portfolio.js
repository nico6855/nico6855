let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll= () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};


// Header background Change on Scroll //
let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("header-active", window.scrollY > 0 );
});
// Scroll Top // 
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", ()=>{
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400 );
});
/*Reveals both form container and texts with a delay from top & left */
sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})
sr.reveal('.heading',{delay: 800, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 600, origin: 'top'})
sr.reveal('.services-cotnainer .box',{delay: 600, origin: 'top'})
sr.reveal('.about-container .box',{delay: 600, origin: 'top'})
sr.reveal('.reviews-container',{delay: 600, origin: 'top'})
sr.reveal('.nwsletter .box',{delay: 400, origin: 'bottom'})