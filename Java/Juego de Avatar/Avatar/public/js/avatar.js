function seleccionarPersonajeJugador() {

    const personajeSeleccionado = document.querySelector('input[name="personaje"]:checked');

    if (personajeSeleccionado) {
        alert("seleccionaste a " + personajeSeleccionado.id.toUpperCase());
    } else {
        alert("Por favor seleccioná un personaje");
    }
}

let botonPersonajeJugador = document.getElementById("boton_personaje");
botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
