# Juego del Avatar 🕹️​​🔥​🗻​💧​💨

Este proyecto es un juego web interactivo inspirado en la serie *Avatar: La Leyenda de Aang*. Fue desarrollado para practicar el uso de **HTML**, **CSS** y **JavaScript**, integrando estructura, estilos y lógica de programación en una sola aplicación.

---

## Lenguajes y funcionalidades

- **HTML**: estructura de la página, botones y selección de personajes.
- **CSS**: estilos visuales, diseño centrado y colores.
- **JavaScript**: lógica del juego, selección aleatoria, ataques, control de vidas y dinámica en pantalla.

---

## ¿Cómo funciona el juego?

1. El jugador elige un personaje entre Zuko, Katara, Aang o Toph.
2. El enemigo se selecciona de forma aleatoria entre los personajes restantes.
3. Se elige un ataque: Puño, Patada o Barrida.
4. El combate funciona con un sistema similar a piedra-papel-tijera:
   - Puño vence a Barrida
   - Patada vence a Puño
   - Barrida vence a Patada
5. Se actualizan las vidas en cada turno y se muestra el resultado.
6. El juego termina cuando alguno de los dos pierde todas las vidas.

---

## Cronología del desarrollo

### 21 de mayo

- Creación de la estructura HTML básica.
- Agregado de botones para selección de personajes y ataques.
- Comienzo de la lógica con JavaScript.
- Uso de `alert()` para informar al usuario qué personaje eligió.
- Implementación de `seleccionarPersonajeJugador()` para detectar cuál fue marcado.

---

### 28 de mayo

- Introducción al uso del atributo `checked` para detectar opciones seleccionadas.
- Implementación de `innerHTML` para insertar dinamismo en el contenido HTML.
- Desarrollo de la función `aleatoria()` para que la computadora elija su personaje enemigo y lo muestre en pantalla.

---

### 4 de junio

- Se modificaron los botones de ataque para que sean funcionales.
- Se agregó la función para seleccionar el ataque enemigo.
- Se programó el sistema de combate entre jugador y enemigo, con vidas y resultados por turno.
- Agregado de funciones: `combate()`, `mostrarResultado()`, `actualizarVidas()`, `finalizarJuego()` y `reiniciarJuego()`.

---

### 11 de junio

- Se modificó el archivo CSS para mejorar la estética visual del sitio.
- Se agregó un fondo con degradado y se centraron todos los elementos en pantalla.
- Los botones y secciones fueron estilizados con bordes redondeados, sombras y colores.

 