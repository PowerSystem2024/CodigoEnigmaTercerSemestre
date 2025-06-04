function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById("boton_personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador); 
}

function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById("Zuko")
    let inputKatara = document.getElementById("Katara")
    let inputAang = document.getElementById("Aang")
    let inputToph = document.getElementById("Toph")
    let spanPersonajeJugador = document.getElementById('personaje-jugador')
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

    let personajeJugador = ""

    if(inputZuko.checked){
        personajeJugador = "Zuko"
    } else if(inputKatara.checked){
        personajeJugador = "Katara"
    } else if(inputAang.checked){
        personajeJugador = "Aang"
    } else if(inputToph.checked){
        personajeJugador = "Toph"
    } else {
        alert('Selecciona un personaje')
        return
    }

   
    spanPersonajeJugador.innerHTML = personajeJugador

    const personajeEnemigo = aleatoria(personajeJugador) //2 llamamos a la funcion aleatoria , nos va a dar un jugador diferente del que elejimos
    spanPersonajeEnemigo.innerHTML = personajeEnemigo //muestra en pantalla el personaje del enemigo , el que eligio la pc 
}

function aleatoria(excluir) {  //3 Devuelve un personaje distinto , aleatorio al que se le pasa como parametro
    const personajes = ["Zuko", "Katara", "Aang", "Toph"] //4 definimos todos los personajes posibles

   
    const opcionesFiltradas = personajes.filter(p => p !== excluir) //5 Creamos un array que contiene todos los personajes posibles

    
    const indice = Math.floor(Math.random() * opcionesFiltradas.length)  //6 calcula un numero aleatorio entre 0 y la cantidad de personajes filtrados menos 1
    return opcionesFiltradas[indice]
}

window.addEventListener("load", iniciarJuego)
