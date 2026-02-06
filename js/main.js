/*============================================================================
=            Saludo según la hora            =
==========================================================================*/
const fecha = new Date();
const hora = fecha.getHours();
let mensaje;

if(hora < 12)
{mensaje = "Buenos dias."}
else if(hora >= 12 && hora <= 19)
{mensaje = "Buenas tardes."}
else{
{mensaje = "Buenas noches"}
}
let mensajeCompleto = mensaje + " Bienvenido al Plantel Ecatepec I";

document.getElementById("saludo-hora").innerHTML = mensajeCompleto;
/*============================================================================
=            Mostrar fecha actual            =
==========================================================================*/
const opciones = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}; 
let fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
document.getElementById("fecha-actual").innerHTML = fechaFormateada;

/*============================================================================

/* ----------------------------------------------------------------------------
        MODO OSCURO
---------------------------------------------------------------------------- */
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleButton.querySelector('i');

//al hacer clic en el boton
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); //se activa o desactiva el modo oscuro

    //cambiar icono
    if(body.classList.contains('dark-mode')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else{
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});


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
