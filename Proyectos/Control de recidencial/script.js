/* =========================
   LOGIN
========================= */

function abrirLogin() {
    document.getElementById("modalLogin").style.display = "block";
}

function cerrarLogin() {
    document.getElementById("modalLogin").style.display = "none";
}


/* =========================
   PAGO
========================= */

function abrirPago() {
    document.getElementById("modalPago").style.display = "block";
}

function cerrarPago() {
    document.getElementById("modalPago").style.display = "none";
}


/* =========================
   CALCULAR TOTAL
========================= */

const servicios = document.querySelectorAll(".servicio-check");

servicios.forEach(function(servicio) {

    servicio.addEventListener("change", calcularTotal);

});


function calcularTotal() {

    let total = 0;

    servicios.forEach(function(servicio) {

        if (servicio.checked) {
            total += Number(servicio.value);
        }

    });

    document.getElementById("totalPago").textContent =
        "RD$ " + total.toLocaleString("es-DO");

}


/* =========================
   PROCESAR PAGO
========================= */

function procesarPago() {

    let total = 0;

    servicios.forEach(function(servicio) {

        if (servicio.checked) {
            total += Number(servicio.value);
        }

    });


    if (total === 0) {

        alert("Selecciona al menos un servicio para continuar.");

        return;
    }


    alert(
        "Has seleccionado un pago de RD$ " +
        total.toLocaleString("es-DO") +
        ".\n\nEn la siguiente versión agregaremos el método de pago."
    );

}


/* =========================
   INICIAR SESIÓN
========================= */

function iniciarSesion() {

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;


    if (usuario === "" || password === "") {

        alert("Por favor, completa todos los campos.");

        return;
    }


    alert(
        "Inicio de sesión de demostración.\n\n" +
        "Después conectaremos esta pantalla con el panel del residente."
    );

}


/* =========================
   CONTACTO
========================= */

function mostrarContacto() {

    alert(
        "Contacto con la administración\n\n" +
        "Teléfono: (809) 000-0000\n" +
        "Correo: administracion@miresidencial.com"
    );

}


/* =========================
   CERRAR MODALES
========================= */

window.onclick = function(event) {

    const login = document.getElementById("modalLogin");
    const pago = document.getElementById("modalPago");


    if (event.target === login) {
        login.style.display = "none";
    }


    if (event.target === pago) {
        pago.style.display = "none";
    }

};