
miFuncion();
function miFuncion(){
    console.log('')
};
// funcion anonima
let myFuncion = function(){
    console.log('Saludos la funcion anonima')
};

let miFuncionFlecha = () => {
    console.log('Saludos desde mi funcion flecha');
};
miFuncionFlecha()


// Continuamos con otro ejemplo
const regresaObjeto = () => ({nombre: 'Juan', apellido:'Delospalotes'});

console.log(regresaObjeto());

//Funciones que reciben parametros
const funcionParametros = ( mensaje ) => console.log( mensaje );

funcionParametros('Saludos desde esta funcion con parametros');

// Una funcion clásica
const funcionParametrosClasica = function( mensaje ){
    console.log( mensaje );
}

funcionParametrosClasica('Saludos desde la funcion clasica');


// Si se utiliza un solo parametro, se pueden omitir los parentesis en la funcion flecha
const funcionConParametros = mensaje => console.log( mensaje );

funcionConParametros('Otra forma de trabajar con funcion flecha');
