/*
Formas de utilizar los Callbacks
Fundamentos
*/

function mifuncion1(){
    console.log('Funcion 1');
}

function mifuncion2(){
    console.log('Funcion 2');
}

mifuncion1();
mifuncion2();
// ejecucion de forma secuencial, es decir en orden del llamado

//funcion callback
function imprimir( mensaje ){
    console.log( mensaje );
}
/*
Tambien puede ser usada como:
let imp = function imprimir( mensaje ){
    console.log( mensaje );
}
y abajo sería dentro de suma:
sumar( 5, 3, imp);
*/

function sumar(op1,op2,funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar( 5, 3, imprimir);