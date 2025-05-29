
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

// ahora vemos funciones flecha con varios parametros

const funcionConParametros1 = (op1, op2) => op1 + op2;

console.log(funcionConParametros1(3,5));

// podemos abrir la funcion y tener mas cosas dentro de ella
const funcionConParametros2 = (op1, op2) => {
    let resultado = op1 + op2;
    return resultado;
};

console.log(funcionConParametros2(2,9));

const saludar = () => console.log('Saludos a todos desde esta funcion flecha uno');
console.log(saludar());
//aplica la redundancia, por lo que aparecerá 'undefined'

const saludar1 = () => console.log('Saludos a todos desde esta funcion flecha dos');
saludar1();

