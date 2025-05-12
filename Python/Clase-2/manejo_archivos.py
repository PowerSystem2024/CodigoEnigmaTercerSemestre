# Declaramos una variable
try:
    archivo = open("prueba.txt", "w", encoding= "utf8" )
    archivo.write("Programamos con diferentes tipos de archivos, ahora en txt.\n")
    archivo.write("los acentos son importantes para las palabras\n")
    archivo.write("Como por ejemplo: acción, ejecución y producción\n")
    archivo.write("las letras son:\nr read, \na append, \nw write, \nx crea un archivo ")
    archivo.write("\nt esta es para texto o text, \nb archivos binarios, \nw+ lee y escribe son iguales r+\n")
    archivo.write("Saludos a todos los alumnos de la tecnicatura\n")
    archivo.write("Con esto terminamos")
except Exception as e:
    print(e)
finally:
    archivo.close()
# archivo.write("Todo quedo perfecto"): este es un error
    


