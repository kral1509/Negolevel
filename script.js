/* AÑO AUTOMÁTICO */
document.getElementById("year").textContent = new Date().getFullYear();

/* WHATSAPP ALEATORIO */
const numerosWhatsapp = [
    "593960568361",
    "593991286943"
];

const mensajes = [
    "Hola, quiero más información sobre sus servicios.",
    "Hola, me gustaría realizar una consulta.",
    "Buenas tardes, deseo obtener información."
];

document.getElementById("whatsapp-link").addEventListener("click", function () {

    const numeroAleatorio =
        numerosWhatsapp[Math.floor(Math.random() * numerosWhatsapp.length)];

    const mensajeAleatorio =
        mensajes[Math.floor(Math.random() * mensajes.length)];

    this.href =
        `https://wa.me/${numeroAleatorio}?text=${encodeURIComponent(mensajeAleatorio)}`;

});

/* MODAL REDES */
const abrirRedes = document.getElementById("abrir-redes");

const modalRedes = document.getElementById("modal-redes");

const cerrarRedes = document.getElementById("cerrar-redes");

abrirRedes.addEventListener("click", function (e) {

    e.preventDefault();

    modalRedes.style.display = "flex";

});

cerrarRedes.addEventListener("click", function () {

    modalRedes.style.display = "none";

});

window.addEventListener("click", function (e) {

    if (e.target === modalRedes) {

        modalRedes.style.display = "none";

    }

});