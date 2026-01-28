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
