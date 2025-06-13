let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
  
    if (expresion) {
      //resolver("Se resolvió correctamente");
    } else {
      //rechazar("Se produjo un error");
    }
  });
  
//miPromesa.then(
//valor => console.log(valor),
//error => console.log(error)
//);

//miPromesa
//.then( valor => console.log(valor)
//.catch(error => console.log(error)))

let promesa = new Promise (( Resolver) =>{
    console.log("Inicio promesa");
    setTimeout( () => Resolver("Saludos desde promesa, callback, funcion flecha y setTimeout"),3000);
    console.log("Final Promesa");
});

//El llamado a la promesa
//promesa.then( valor => console.log(valor));

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
  return "Saludos con promesas y async"
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function funcionConPromesaYAwait() {
  let miPromesa = new Promise(resolver => {
    resolver("Promesa con await");
  });
  console.log(await miPromesa);
}

//funcionConPromesaYAwait();

//Promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout() {
  let miPromesa = new Promise(resolver => {
    setTimeout(()=> resolver("Promesa con await y Timeout"), 3000);
    console.log("Final funcion");
  })
}

funcionConPromesaAwaitTimeout();