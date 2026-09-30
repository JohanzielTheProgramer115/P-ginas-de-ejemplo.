let carrito = [];


// AGREGAR PRODUCTO

function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();

    alert(nombre + " fue agregado al carrito.");

}


// ACTUALIZAR CANTIDAD

function actualizarCarrito() {

    let cantidades = document.querySelectorAll("#cantidad");

    cantidades.forEach(function(elemento) {

        elemento.textContent = carrito.length;

    });

}


// MOSTRAR CARRITO

function mostrarCarrito() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;

    }


    let mensaje = "PRODUCTOS EN TU CARRITO:\n\n";

    let total = 0;


    carrito.forEach(function(producto, indice) {

        mensaje +=
            (indice + 1) +
            ". " +
            producto.nombre +
            " - $" +
            producto.precio.toFixed(2) +
            "\n";

        total += producto.precio;

    });


    mensaje +=
        "\n--------------------\n" +
        "TOTAL: $" +
        total.toFixed(2);


    alert(mensaje);

}