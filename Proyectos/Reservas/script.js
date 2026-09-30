/* ==========================================
   DATOS DE CASASTAY
========================================== */

const alojamientos = {

    1: {
        nombre: "Villa Blue Ocean",
        tipo: "Villa",
        ubicacion: "Punta Cana, República Dominicana",
        precio: 220,
        rating: "4.9",
        huespedes: 8,

        imagen:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Una hermosa villa cerca del mar, perfecta para disfrutar unas vacaciones tranquilas con familiares o amigos."
    },


    2: {
        nombre: "Casa Serenity",
        tipo: "Casa",
        ubicacion: "Las Terrenas, Samaná",
        precio: 145,
        rating: "4.8",
        huespedes: 6,

        imagen:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Casa acogedora ubicada en una de las zonas más bonitas de Samaná."
    },


    3: {
        nombre: "Ocean Paradise",
        tipo: "Resort",
        ubicacion: "Bávaro, Punta Cana",
        precio: 280,
        rating: "4.9",
        huespedes: 10,

        imagen:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Resort frente al mar con piscina, restaurantes y diferentes espacios para disfrutar."
    },


    4: {
        nombre: "Casa Paradise",
        tipo: "Casa",
        ubicacion: "Puerto Plata",
        precio: 130,
        rating: "4.7",
        huespedes: 6,

        imagen:
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Una casa amplia y cómoda para pasar unos días inolvidables en Puerto Plata."
    },


    5: {
        nombre: "Casa del Sol",
        tipo: "Casa",
        ubicacion: "Juan Dolio",
        precio: 160,
        rating: "4.9",
        huespedes: 7,

        imagen:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Una casa luminosa y tranquila para disfrutar de Juan Dolio."
    },


    6: {
        nombre: "Casa Azul",
        tipo: "Casa",
        ubicacion: "Cabarete",
        precio: 175,
        rating: "4.8",
        huespedes: 6,

        imagen:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Una propiedad moderna y cómoda cerca de las playas de Cabarete."
    },


    7: {
        nombre: "Villa Palm Paradise",
        tipo: "Villa",
        ubicacion: "La Romana",
        precio: 195,
        rating: "4.7",
        huespedes: 7,

        imagen:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Villa rodeada de naturaleza con espacios amplios para disfrutar con amigos."
    },


    8: {
        nombre: "Villa Tropical",
        tipo: "Villa",
        ubicacion: "Samaná",
        precio: 250,
        rating: "4.9",
        huespedes: 8,

        imagen:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Villa tropical con un ambiente tranquilo y vistas espectaculares."
    },


    9: {
        nombre: "Villa Sunset",
        tipo: "Villa",
        ubicacion: "Punta Cana",
        precio: 230,
        rating: "4.8",
        huespedes: 8,

        imagen:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Disfruta de increíbles atardeceres en esta hermosa villa."
    },


    10: {
        nombre: "Caribbean Blue Resort",
        tipo: "Resort",
        ubicacion: "Punta Cana",
        precio: 310,
        rating: "4.8",
        huespedes: 10,

        imagen:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Resort con espacios modernos y diferentes opciones para relajarte."
    },


    11: {
        nombre: "Royal Beach Resort",
        tipo: "Resort",
        ubicacion: "La Romana",
        precio: 265,
        rating: "4.7",
        huespedes: 10,

        imagen:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Resort perfecto para disfrutar de la playa y unos días de descanso."
    },


    12: {
        nombre: "Blue Horizon Resort",
        tipo: "Resort",
        ubicacion: "Puerto Plata",
        precio: 295,
        rating: "4.9",
        huespedes: 10,

        imagen:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",

        imagen2:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",

        imagen3:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",

        descripcion:
        "Un resort elegante para disfrutar de unas vacaciones especiales."
    }

};


/* ==========================================
   RESERVAS
========================================== */

function obtenerReservas() {

    return JSON.parse(
        localStorage.getItem("reservasCasaStay")
    ) || [];

}


function guardarReservas(reservas) {

    localStorage.setItem(
        "reservasCasaStay",
        JSON.stringify(reservas)
    );

}


/* ==========================================
   CONTADOR
========================================== */

function actualizarContador() {

    const contador =
        document.getElementById("contadorReservas");

    if (!contador) return;

    const reservas = obtenerReservas();

    contador.textContent = reservas.length;

}


actualizarContador();


/* ==========================================
   FAVORITOS
========================================== */

function favorito(boton) {

    boton.classList.toggle("activo");

    if (boton.classList.contains("activo")) {

        boton.textContent = "♥";

    } else {

        boton.textContent = "♡";

    }

}


/* ==========================================
   BUSCADOR DEL INICIO
========================================== */

function buscarInicio() {

    const destino =
        document.getElementById("buscarDestino").value;

    const entrada =
        document.getElementById("buscarEntrada").value;

    const salida =
        document.getElementById("buscarSalida").value;


    if (destino.trim() === "") {

        alert("Escribe un destino para buscar.");

        return;

    }


    localStorage.setItem(
        "busquedaCasaStay",
        JSON.stringify({
            destino: destino,
            entrada: entrada,
            salida: salida
        })
    );


    window.location.href =
        "casas.html";
}


/* ==========================================
   DETALLES DEL ALOJAMIENTO
========================================== */

function cargarAlojamiento() {

    const parametros =
        new URLSearchParams(window.location.search);

    const id =
        parametros.get("id");

    if (!id) return;

    const alojamiento =
        alojamientos[id];

    if (!alojamiento) return;


    const nombre =
        document.getElementById("detalleNombre");

    if (!nombre) return;


    document.title =
        "CasaStay | " + alojamiento.nombre;


    document.getElementById("detalleTipo").textContent =
        alojamiento.tipo.toUpperCase();


    document.getElementById("detalleNombre").textContent =
        alojamiento.nombre;


    document.getElementById("detalleUbicacion").textContent =
        "📍 " + alojamiento.ubicacion;


    document.getElementById("detalleRating").textContent =
        alojamiento.rating;


    document.getElementById("detalleImagen").src =
        alojamiento.imagen;


    document.getElementById("detalleImagen2").src =
        alojamiento.imagen2;


    document.getElementById("detalleImagen3").src =
        alojamiento.imagen3;


    document.getElementById("detalleTitulo").textContent =
        alojamiento.nombre;


    document.getElementById("detalleDescripcion").textContent =
        alojamiento.descripcion;


    document.getElementById("detallePrecio").textContent =
        alojamiento.precio;


    document.getElementById("detalleHuespedes").max =
        alojamiento.huespedes;


    calcularTotalDetalle();

}


cargarAlojamiento();


/* ==========================================
   CALCULAR TOTAL
========================================== */

const entrada =
    document.getElementById("fechaEntrada");

const salida =
    document.getElementById("fechaSalida");


if (entrada) {

    entrada.addEventListener(
        "change",
        calcularTotalDetalle
    );

}


if (salida) {

    salida.addEventListener(
        "change",
        calcularTotalDetalle
    );

}


function calcularTotalDetalle() {

    const parametros =
        new URLSearchParams(window.location.search);

    const id =
        parametros.get("id");

    const alojamiento =
        alojamientos[id];

    if (!alojamiento) return;


    const fechaEntrada =
        document.getElementById("fechaEntrada").value;

    const fechaSalida =
        document.getElementById("fechaSalida").value;


    let total =
        alojamiento.precio;


    if (fechaEntrada && fechaSalida) {

        const inicio =
            new Date(fechaEntrada);

        const fin =
            new Date(fechaSalida);

        const diferencia =
            fin - inicio;

        const noches =
            diferencia /
            (1000 * 60 * 60 * 24);


        if (noches > 0) {

            total =
                noches * alojamiento.precio;

        }

    }


    document.getElementById("detalleTotal").textContent =
        "US$" + total;

}


/* ==========================================
   CREAR RESERVA
========================================== */

function crearReserva() {

    const parametros =
        new URLSearchParams(window.location.search);

    const id =
        parametros.get("id");

    const alojamiento =
        alojamientos[id];


    if (!alojamiento) return;


    const fechaEntrada =
        document.getElementById("fechaEntrada").value;

    const fechaSalida =
        document.getElementById("fechaSalida").value;

    const huespedes =
        document.getElementById("detalleHuespedes").value;


    if (!fechaEntrada || !fechaSalida) {

        alert(
            "Selecciona la fecha de entrada y salida."
        );

        return;

    }


    const inicio =
        new Date(fechaEntrada);

    const fin =
        new Date(fechaSalida);


    const diferencia =
        fin - inicio;


    const noches =
        diferencia /
        (1000 * 60 * 60 * 24);


    if (noches <= 0) {

        alert(
            "La fecha de salida debe ser posterior a la fecha de entrada."
        );

        return;

    }


    if (huespedes < 1) {

        alert(
            "Selecciona al menos un huésped."
        );

        return;

    }


    if (huespedes > alojamiento.huespedes) {

        alert(
            "Este alojamiento permite hasta " +
            alojamiento.huespedes +
            " huéspedes."
        );

        return;

    }


    const total =
        noches * alojamiento.precio;


    const reservas =
        obtenerReservas();


    const nuevaReserva = {

        id: Date.now(),

        alojamientoId: id,

        nombre: alojamiento.nombre,

        tipo: alojamiento.tipo,

        ubicacion: alojamiento.ubicacion,

        imagen: alojamiento.imagen,

        precio: alojamiento.precio,

        entrada: fechaEntrada,

        salida: fechaSalida,

        noches: noches,

        huespedes: huespedes,

        total: total

    };


    reservas.push(nuevaReserva);


    guardarReservas(reservas);


    actualizarContador();


    alert(
        "¡Reserva realizada correctamente!"
    );


    window.location.href =
        "reservas.html";

}


/* ==========================================
   MOSTRAR RESERVAS
========================================== */

function mostrarReservas() {

    const contenedor =
        document.getElementById("listaReservas");

    if (!contenedor) return;


    const reservas =
        obtenerReservas();


    if (reservas.length === 0) {

        contenedor.innerHTML = `

            <div class="sin-reservas">

                <div class="icono">
                    🔖
                </div>

                <h2>
                    No tienes reservas todavía
                </h2>

                <p>
                    Explora nuestros alojamientos
                    y encuentra tu próximo destino.
                </p>

                <a
                    href="casas.html"
                    class="btn-explorar"
                >
                    Explorar alojamientos
                </a>

            </div>

        `;

        return;

    }


    contenedor.innerHTML = "";


    reservas.forEach(function(reserva) {

        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "reserva-card";


        tarjeta.innerHTML = `

            <img
                src="${reserva.imagen}"
                alt="${reserva.nombre}"
            >

            <div class="reserva-info">

                <span class="reserva-tipo">
                    ${reserva.tipo.toUpperCase()}
                </span>

                <h2>
                    ${reserva.nombre}
                </h2>

                <p>
                    📍 ${reserva.ubicacion}
                </p>

                <p>
                    📅 ${reserva.entrada}
                    →
                    ${reserva.salida}
                </p>

                <p>
                    🌙 ${reserva.noches} noche(s)
                </p>

                <p>
                    👥 ${reserva.huespedes} huésped(es)
                </p>

                <div class="reserva-total">
                    Total: US$${reserva.total}
                </div>

                <button
                    class="cancelar"
                    onclick="cancelarReserva(${reserva.id})"
                >
                    Cancelar reserva
                </button>

            </div>

        `;


        contenedor.appendChild(tarjeta);

    });

}


mostrarReservas();


/* ==========================================
   CANCELAR RESERVA
========================================== */

function cancelarReserva(id) {

    const confirmar =
        confirm(
            "¿Quieres cancelar esta reserva?"
        );


    if (!confirmar) return;


    let reservas =
        obtenerReservas();


    reservas =
        reservas.filter(function(reserva) {

            return reserva.id !== id;

        });


    guardarReservas(reservas);


    actualizarContador();


    mostrarReservas();

}