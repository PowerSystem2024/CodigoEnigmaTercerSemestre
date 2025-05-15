archivo = open("c:\\1.1 y 1.2\prueba.txt","a",encoding="utf8") # las letras son: "r"read,  "w"write , "a"append,  "x" x crea el un archivo"
# print(archivo.read())
print(archivo.read(15))
print(archivo.read(10)) #continuamos desde la linea anterior 
print(archivo.readline()) # te lee solo la priomer linea , completa
print(archivo.readline()) # si lo volvemos a usar lee la segunda linea completa

# 1.4 (vamos a iterar el archivo ,cada una de las lineas)
# for linea in archivo:
 # print(linea): iteramos todos los elementos del archivo
 #  print(archivo.readline()[11]): #accedemos al archivo como si fuera una lista

# Anexamos informacion, copiamos a otro
archivo2 = open("copia.txt","w", encoding="utf8")  #si dejamos la a copiaria el codigo que estaba en txt , para que no lo haga ponemos la w y agregariamos lo que tenemos 
archivo2.write(archivo.read())
archivo.close() #cerramos el primer archivo
archivo2.close() #cerramos el segundo archivo

print("Se ha terminado el proceso de leer y copiar archivos")