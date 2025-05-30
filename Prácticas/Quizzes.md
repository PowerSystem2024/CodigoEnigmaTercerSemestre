#  Quizzes 

## 📝 Descripción:
En este archivo se encuentran las respuestas de los quizzes que se realizaron durante el curso de la asignatura Programación III

📅 Fecha de entrega: 23/04/2025

## ✅ Respuestas ✅
1) La respuesta correcta es la: "b"
b. Porque en nuestro código nunca especificamos que deberíamos insertar un espacio entre la suma 
(concatenación) de ambas variables. La forma de resolverlo sería agregar el espacio manualmente.
alert(saludos +" "+ profesor)

2) La respuesta correcta es la: "a"
 Porque primero estamos concatenando un texto (String) con un número y esta operación

nos da como resultado otro texto con el número al final. Luego repetimos esta operación con el

siguiente número y obtenemos el texto con los números al final.

Para obtener el resultado correcto, debemos encapsular la suma de números entre paréntesis y 

luego sí concatenar este resultado con el texto del mensaje.

a = 10

b = 20

alert("La suma de 10 + 20 es: " + (a + b))

3) Math.random()
La respuesta correcta es la:
a. Devuelve un número aleatorio entre 0 y 1

📅 Fecha de entrega: 14/05/2025

## ✅ Respuestas ✅

1) Analizar la siguiente fórmula para obtener un número aleatorio en un rango del 1 al 3 y elige cuál es correcta:
La respuesta correcta es la:
    d.
    let max = 3
    let min = 1
    function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min +1) + min)
}
2) Cuál es un código que se pueda utilizar para un botón Reiniciar en html:
La respuesta correcta es la:
    a. <a href="JavaScript:document.location.reload();">Reiniciar</a>
3) Elige cuál es el uso correcto del utf-8 en html:
La respuesta correcta es la:
    e. Todas las respuestas


📅 Fecha de entrega: 28/05/2025

## ✅ Respuestas ✅

1) Selecciona cuál de las opciones es una etiqueta estática que NO cambia en HTML: Respuesta correcta:a
a.  <title>Tu Gran sitio Web</title>
     </head>
    <body>
        <h1>Ideas web</h1>
        <section id="seleccionar-producto">
            <h2>Elge tus productos</h2>
2) ¿Qué debemos recordar cuando creamos un botón en HTML para asociarlo en JS a la hora de utilizar este botón? Respuesta correcta:c
c. El id que ponemos en HTML, para luego en Js utilizar el mismo nombre
3) ¿Dónde debemos ubicar el script que referencia el archivo Js? Respuesta correcta:
e. La respuesta No esta en las opciones: La mejor práctica moderna es poner el <script> al final del <body>.
