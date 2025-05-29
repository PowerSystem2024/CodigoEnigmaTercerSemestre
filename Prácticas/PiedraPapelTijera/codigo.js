function numerosAleatorios(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function eleccion(jugada) {
    if (jugada == 1) return "piedra 🪨";
    if (jugada == 2) return "papel 🗞️";
    if (jugada == 3) return "tijera ✂️";
    return "mal elegido ❌";
}

function jugarJuego() {
    let jugador = 0;
    let pc = 0;
    let triunfo = 0;
    let perdedor = 0;

    // Ocultar botón reiniciar mientras se juega
    document.getElementById("reiniciarBtn").style.display = "none";

    while (triunfo < 3 && perdedor < 3) {
        pc = numerosAleatorios(1, 3);
        jugador = parseInt(prompt("Elige tu jugada:\n1 = Piedra 🪨\n2 = Papel 🗞️\n3 = Tijera ✂️"));

        if (![1, 2, 3].includes(jugador)) {
            alert("Opción inválida ❌. Intenta nuevamente.");
            continue;
        }

        alert("PC elige: " + eleccion(pc));
        alert("Jugador elige: " + eleccion(jugador));

        if (pc === jugador) {
            alert("EMPATE");
        } else if (
            (jugador === 1 && pc === 3) ||
            (jugador === 2 && pc === 1) ||
            (jugador === 3 && pc === 2)
        ) {
            alert("¡GANASTE!");
            triunfo++;
        } else {
            alert("Perdiste...");
            perdedor++;
        }
    }

    alert("Resultado final:\nGanaste: " + triunfo + " veces\nPerdiste: " + perdedor + " veces");

    // Mostrar botón reiniciar
    document.getElementById("reiniciarBtn").style.display = "inline-block";
}
