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
        // Mueve la tira de imágenes según el tamaño actual de la pantalla
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length; // Si llega al final, vuelve al 0
        updateGallery();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length; // Si está en 0, va al final
        updateGallery();
    });

    // Ajustar al redimensionar ventana
    window.addEventListener('resize', () => {
        updateGallery();
    });

    // Inicializar al cargar imágenes (para evitar anchos erróneos)
    const slideImages = track.querySelectorAll('img');
    const imagesLoaded = Array.from(slideImages).map(img => new Promise(resolve => {
        if (img.complete) {
            resolve();
        } else {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve);
        }
    }));

    Promise.all(imagesLoaded).then(() => {
        updateGallery();
    });

    // Auto-play (opcional)
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

// Detectar ubicación actual y construir rutas relativas correctas
function getPageRoutes() {
    const path = window.location.pathname;
    
    // Si estamos en una página dentro de pages/carreras/
    if (path.includes('/pages/carreras/')) {
        return {
            'Inicio': '../../index.html',
            'Conócenos': '../../pages/conocenos.html',
            'Trámites y servicios': '../../pages/tramites_servicios.html',
            'Docentes': '../../pages/docentes.html',
            'Informática': './informatica.html',
            'Mecatrónica': './mecatronica.html',
            'Productividad': './productividad.html',
            'Electromecanica Industrial': './electromecanica.html',
            'Aspirantes': '../../pages/aspirantes.html',
            'Oferta educativa': '../../pages/oferta_educativa.html'
        };
    }
    // Si estamos en una página dentro de pages/
    else if (path.includes('/pages/')) {
        return {
            'Inicio': '../index.html',
            'Conócenos': './conocenos.html',
            'Trámites y servicios': './tramites_servicios.html',
            'Docentes': './docentes.html',
            'Informática': './carreras/informatica.html',
            'Mecatrónica': './carreras/mecatronica.html',
            'Productividad': './carreras/productividad.html',
            'Electromecanica Industrial': './carreras/electromecanica.html',
            'Aspirantes': './aspirantes.html',
            'Oferta educativa': './oferta_educativa.html'
        };
    }
    // Si estamos en la raíz
    else {
        return {
            'Inicio': 'index.html',
            'Conócenos': 'pages/conocenos.html',
            'Trámites y servicios': 'pages/tramites_servicios.html',
            'Docentes': 'pages/docentes.html',
            'Informática': 'pages/carreras/informatica.html',
            'Mecatrónica': 'pages/carreras/mecatronica.html',
            'Productividad': 'pages/carreras/productividad.html',
            'Electromecanica Industrial': 'pages/carreras/electromecanica.html',
            'Aspirantes': 'pages/aspirantes.html',
            'Oferta educativa': 'pages/oferta_educativa.html'
        };
    }
}

const pageRoutes = getPageRoutes();

// Lista de páginas con rutas que se adaptan a la ubicación actual
const pages = [
    // Páginas principales
    { title: 'Inicio', url: pageRoutes['Inicio'] },
    { title: 'Conócenos', url: pageRoutes['Conócenos'] },
    { title: 'Trámites y servicios', url: pageRoutes['Trámites y servicios'] },
    { title: 'Docentes', url: pageRoutes['Docentes'] },
    
    // Carreras
    { title: 'Informática', url: pageRoutes['Informática'] },
    { title: 'Mecatrónica', url: pageRoutes['Mecatrónica'] },
    { title: 'Productividad', url: pageRoutes['Productividad'] },
    { title: 'Electromecanica Industrial', url: pageRoutes['Electromecanica Industrial'] },
    
    // Nuevos alumnos
    { title: 'Aspirantes', url: pageRoutes['Aspirantes'] },
    
    // Oferta educativa
    { title: 'Oferta educativa', url: pageRoutes['Oferta educativa'] },
    
    // Trámites y servicios (apartados - enlaces externos)
    { title: 'Servicio social y prácticas profesionales', url: 'https://www.conalepmex.edu.mx/alumnos/servicio-social-y-practicas-profesionales.html' },
    { title: 'Reglamento', url: 'https://www.conalep.edu.mx/sites/default/files/2023-09/50_Reglas_de_Convivencia_Escolar_3SO_JD_firma.pdf' },
    { title: 'Linea de captura', url: 'https://sfpya.edomexico.gob.mx/recaudacion/' },
    { title: 'Titulación', url: 'https://www.conalepmex.edu.mx/alumnos/titulacion.html' },
    { title: 'Egresados', url: 'https://mi.conalepmex.edu.mx/egresados/inicio-sesion' },
    { title: 'Noticias', url: 'https://www.conalepmex.edu.mx/alumnos/noticias.html' }
];

// Elementos del DOM
const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions');

if (searchInput && suggestionsList) {
    // Función para mostrar sugerencias
    function showSuggestions(query) {
        suggestionsList.innerHTML = '';
        if (query.length === 0) return;

        const filteredPages = pages.filter(page =>
            page.title.toLowerCase().includes(query.toLowerCase())
        );

        filteredPages.forEach(page => {
            const li = document.createElement('li');
            li.textContent = page.title;
            li.addEventListener('click', () => {
                // Detectar si es URL externo (comienza con http:// o https://)
                if (page.url.startsWith('http://') || page.url.startsWith('https://')) {
                    window.open(page.url, '_blank'); // Abrir en nueva pestaña
                } else {
                    window.location.href = page.url; // Navegar en la misma pestaña
                }
            });
            suggestionsList.appendChild(li);
        });
    }

    // Evento de entrada en el buscador
    searchInput.addEventListener('input', (e) => {
        showSuggestions(e.target.value);
    });

    // Ocultar sugerencias al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
            suggestionsList.innerHTML = '';
        }
    });

    // Agrega esta pequeña mejora para que al presionar "Enter" también busque
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const firstSuggestion = suggestionsList.querySelector('li');
            if (firstSuggestion) firstSuggestion.click();
        }
    });
}
