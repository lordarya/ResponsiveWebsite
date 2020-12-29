// const nav = document.querySelector('.menu-list ul');
// const menuToggle = ducument.querySelector('.menu-toggle input');

// menuToggle.addEventListener('checked', function() {
//     nav.classList.toggle('slide');
// });

// Sticky Navbar

window.onscroll = function(){
    stickyNav();
}

const nav = document.querySelector('nav');

const sticky = nav.offsetTop;

function stickyNav() {
    if (window.scrollY >= 300){
        nav.classList.add('sticky');
    }else {
        nav.classList.remove('sticky');
    }
}


const navbar = document.querySelector('.menu-list ul');

function toggle() {
  navbar.classList.toggle('slide');    
 }