
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
//Hay mas variantes para flecha que vamos a ir viendo
miFuncionFlecha()

//lo hacemos en una linea
const saludar = () => console.log('Saludos a todos desde esta funcion flecha uno');
console.log(saludar);

//otro ejemplo
const saludar2 = () => {
    return 'Saludos a todos desde la funcion flecha dos'
}
console.log(saludar2);

// simplificamos la funcion anterior
const saludar3 = () => 'Saludos a todos desde la funcion flecha tres'
console.log(saludar3());
// en esta parte si mostrara por quokka el contenido, por que incluyen los parentesis
