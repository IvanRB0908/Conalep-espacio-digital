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
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector('.gallery-btn.next');
    const prevBtn = document.querySelector('.gallery-btn.prev');
    let index = 0;

    function updateGallery() {
        // Mueve la tira de imágenes según el porcentaje (0%, -100%, -200%)
        track.style.transform = `translateX(-${index * 100}%)`;
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
});

/*funcion para detectar el click en los enlaces del menu y agregar la clase active*/
const menuLinks = document.querySelectorAll('.main-nav a');

console.log('LINKS', link.href);
console.log('NAVEGADOR', window.location.href);

menuLinks.forEach(function(link) {
    if(link.href === window.location.href) {
        link.classList.add("active");
    }
})