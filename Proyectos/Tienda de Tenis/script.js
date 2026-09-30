let cantidadCarrito = 0;

const carritoBtn = document.getElementById("carritoBtn");
const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensajeCarrito");

carritoBtn.addEventListener("click", function () {

    mensaje.classList.add("mostrar");

    setTimeout(function () {
        mensaje.classList.remove("mostrar");
    }, 2500);

});


// BUSCADOR

const buscarBtn = document.getElementById("buscarBtn");

buscarBtn.addEventListener("click", function () {

    const busqueda = prompt("¿Qué tenis estás buscando?");

    if (busqueda && busqueda.trim() !== "") {

        alert(
            "Buscando: " + busqueda +
            "\n\nLa tienda de productos estará disponible próximamente."
        );

    }

});


// ANIMACIÓN DEL TENIS

const tenis = document.getElementById("tenisHero");

tenis.addEventListener("mousemove", function (evento) {

    const rect = tenis.getBoundingClientRect();

    const x = evento.clientX - rect.left;
    const y = evento.clientY - rect.top;

    const centroX = rect.width / 2;
    const centroY = rect.height / 2;

    const movimientoX = (x - centroX) / 15;
    const movimientoY = (y - centroY) / 15;

    tenis.style.transform =
        "rotate(-8deg) translate(" +
        movimientoX +
        "px, " +
        movimientoY +
        "px) scale(1.03)";

});

tenis.addEventListener("mouseleave", function () {

    tenis.style.transform =
        "rotate(-10deg)";

});


// ANIMACIÓN DE LAS TARJETAS

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(function (tarjeta) {

    tarjeta.addEventListener("mouseenter", function () {

        tarjeta.style.transition = "0.3s";

    });

});


// SCROLL

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,5,5,.95)";

    } else {

        header.style.background = "rgba(5,5,5,.75)";

    }

});