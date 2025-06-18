let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    document.getElementById("boton_personaje").addEventListener("click", seleccionarPersonajeJugador);

    document.getElementById("boton-punio").addEventListener("click", ataquePunio);
    document.getElementById("boton-patada").addEventListener("click", ataquePatada);
    document.getElementById("boton-barrida").addEventListener("click", ataqueBarrida);

    document.getElementById("boton-reiniciar").addEventListener("click", reiniciarJuego);
}

function seleccionarPersonajeJugador() {
    const personajes = ["Zuko", "Katara", "Aang", "Toph"];
    let personajeJugador = "";

    personajes.forEach(p => {
        if (document.getElementById(p).checked) {
            personajeJugador = p;
        }
    });

    if (!personajeJugador) {
        alert('Selecciona un personaje');
        return;
    }

    document.getElementById("personaje-jugador").innerText = personajeJugador;

    const personajeEnemigo = aleatoria(personajeJugador);
    document.getElementById("personaje-enemigo").innerText = personajeEnemigo;
}

function ataquePunio() {
    ataqueJugador = "Puño";
    ataqueAleatorioEnemigo();
    combate();
}

function ataquePatada() {
    ataqueJugador = "Patada";
    ataqueAleatorioEnemigo();
    combate();
}

function ataqueBarrida() {
    ataqueJugador = "Barrida";
    ataqueAleatorioEnemigo();
    combate();
}

function ataqueAleatorioEnemigo() {
    const ataques = ["Puño", "Patada", "Barrida"];
    const index = aleatorio(0, 2);
    ataqueEnemigo = ataques[index];
}

function combate() {
    let resultado = "";

    if (ataqueJugador === ataqueEnemigo) {
        resultado = "Empate 🤝";
    } else if (
        (ataqueJugador === "Puño" && ataqueEnemigo === "Barrida") ||
        (ataqueJugador === "Patada" && ataqueEnemigo === "Puño") ||
        (ataqueJugador === "Barrida" && ataqueEnemigo === "Patada")
    ) {
        resultado = "Ganaste el turno 🎉";
        vidasEnemigo--;
    } else {
        resultado = "Perdiste el turno 😢";
        vidasJugador--;
    }

    actualizarVidas();
    mostrarResultado(resultado);

    if (vidasJugador === 0 || vidasEnemigo === 0) {
        finalizarJuego();
    }
}

function mostrarResultado(resultado) {
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `
        <p>${resultado}</p>
        <p>Tu ataque: ${ataqueJugador}</p>
        <p>Ataque enemigo: ${ataqueEnemigo}</p>
    `;
}

function actualizarVidas() {
    document.getElementById("vidas-jugador").innerText = vidasJugador;
    document.getElementById("vidas-enemigo").innerText = vidasEnemigo;
}

function finalizarJuego() {
    let mensajeFinal = vidasJugador === 0 ? "¡Perdiste el juego! 😭" : "¡Ganaste el juego! 🏆";
    alert(mensajeFinal);
}

function reiniciarJuego() {
    location.reload();
}

function aleatoria(excluir) {
    const personajes = ["Zuko", "Katara", "Aang", "Toph"];
    const filtrados = personajes.filter(p => p !== excluir);
    const index = Math.floor(Math.random() * filtrados.length);
    return filtrados[index];
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", iniciarJuego);

