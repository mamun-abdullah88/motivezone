let navBar = document.querySelector('.navbar-wrapper');
let hamburgerMenu = document.querySelector('.navbar__toggler');

hamburgerMenu.addEventListener('click', function() {
    navBar.classList.toggle('mobile-menu');
})