/*============================================================================
=            Saludo según la hora            =
==========================================================================*/
const fecha = new Date();
const hora = fecha.getHours();
let mensaje;

const cajaSaludo = document.getElementById("saludo-hora");
if (cajaSaludo){
    if(hora < 12){
    mensaje = "Buenos dias."}
    else if(hora >= 12 && hora <= 19){
    mensaje = "Buenas tardes."}
    else{
    mensaje = "Buenas noches"
    }
    const mensajeCompleto = mensaje + " Bienvenido al Plantel Ecatepec I";
    cajaSaludo.innerHTML = mensajeCompleto;
}
/*============================================================================
=            Mostrar fecha actual            =
==========================================================================*/
const opciones = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}; 
const elementoFecha = document.getElementById("fecha-actual");

if (elementoFecha){
    let fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    elementoFecha.innerHTML = fechaFormateada;
}

/*============================================================================
=            LÓGICA DE LA GALERÍA DE IMÁGENES             =
==========================================================================*/
const track = document.getElementById('gallery-track');
if (track) {


    const slides = Array.from(track.children);
    const nextBtn = document.querySelector('.gallery-btn.next');
    const prevBtn = document.querySelector('.gallery-btn.prev');
    let index = 0;

    function updateGallery() {
        // Mueve la tira de imágenes según el porcentaje (0%, -100%, -200%)
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
        window.addEventListener('resize', updateGallery);
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length; // Si llega al final, vuelve al 0
        updateGallery();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length; // Si está en 0, va al final
        updateGallery();
    });

    // Opcional: Auto-play cada 4 segundos
    setInterval(() => {
        index = (index + 1) % slides.length;
        updateGallery();
    }, 7000);
};


/*funcion para detectar el click en los enlaces del menu y agregar la clase active*/
const menuLinks = document.querySelectorAll('.main-nav a');
menuLinks.forEach(function(link) {
    if(link.href === window.location.href) {
        link.classList.add("active");
    }
});

/*============================================================================
=            FUNCIONALIDAD DEL MENÚ HAMBURGUESA            =
==========================================================================*/
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

if (hamburgerMenu && mainNav) {
    hamburgerMenu.addEventListener('click', function() {
        // Toggle clase active para animación de hamburguesa
        this.classList.toggle('active');
        // Toggle clase mobile-menu para mostrar/ocultar menú
        mainNav.classList.toggle('mobile-menu');
    });

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            mainNav.classList.remove('mobile-menu');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            hamburgerMenu.classList.remove('active');
            mainNav.classList.remove('mobile-menu');
        }
    });
}