#declaramos una variable
try:

    archivo = open("prueba.txt", "w",encoding="utf8") #open Sirve para abrir un arachivo , si ese archivo nno existe lo crea
                                  # La w es write que significa escribir
    archivo.write("Programamos con diferentes tipos de archivos , ahora en txt.")
    archivo.write("Los acentos son importantes para las palabras")
    archivo.write("como por ejemplo:accion , ejecuccion y produccion")
    archivo.write("las letras son: r read , a append , w write , x ")
    archivo.write("t esta es para texto o tex, b archivos binarios, w+para escribir y para leer informacion, r+escribe y lee info")
    archivo.write("Saludos a todos los alumnos de la tecnicatura")
    archivo.write("Con esto terminamos")
    
except Exception as e:
    print(e)
finally: #siempre se ejecuta 
   archivo.close() #Con esto se debe cerrar el archivo
# archivo.write("Todo quedo perfecto") este es un error , ya que el archivo se cerro 


