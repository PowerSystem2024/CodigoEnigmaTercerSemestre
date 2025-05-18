'use strict'

try {
    let x = 10;
    // miFuncion();
    throw 'Error'
} catch (error) {
    console.log(typeof (error));
} finally {
    console.log("Termina la revisión de errores");
}

console.log("Continuamos...");

let resultado = -5;

try {
    // y = 5
    if (isNaN(resultado))  throw 'No es un número';
    else if (resultado === '') throw 'Es una cadena vacía';
    else if (resultado < 0)  throw 'Es un número negativo';
    else if (resultado > 0)  throw 'Es un número positivo';

    } catch (error) {
        console.log(error);
        console.log(error.name);
        console.log(error.message);
    }