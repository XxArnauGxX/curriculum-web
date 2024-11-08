// Efecto de escritura en el texto principal
var typed = new Typed(".typing", {
    strings: ["Desarrollador Web", "Apasionado de la Tecnología", "Freelancer", "Programador"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Inicialización de AOS (Animate On Scroll)
AOS.init({
    duration: 1200,
    once: true
});

// Cambio de fondo del menú al hacer scroll
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});

// Efecto parallax en la sección Home
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var homeSection = document.querySelector('.home');
    homeSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
