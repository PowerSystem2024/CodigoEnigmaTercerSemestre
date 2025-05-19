/*
Formas de utilizar los Callbacks
Fundamentos
*/

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);    //Cada 1 segundo se ejecuta

