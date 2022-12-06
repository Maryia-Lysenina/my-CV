let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.main-nav-tablet');
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('active');
    grey.classList.toggle('active');
});
    function closeMenu(){
        document.body.classList.remove('active');
        burger.classList.remove('active');
        nav.classList.remove('active');
        grey.classList.remove('active');
        };
let navLinks = document.querySelectorAll('.main-nav-tablet .nav__link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));