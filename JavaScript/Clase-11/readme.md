Comandos a realizar:

Abrimos la terminal de Gitbash o Ubuntu como administrador

ll

cd Practicas

ll

mkdir final-3

cd final-3

touch index.html

mkdir css

touch codigo.js

cd css

touch style.css

cd ..

code .

html : 5

# Cambiar el title por: Web Viva

#Vamos a cargar algunas cosas en el head antes del title:

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

 <meta name="description" content="" />

 <meta name="author" content="" />

 <meta name="viewport"

  content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />


 <link rel="stylesheet" href="./css/style.css">



#En el body creamos una section y dentro comenzamos con 3 div con una class="color" solo eso.

#Luego continuamos con otro div para ponerle la class="box"

#Dentro de este div creamos otro con la class="square"  style="--i:0" este ahora queda cerrado con el /div>

#Seguimos dentro del div class="box" con el div que tendrá la class="conteiner" y dentro vamos a continuar, agregamos un div con la class="form" y dentro comenzamos a cargar un h2>Login Form</h2> y continuamos

con la carga para un formulario de logeo, se los paso a continuación:

 <form>

      <div class="inputBox">

       <input type="text" placeholder="Username">

            </div>

       <div class="inputBox">

        <input type="password" placeholder="Password" />

         </div>

        <div class="inputBox">

         <input type="submit" value="Login" />

      </div>

         <p class="forget">Forgot password ?

          <a href="">Click Here</a>

         </p>

         <p class="forget">Don't have an account ?

          <a href="">Sign Up</a>

         </p>


     </form>



#Podemos ejecutar en el navegador para ir viendo como va tomando forma lo que queremos hacer.

#Ahora pasamos al css y comenzamos con, primero importamos un tipo de letra, ustedes elijan la que quieran,

yo voy a elegir esta:

@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');



Ahora vamos a continuar agregando de manera total lo siguiente para la letra:

*{

  font-family: 'Poppins', sans-serif;

  margin: 0;

  padding: 0;

  box-sizing: border-box;


}



Pueden revisar en el navegador los cambios:

Ahora seguimos en el body:

/*oculta el contenido que se sale de la caja, es decir, mostrará sólo el contenido que cabe dentro del contenedor y el resto no se ve.*/

body{

  overflow: hidden;


}



#Pasamos a la section donde le agregamos un display: flex y llevamos todo hacía el centro junto con los

items y agregamos un background.

section{

  display: flex;

  justify-content:center;

  align-items: center;

  min-height: 100vh;

  background: linear-gradient(to bottom, #999, #888);


}



#Vamos a seguir pero con la section .color en este caso tiene que ver con nuestros div y su class="color"

section .color{

  position: absolute;

  filter: blur(150px);


}

#Ahora vamos a hacer algo diferente para cada una de estas clases :nth-child(1):

section .color:nth-child(1){

  top: -350px;

  width: 600px; 

  height: 600px;

  background: #ff359b;


}



#Ver los cambios en el navegador y continuar con el siguiente aporte a color para el 2:

section .color:nth-child(2){

  bottom: -150px; 

  left: 100px; 

  width: 500px; 

  height: 500px;

  background: #fffd87;


}

 #Y continuamos con el último para el 3:

section .color:nth-child(3){

  bottom: 50px; 

  right: 100px; 

  width: 300px; 

  height: 300px;

  background: #00d2ff;


}



#Veremos claramente en el navegador la combinación de los tres colores que elegimos



#Pasamos a la class box para solo comenzar con una posición:

.box{

  position: relative;


}

#Veran en el navegador como traemos todo adelante y ahora vamos por más:

.box .square{

  position: absolute;

  backdrop-filter: blur(5px);

  box-shadow: 0 25px 45px rgba(0,0,0,0.1);

  border: 1px solid rgba(255,255,255,0.2);

  border-right: 1px solid rgba(255,255,255,0.2);

  border-bottom: 1px solid rgba(255,255,255,0.2);

  background: rgba(255,255,255,0.1);

  border-radius: 10px;

  animation: animate 10s ease infinite;

  animation-delay: calc(-1s * var(--i))


}



#Una vez terminado esto y habiendo analizado cada paso, que por supuesto eso se los dejo a ustedes,

vamos a pasar a cargar la animación de la siguiente manera:

@keyframes animate{

  0%,100%{

    transform: translateY(-40px);

  }

  50%{

    transform: translateY(40px);

  }


}



#Pero aunque No veamos nada por el momento en el navegador,  vamos a crear la caja 1

para ver los resultados:

.box .square:nth-child(1){

  top: -50px;

  right: -60px;

  width: 100px;

  height: 100px;


}



#Al ejecutar en el navegador veran los cambios de lo que hemos ido creando, pero ahora

pasemos al conteiner:

.container{

  position: relative;

  width: 400px;

  min-height: 400px;

  background: rgba(255,255,255,0.1);

  border-radius: 10px;

  display: flex;

  justify-content: center;

  align-items: center;

  backdrop-filter: blur(5px);

  box-shadow: 0 25px 45px rgba(0,0,0,0.1);

  border: 1px solid rgba(255,255,255,0.2);

  border-right: 1px solid rgba(255,255,255,0.2);

  border-bottom: 1px solid rgba(255,255,255,0.2);


}



#Y ahora pasamos al form sus posiciones y mucho más:

.form{

  position: relative;

  width: 100%;

  height: 100%;

  padding: 40px;

}



.form h2{

  position: relative;

  color: #fff;

  font-size: 24px;

  font-weight: 600;

  letter-spacing: 1px;

  margin-bottom: 40px;

}



.form h2::before{

  content: '';

  position: absolute;

  left: 0;

  bottom: -10px;

  width: 80px;

  height: 4px;

  background: #fff;

}



.form .inputBox{

  width: 100%;

  margin-top: 20px;


}



#Por último vamos a generar sus input desde aquí:

.form .inputBox input{

  width: 100%;

  background: rgba(255,255,255,0.2);

  border: none;

  outline: none;

  padding: 10px 20px;

  border-radius: 35px;

  border-right: 1px solid rgba(255,255,255,0.2);

  border-bottom: 1px solid rgba(255,255,255,0.2);

  font-size: 16px;

  letter-spacing: 1px;

  color: #fff;

  box-shadow: 0 5px 15px rgba(0,0,0,0.05);

}



.form .inputBox input::placeholder{

  color: #fff;

}



.form .inputBox input[type="submit"]{

  background: #fff;

  color: #666;

  max-width: 100px;

  cursor: pointer;

  margin-bottom: 20px;

  font-weight: 600;

}



.forget{

  margin-top: 5px;

  color: #fff;

}



.forget a{

  color: #fff;

  font-weight: 600;


}

ctrl + s

git status

git add .

git commit -m"Creamos un login donde trabajamos con css y html solo falta JS"

cd ..



#Ya aquí van a tener una buena perspectiva de lo que queria lograr, PERO lo que pido es generar 4 .box .square más que tengán movimiento alrededor de nuestro login, yo les voy a mostrar la ejecución de como me quedo a mi.

En este ejemplo solo verán actividad de HTML y CSS, Ahora ustedes deben agregar una actividad de JS para el login,

comienza la investigación de como lograr este login, me lo presentan en el último semestre y FELICES VACACIONES.

Profesor Ariel Betancud