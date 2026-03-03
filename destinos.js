
const destinos = [
    {
        nombre: "Francia",
        descripcion: "El romanticismo de París, los viñedos de Burdeos y el encanto de la Costa Azul te esperan en cada rincón.",
        imagen: "assets/paris.jpg"
    },
    {
        nombre: "Italia",
        descripcion: "Sumérgete en el Renacimiento en Florencia, navega por Venecia o asómbrate con el imponente Coliseo en Roma.",
        imagen: "assets/roma.jpg"
    },
    {
        nombre: "España",
        descripcion: "Descubre la pasión del flamenco, la arquitectura de Gaudí en Barcelona y la historia vibrante de Madrid y Sevilla.",
        imagen: "assets/barcelona.jpg"
    },
    {
        nombre: "Inglaterra",
        descripcion: "Desde el vibrante Londres hasta los misteriosos bloques de Stonehenge, un viaje a través de la realeza y elegancia.",
        imagen: "assets/inglaterra.jpg"
    },
    {
        nombre: "Holanda",
        descripcion: "Recorre los pintorescos canales de Ámsterdam, disfruta de los coloridos tulipanes y majestuosos molinos tradicionales.",
        imagen: "assets/holanda.jpg"
    },
    {
        nombre: "Alemania",
        descripcion: "Explora la modernidad de Berlín, los castillos dignos de cuentos de hadas en Baviera y su vasta e intrigante historia.",
        imagen: "assets/alemania.jpg"
    }
];

function renderDestinos() {
    const container = document.getElementById("destinos-container");

    container.innerHTML = destinos.map(d => `
        <div class="destino-card">
            <img src="${d.imagen}" alt="${d.nombre}">
            <div class="destino-content">
                <h3>${d.nombre}</h3>
                <p>${d.descripcion}</p>
                <a href="#" class="btn-itinerario">
                    Ver itinerario <span class="flecha">→</span>
                </a>
            </div>
        </div>
    `).join("");
}

if (document.getElementById("destinos-container")) {
    renderDestinos();
}