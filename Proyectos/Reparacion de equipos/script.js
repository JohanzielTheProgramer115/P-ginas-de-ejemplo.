// MOSTRAR CONTACTO

function mostrarContacto() {

    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
    });

}


// SELECCIONAR SERVICIO

function seleccionarServicio(tipo) {

    document.getElementById("equipo").value = tipo;

    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
    });

}


// FORMULARIO

document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let equipo = document.getElementById("equipo").value;
    let problema = document.getElementById("problema").value;

    if (
        nombre === "" ||
        telefono === "" ||
        equipo === "" ||
        problema === ""
    ) {

        alert("Por favor completa todos los campos.");

        return;
    }


    console.log("Nueva solicitud:");
    console.log("Nombre:", nombre);
    console.log("Teléfono:", telefono);
    console.log("Equipo:", equipo);
    console.log("Problema:", problema);


    document.getElementById("mensaje").style.display = "block";


    document.getElementById("formulario").reset();

});


// CERRAR MODAL

function cerrarModal() {

    document.getElementById("mensaje").style.display = "none";

}


// CERRAR MODAL AL HACER CLICK FUERA

window.onclick = function(event) {

    let modal = document.getElementById("mensaje");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};