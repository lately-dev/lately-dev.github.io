const mobileMenu = document.getElementById('mobileMenu');
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
});