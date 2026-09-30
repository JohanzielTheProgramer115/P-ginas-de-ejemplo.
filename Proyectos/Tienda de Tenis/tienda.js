let carrito = JSON.parse(localStorage.getItem("hoodxCarrito")) || [];


// ELEMENTOS

const carritoBoton = document.getElementById("carritoBtn");
const carritoPanel = document.getElementById("carrito");
const fondoCarrito = document.getElementById("fondoCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");

const carritoProductos =
    document.getElementById("carritoProductos");

const contador =
    document.getElementById("contador");

const total =
    document.getElementById("total");

const mensaje =
    document.getElementById("mensaje");


// ABRIR CARRITO

carritoBoton.addEventListener("click", function () {

    carritoPanel.classList.add("abierto");
    fondoCarrito.classList.add("abierto");

});


// CERRAR CARRITO

cerrarCarrito.addEventListener("click", cerrar);

fondoCarrito.addEventListener("click", cerrar);


function cerrar() {

    carritoPanel.classList.remove("abierto");
    fondoCarrito.classList.remove("abierto");

}


// GUARDAR CARRITO

function guardarCarrito() {

    localStorage.setItem(
        "hoodxCarrito",
        JSON.stringify(carrito)
    );

}


// AGREGAR PRODUCTO

function agregarProducto(producto) {

    const productoExistente =
        carrito.find(item => item.nombre === producto.nombre);


    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });

    }


    guardarCarrito();

    actualizarCarrito();

    mostrarMensaje();

}


// BOTONES AGREGAR

const botonesAgregar =
    document.querySelectorAll(".agregar");

botonesAgregar.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const producto =
            boton.closest(".producto");

        obtenerProducto(producto);

    });

});


// BOTONES +

const botonesRapidos =
    document.querySelectorAll(".agregar-rapido");

botonesRapidos.forEach(function (boton) {

    boton.addEventListener("click", function (evento) {

        evento.stopPropagation();

        const producto =
            boton.closest(".producto");

        obtenerProducto(producto);

    });

});


// OBTENER DATOS

function obtenerProducto(elemento) {

    const nombre =
        elemento.dataset.nombre;

    const precio =
        Number(elemento.dataset.precio);

    const imagen =
        elemento.dataset.imagen;


    agregarProducto({
        nombre: nombre,
        precio: precio,
        imagen: imagen
    });

}


// ACTUALIZAR CARRITO

function actualizarCarrito() {

    carritoProductos.innerHTML = "";


    if (carrito.length === 0) {

        carritoProductos.innerHTML = `
            <div class="carrito-vacio">

                <div>🛒</div>

                <h3>Tu carrito está vacío</h3>

                <p>
                    Agrega unos tenis y aparecerán aquí.
                </p>

            </div>
        `;

        contador.textContent = "0";
        total.textContent = "$0";

        return;
    }


    let cantidadTotal = 0;
    let precioTotal = 0;


    carrito.forEach(function (producto, indice) {

        cantidadTotal += producto.cantidad;

        precioTotal +=
            producto.precio * producto.cantidad;


        const item =
            document.createElement("div");

        item.classList.add("item-carrito");


        item.innerHTML = `

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >

            <div class="item-info">

                <h3>
                    ${producto.nombre}
                </h3>

                <strong>
                    $${producto.precio}
                </strong>


                <div class="cantidad">

                    <button
                        onclick="cambiarCantidad(${indice}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${producto.cantidad}
                    </span>

                    <button
                        onclick="cambiarCantidad(${indice}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="eliminar"
                onclick="eliminarProducto(${indice})"
            >
                ×
            </button>

        `;


        carritoProductos.appendChild(item);

    });


    contador.textContent = cantidadTotal;

    total.textContent =
        "$" + precioTotal.toFixed(2);

}


// CAMBIAR CANTIDAD

function cambiarCantidad(indice, cambio) {

    carrito[indice].cantidad += cambio;


    if (carrito[indice].cantidad <= 0) {

        carrito.splice(indice, 1);

    }


    guardarCarrito();

    actualizarCarrito();

}


// ELIMINAR

function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    guardarCarrito();

    actualizarCarrito();

}


// MENSAJE

function mostrarMensaje() {

    mensaje.classList.add("mostrar");


    setTimeout(function () {

        mensaje.classList.remove("mostrar");

    }, 2200);

}


// FILTROS

const filtros =
    document.querySelectorAll(".filtro");

const productos =
    document.querySelectorAll(".producto");


filtros.forEach(function (filtro) {

    filtro.addEventListener("click", function () {


        filtros.forEach(function (elemento) {

            elemento.classList.remove(
                "activo-filtro"
            );

        });


        filtro.classList.add(
            "activo-filtro"
        );


        const categoria =
            filtro.dataset.categoria;


        productos.forEach(function (producto) {

            if (categoria === "todos") {

                producto.classList.remove(
                    "oculto"
                );

                return;
            }


            const categorias =
                producto.dataset.categoria;


            if (categorias.includes(categoria)) {

                producto.classList.remove(
                    "oculto"
                );

            } else {

                producto.classList.add(
                    "oculto"
                );

            }

        });

    });

});


// BUSCADOR

const buscarBtn =
    document.getElementById("buscarBtn");


buscarBtn.addEventListener("click", function () {

    const busqueda =
        prompt("¿Qué tenis estás buscando?");


    if (!busqueda) {
        return;
    }


    const texto =
        busqueda.toLowerCase();


    productos.forEach(function (producto) {

        const nombre =
            producto.dataset.nombre.toLowerCase();


        if (nombre.includes(texto)) {

            producto.classList.remove(
                "oculto"
            );

        } else {

            producto.classList.add(
                "oculto"
            );

        }

    });

});


// FINALIZAR COMPRA

const comprarBtn =
    document.getElementById("comprarBtn");


comprarBtn.addEventListener("click", function () {

    if (carrito.length === 0) {

        alert(
            "Tu carrito está vacío."
        );

        return;
    }


    alert(
        "¡Gracias por comprar en HoodX!\n\n" +
        "La página de pago la podemos crear en el siguiente paso."
    );

});


// INICIAR

actualizarCarrito();